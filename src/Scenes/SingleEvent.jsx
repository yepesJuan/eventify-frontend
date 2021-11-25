import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { addMember, getEvent } from "../Service/eventServices";
import NavbarEventInfo from "../components/common/navbars/NavbarEventInfo";
import Footer from "../components/common/Footer";
import { CardActions, CardContent, Card } from "@mui/material/";
import { Typography, Button, Modal, Box } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import { getIdToken } from "@firebase/auth";
import { UserContext } from "../context/UserContext";
import { FieldsWrap, SingleContainer, SingleWrap } from "./SingleCss";
import { Btn } from "../components/common/ButtonCss";

// import CardMedia from "@mui/material/CardMedia";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 375,
  bgcolor: "background.paper",
  border: "3px solid #145ff5",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function SingleEvent() {
  const [event, setEvent] = useState([]);
  const [canJoin, setCanJoin] = useState(false);
  const { eventId } = useParams();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getIdToken(user)
      .then((jwt) => getEvent(eventId, jwt))
      .then(setEvent);
    // return () => {
    //   cleanup
    // }
  }, [eventId, user]);

  useEffect(() => {
    const _canJoin =
      event &&
      user &&
      user.uid &&
      (!event.userlist || !event.userlist.includes(user.uid));
    console.log({ _canJoin, event, user });
    setCanJoin(_canJoin);
  }, [event, user]);

  const handleAddMember = async () => {
    const jwt = await getIdToken(user);
    await addMember(eventId, jwt);
    handleOpen();
  };

  return (
    <>
      <NavbarEventInfo />
      <SingleContainer>
        <SingleWrap>
          <Card
            style={{ width: "420px", height: "600px", borderRadius: "20px" }}
            key={event._id}
          >
            {/* <CardMedia
                // component="img"
                // height="140"
                // image="/static/images/cards/contemplative-reptile.jpg"
                // alt="green iguana"
                /> */}
            <CardContent>
              <h2 style={{ padding: "8px 60px" }}>{event.name}</h2>
              <FieldsWrap>Sport </FieldsWrap>
              <Typography>{event.sport}</Typography>
              <FieldsWrap>Capacity </FieldsWrap>
              <Typography style={{ display: "flex" }}>
                <GroupsIcon></GroupsIcon>
                <span style={{ paddingLeft: "5px" }}>{event.capacity}</span>
              </Typography>
              <FieldsWrap>Spots Left </FieldsWrap>
              {event && (
                <Typography>
                  {Number(event.capacity) - event?.userlist?.length} out of{" "}
                  {event.capacity}
                </Typography>
              )}
              <FieldsWrap>Location </FieldsWrap>
              <Typography>{event.address}</Typography>
              <FieldsWrap>Date </FieldsWrap>
              <Typography>{event.date}</Typography>
              <FieldsWrap>Description </FieldsWrap>
              <Typography>{event.description}</Typography>
              <FieldsWrap>Attendees111 </FieldsWrap>

              <ul>
                {event &&
                  event.userlist &&
                  event.userlist.map((name) => (
                    <li style={{ listStyle: "none" }} key={name}>
                      {name}
                    </li>
                  ))}
              </ul>
            </CardContent>
            <CardActions>
              {canJoin && (
                <Button size="medium" onClick={handleAddMember}>
                  Join Event
                </Button>
              )}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="body1"
                    component="h2"
                    style={{ textAlign: "center", marginBottom: "10px" }}
                  >
                    You've Joined the Event
                  </Typography>
                  <Button
                    color="primary"
                    variant="contained"
                    style={{ color: "white" }}
                    onClick={() => navigate(`/eventList`)}
                  >
                    Go Back to Events List!
                  </Button>
                </Box>
              </Modal>
            </CardActions>
          </Card>
        </SingleWrap>
      </SingleContainer>
      <Footer />
    </>
  );
}
