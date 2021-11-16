import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Scenes/Home";
import { initializeApp } from "firebase/app";
import EventList from "./Scenes/EventList";
import CreateEvent from "./Scenes/CreateEvent";
import SingleEvent from "./Scenes/SingleEvent";

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
        {/* <UserContextProvider> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventList" element={<EventList />} />
          <Route path="/createEvent" element={<CreateEvent />} />
          <Route path="/singleEvent" element={<SingleEvent />} />
        </Routes>
        {/* </UserContextProvider> */}
      </Router>
    </>
  );
}

export default App;
