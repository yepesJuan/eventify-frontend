import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Scenes/Home";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBs7qTfZGX67qR8d367EylcrqznFQfx8v8",
  authDomain: "eventify-ui.firebaseapp.com",
  projectId: "eventify-ui",
  storageBucket: "eventify-ui.appspot.com",
  messagingSenderId: "455536338111",
  appId: "1:455536338111:web:a014485bdb10ec4cb4120a",
};

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <Router>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </UserContextProvider>
      </Router>
    </>
  );
}

export default App;
