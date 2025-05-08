import { axiosInstance } from "../lib/axios";

export function getTasks() {
  return axiosInstance
    .get("/api/task/")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR", error);
      return null;
    });
}

export function sendMessage(text: string) {
  return axiosInstance
    .post("/api/task/message", {
      message: text,
    })
    .then((response) => {
      // console.log('RESPUESTA DE AXIOS', response);
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR", error);
      return null;
    });
}
