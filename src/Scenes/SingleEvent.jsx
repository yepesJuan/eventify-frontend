import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { getEvent } from "../Service/eventServices";
import NavbarEventInfo from "../components/common/navbars/NavbarEventInfo";
import Footer from "../components/common/Footer";
import { CardActions, CardContent, Card } from "@mui/material/";
import { Typography, Button, Grid } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import { getIdToken } from "@firebase/auth";
import { UserContext } from "../context/UserContext";

// import CardMedia from "@mui/material/CardMedia";

export default function SingleEvent() {
  const [event, setEvent] = useState([]);
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    getIdToken(user)
      .then((jwt) => getEvent(eventId, jwt))
      .then(setEvent);
    // return () => {
    //   cleanup
    // }
  }, [eventId, user]);

  return (
    <>
      <NavbarEventInfo />
      <div
        style={{
          flexGrow: 1,
          backgroundColor: "black",
        }}
      >
        <Grid item xs={12} sm={6} md={3} key={event._id}>
          <Card>
            {/* <CardMedia
                // component="img"
                // height="140"
                // image="/static/images/cards/contemplative-reptile.jpg"
                // alt="green iguana"
                /> */}
            <CardContent>
              <Typography>{event.name}</Typography>
              <Typography style={{ fontSize: 13 }}>{event.sport}</Typography>
              <Typography style={{ display: "flex" }}>
                <GroupsIcon></GroupsIcon>
                <span style={{ paddingLeft: "5px" }}>{event.capacity}</span>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate(`/eventList`)}>
                Join Event
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </div>
      <Footer />
    </>
  );
}
