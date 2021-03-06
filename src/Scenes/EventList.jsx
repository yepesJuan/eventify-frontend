import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllEvents } from "../Service/eventServices";
import NavbarList from "../components/common/navbars/NavbarList";
import Footer from "../components/common/Footer";
import GroupsIcon from "@mui/icons-material/Groups";
import { SingleContainer, ListWrap } from "./SingleCss";
import {
  Typography,
  Button,
  Grid,
  Box,
  LinearProgress,
  CardMedia,
  CardActions,
  CardContent,
  Card,
} from "@mui/material";

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [image, setImage] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllEvents().then((ret) => setEvents(ret));
    setImage(
      "https://image.shutterstock.com/image-illustration/all-sports-balls-stadium-3d-260nw-474916249.jpg"
    );
  }, []);

  return (
    <>
      <NavbarList />
      <SingleContainer>
        <ListWrap>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            padding="1px"
          >
            {!events.length ? (
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            ) : (
              events.map((item) => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={item._id}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="140"
                        src={image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography style={{ fontSize: 19, fontWeight: "600" }}>
                          {item.name}
                        </Typography>
                        <Typography style={{ fontSize: 17 }}>
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
                          size="large"
                          style={{ fontWeight: "500" }}
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
        </ListWrap>
      </SingleContainer>
      <Footer />
    </>
  );
}
