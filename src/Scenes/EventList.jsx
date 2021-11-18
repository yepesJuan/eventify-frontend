import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllEvents } from "../Service/eventServices";
import NavbarList from "../components/common/navbars/NavbarList";
import Footer from "../components/common/Footer";
import { CardActions, CardContent, Card } from "@mui/material/";
import { Typography, Button, Grid } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
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
    <>
      <NavbarList />
      <div
        style={{
          flexGrow: 1,
          backgroundColor: "black",
        }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          padding="15px"
        >
          {!events.length ? (
            <h2>Event List!!</h2>
          ) : (
            events.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={item._id}>
                  <Card>
                    {/* <CardMedia
                // component="img"
                // height="140"
                // image="/static/images/cards/contemplative-reptile.jpg"
                // alt="green iguana"
                /> */}
                    <CardContent>
                      <Typography style={{ fontSize: 20 }}>
                        {item.name}
                      </Typography>
                      <Typography style={{ fontSize: 14 }}>
                        {item.sport}
                      </Typography>
                      <Typography style={{ display: "flex" }}>
                        <GroupsIcon></GroupsIcon>
                        <span style={{ paddingLeft: "5px" }}>
                          {item.capacity}
                        </span>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        onClick={() => navigate(`/eventList/${item._id}`)}
                      >
                        More Info
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
          )}
        </Grid>
      </div>
      <Footer />
    </>
  );
}
