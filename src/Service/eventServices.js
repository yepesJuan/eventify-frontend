import axios from "axios";

export const getAllEvents = async () => {
  const ret = await axios.get("http://localhost:5000/events");
  return ret.data;
};
export const getEvent = async (_id) => {
  const ret = await axios.get(`http://localhost:5000/questions/${_id}`);
  return ret.data;
};
export const createEvent = async (data) => {
  const result = await axios.post("http://localhost:5000/events", data);
  return result;
};
export const deleteEvent = async () => {
  await axios.delete("http://localhost:5000/events");
};
