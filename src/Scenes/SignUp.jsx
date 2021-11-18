import "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [onlineid, setOnlineid] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const createUser = (uid) => {
    const user = {
      email: email,
      fname: fname,
      lname: lname,
      onlineid: onlineid,
      uid,
    };

    fetch("http://localhost:5000/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => alert(err));
  };

  const signUpHandler = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const json = JSON.stringify(res.user);
        localStorage.setItem("user", json);
        console.log(res.user);
        createUser(res.user.uid);
        // navigate("/signup");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form
            onSubmit={(e) => {
              signUpHandler(e);
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="First Name"
            name="fname"
            type="fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Last Name"
            name="lname"
            type="lname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Online ID"
            name="onlineid"
            type="onlineid"
            value={onlineid}
            onChange={(e) => setOnlineid(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={(e) => signUpHandler(e)}
            type="submit"
            value="Sign Up"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Link href="/login" variant="body2">
            {"Already have an account? Log In!"}
          </Link>
        </Container>
      </ThemeProvider>
    </>
  );
}
