import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../Service/eventServices";
import { TextField, Button } from "@mui/material";
import { Box, Modal } from "@mui/material";
import NavbarCreate from "../components/common/navbars/NavbarCreate";
import Footer from "../components/common/Footer";
import Sidebar from "../components/common/navbars/Sidebar";
import { UserContext } from "../context/UserContext";
import { getIdToken } from "@firebase/auth";
import { CreateContainer, CreateWrap } from "./SingleCss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "3px solid #145ff5",
  boxShadow: 24,
  p: 4,
};

const CreateEvent = () => {
  const [name, setName] = useState("");
  const [sport, setSport] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isOpen, setIsOPen] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    getIdToken(user).then((jwt) =>
      createEvent({ name, sport, capacity, address, date, description }, jwt)
    );
    handleOpen();
  };
  const toggle = () => {
    setIsOPen(!isOpen);
  };

  return (
    <>
      <NavbarCreate />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <CreateContainer>
        <CreateWrap>
          <form onSubmit={handleForm}>
            <TextField
              style={{ display: "flex", flexDirection: "column", width: 220 }}
              id="outlined-basic"
              label="Name of Event"
              variant="outlined"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            &nbsp;
            <TextField
              style={{ display: "flex", flexDirection: "column", width: 220 }}
              id="outlined-basic"
              label="Sport"
              variant="outlined"
              required="true"
              value={sport}
              onChange={(e) => setSport(e.target.value)}
            />
            &nbsp; <br />
            <TextField
              style={{ display: "flex", flexDirection: "column", width: 220 }}
              id="outlined-basic"
              label="Number of Players"
              variant="outlined"
              required="true"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
            &nbsp;
            <TextField
              style={{ display: "flex", flexDirection: "column", width: 220 }}
              id="outlined-basic"
              label="Location"
              variant="outlined"
              value={address}
              required="true"
              onChange={(e) => setAddress(e.target.value)}
            />
            &nbsp; <br />
            <TextField
              style={{ display: "flex", flexDirection: "column", width: 220 }}
              type="date"
              id="outlined-basic"
              variant="outlined"
              required="true"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            &nbsp;
            <TextField
              style={{ display: "flex", flexDirection: "column", width: 220 }}
              id="outlined-basic"
              label="Description"
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            &nbsp; <br />
            <Button variant="contained" onClick={handleForm}>
              Create Event
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div style={{ display: "flex", alignContent: "center" }}>
                  <Button
                    color="primary"
                    variant="contained"
                    style={{
                      color: "white",
                      marginLeft: "50px",
                    }}
                    onClick={() => navigate(`/eventList`)}
                  >
                    Event Created!
                  </Button>
                </div>
              </Box>
            </Modal>
          </form>
        </CreateWrap>
      </CreateContainer>
      <Footer />
    </>
  );
};

export default CreateEvent;
