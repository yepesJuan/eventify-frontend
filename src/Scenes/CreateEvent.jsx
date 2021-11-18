import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../Service/eventServices";
import { TextField, Button } from "@mui/material";
import { Box, Typography, Modal } from "@mui/material";
import NavbarCreate from "../components/common/navbars/NavbarCreate";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
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
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      await createEvent({ name, sport, capacity, address, date, description });
      handleOpen();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <NavbarCreate />
      <div>
        <form onSubmit={handleForm}>
          <TextField
            style={{ display: "flex", flexDirection: "column", width: 220 }}
            id="outlined-basic"
            label="Name of Event"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          &nbsp;
          <TextField
            style={{ display: "flex", flexDirection: "column", width: 220 }}
            id="outlined-basic"
            label="Sport"
            variant="outlined"
            value={sport}
            onChange={(e) => setSport(e.target.value)}
          />
          &nbsp; <br />
          <TextField
            style={{ display: "flex", flexDirection: "column", width: 220 }}
            id="outlined-basic"
            label="Number of Players"
            variant="outlined"
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
            onChange={(e) => setAddress(e.target.value)}
          />
          &nbsp; <br />
          <TextField
            style={{ display: "flex", flexDirection: "column", width: 220 }}
            type="date"
            id="outlined-basic"
            variant="outlined"
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
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Event added!
              </Typography>
              <Button
                color="secondary"
                variant="contained"
                style={{ color: "white" }}
                onClick={() => navigate(`/eventList`)}
              >
                Go back to event list
              </Button>
            </Box>
          </Modal>
        </form>
      </div>
    </>
  );
};

export default CreateEvent;
