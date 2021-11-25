// import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
// import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../context/UserContext";
// import {GitHubIcon} from "@mui/icons-material;

// const provider = new GoogleAuthProvider();
// export const Login = () => {
//   const { user, setUser } = useContext(UserContext);
//   let navigate = useNavigate();

//   const handleLogin = () => {
//     const auth = getAuth();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         setUser(result.user);
//       })
//       .catch((err) => err.message);
//   };
//   useEffect(() => {
//     if (user) {
//       navigate("/eventlist");
//     }
//   }, [user]);

//   return (
//     <>
//       <h1>Login Page</h1>
//       <button onClick={handleLogin}>Login</button>

//       <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#272262",
//         height: "100vh",
//       }}
//     >
//       <Card
//         style={{
//           padding: "75px",
//           backgroundColor: "white",
//           margin: "10% auto",
//           borderRadius: "16px",
//         }}
//       >
//         <CardContent>
//           <Typography
//             gutterBottom
//             variant="h3"
//             component="div"
//             color="#202020"
//             style={{ textAlign: "center" }}
//           >
//             Welcome to Perfect Practice
//           </Typography>
//         </CardContent>
//         <CardActions
//           style={{ display: "flex", justifyContent: "space-around" }}
//         >
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={handleLogin}
//             style={{
//               fontSize: "1.5em",
//               padding: "25px",
//             }}
//           >
//             <GoogleIcon style={{ marginRight: "10px", fontSize: "1.5em" }} />{" "}
//             Sign in with Github
//           </Button>
//         </CardActions>
//       </Card>
//     </div>
//   );
// };
//     </>
//   );
// };
