import { getAuth } from "@firebase/auth";
import axios from "axios";

// export const getClient = async () => {
//   const auth = getAuth();
//   let headers = {};
//   if (auth.currentUser) {
//     const jwt = await auth.currentUser.getIdToken();
//     headers = { Authorization: jwt };
//   }

//   return axios.create({ headers, baseURL: "http://localhost:5000" });
// };
