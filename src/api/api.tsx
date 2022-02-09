import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3030/",
});
export const getData = () => {
  return instance.get(`data`).then(
    (result) => {
      return result.data;
    },
    (error) => console.log(error)
  );
};
