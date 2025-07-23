import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://amazing-moonlight-9222a198d9.strapiapp.com/api",
  params: {
    populate: "*",
  },
});
