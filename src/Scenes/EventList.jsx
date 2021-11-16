import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllEvents } from "../Service/eventServices";
import NavbarList from "../components/common/NavbarList";
import Footer from "../components/common/Footer";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import GroupsIcon from "@mui/icons-material/Groups";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import CardMedia from "@mui/material/CardMedia";

export default function EventList() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllEvents().then((ret) => setEvents(ret));
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "grey",
        flexDirection: "column",
      }}
    >
      <NavbarList />
      {!events.length ? (
        <h2>Event List!!</h2>
      ) : (
        events.map((item) => {
          return (
            <Card
              key={item._id}
              style={{
                margin: "5px",
                padding: "10px",
                justifyContent: "space-around",
                maxWidth: "300px",
              }}
            >
              {/* <CardMedia
                // component="img"
                // height="140"
                // image="/static/images/cards/contemplative-reptile.jpg"
                // alt="green iguana"
                /> */}
              <CardContent>
                <Typography>{item.name}</Typography>
                <Typography style={{ fontSize: 13 }}>{item.sport}</Typography>
                <Typography style={{ display: "flex" }}>
                  <GroupsIcon></GroupsIcon>
                  <span style={{ paddingLeft: "5px" }}> {item.capacity}</span>
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => navigate(`/singleEvent/${events._id}`)}
                >
                  More Info
                </Button>
              </CardActions>
            </Card>
          );
        })
      )}
      <Footer />
    </div>
  );
}
