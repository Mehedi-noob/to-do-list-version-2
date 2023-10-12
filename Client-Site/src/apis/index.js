import axios from "axios";

export default axios.create({
    // baseURL: "http://localhost:3030"
    baseURL: "https://to-do-list-backend-one.vercel.app"
});