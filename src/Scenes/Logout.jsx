import { getAuth, signOut } from "firebase/auth";

const Logout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
  return <div></div>;
};

export default Logout;
