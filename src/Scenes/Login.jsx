import "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useState } from "react";
import { useNavigate } from "react-router";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

// const auth = firebase.auth();

// const creds = require("../credentials");

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const userLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => navigate("/"))
      .catch((err) => alert(err.message));
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              userLogin();
            }}
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
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            value="Login"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Link href="/signup" variant="body2">
            {"Don't have an account yet? Sign Up"}
          </Link>
        </Container>
      </ThemeProvider>
    </>
  );
}
