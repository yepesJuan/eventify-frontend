// import { getAuth } from "firebase/auth";
// import { Input, Button, Container, TextField } from "@mui/material";
// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";

// export default function SignUp() {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const auth = getAuth();
//   const { setUser } = useContext(UserContext);

//   return (
//     <Container labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
//       <TextField
//         label="Email"
//         name="email"
//         rules={[{ required: true, message: "Please include your email" }]}
//       >
//         <Input />
//       </TextField>
//       <TextField
//         label="Password"
//         name="password"
//         rules={[{ required: true, message: "Please enter your password" }]}
//       >
//         {" "}
//       </TextField>
//       <TextField wrapperCol={{ span: 16, offset: 8 }}>
//         <Button type="primary" htmlType="submit">
//           Sign Up
//         </Button>
//         &nbsp;
//       </TextField>
//     </Container>
//   );
// }
