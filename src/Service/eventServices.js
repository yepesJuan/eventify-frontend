import axios from "axios";

export const getAllEvents = async () => {
  const ret = await axios.get("http://localhost:5000/events");
  return ret.data;
};
export const getEvent = async (_id, jwt) => {
  const ret = await axios.get(`http://localhost:5000/events/${_id}`, {
    headers: { Authorization: jwt },
  });
  return ret.data;
};
export const createEvent = async (data, jwt) => {
  const result = await axios.post("http://localhost:5000/events", data, {
    headers: { Authorization: jwt },
  });
  return result;
};
export const deleteEvent = async () => {
  await axios.delete("http://localhost:5000/events");
};
