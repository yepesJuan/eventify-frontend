import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { addMember, getEvent } from "../Service/eventServices";
import { getIdToken } from "@firebase/auth";
import { UserContext } from "../context/UserContext";
import NavbarEventInfo from "../components/common/navbars/NavbarEventInfo";
import Footer from "../components/common/Footer";
import { FieldsWrap, SingleContainer, SingleWrap } from "./SingleCss";
import {
  CardActions,
  CardContent,
  Typography,
  Button,
  Card,
  Modal,
  Box,
} from "@mui/material/";
import GroupsIcon from "@mui/icons-material/Groups";

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
    window.scrollTo(0, 0);
    getIdToken(user)
      .then((jwt) => getEvent(eventId, jwt))
      .then(setEvent);
    return () => {
      setEvent();
    };
  }, [eventId, user]);

  useEffect(() => {
    const _canJoin =
      event &&
      user &&
      user.displayName &&
      (!event.userlist || !event.userlist.includes(user.displayName));
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
            style={{ width: "450px", borderRadius: "20px" }}
            key={event._id}
          >
            <CardContent>
              <h2 style={{ display: "flex", justifyContent: "center" }}>
                {event.name}
              </h2>
              <FieldsWrap>Sport! </FieldsWrap>
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
              <FieldsWrap>Attendees </FieldsWrap>
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
                <Button
                  style={{ fontWeight: "500" }}
                  size="large"
                  onClick={handleAddMember}
                >
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
                  <Button
                    color="primary"
                    variant="contained"
                    style={{ color: "white" }}
                    onClick={() => navigate(`/eventList`)}
                  >
                    Event Joined!
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
