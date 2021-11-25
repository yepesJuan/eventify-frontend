import axios from "axios";

export const getAllEvents = async () => {
  const ret = await axios.get("https://eventify-rest.ue.r.appspot.com/events");
  return ret.data;
};
export const getEvent = async (_id, jwt) => {
  const ret = await axios.get(
    `https://eventify-rest.ue.r.appspot.com/events/${_id}`,
    {
      headers: { Authorization: jwt },
    }
  );
  return ret.data;
};
export const createEvent = async (data, jwt) => {
  const result = await axios.post(
    "https://eventify-rest.ue.r.appspot.com/events",
    data,
    {
      headers: { Authorization: jwt },
    }
  );
  return result;
};

export const addMember = async (eventId, jwt) => {
  const result = await axios.post(
    // `http://localhost:5000/events/addmember/${eventId}`,
    `https://eventify-rest.ue.r.appspot.com/events/addmember/${eventId}`,
    {},
    {
      headers: { Authorization: jwt },
    }
  );
  return result;
};
export const deleteEvent = async () => {
  await axios.delete("https://eventify-rest.ue.r.appspot.com/events");
};
