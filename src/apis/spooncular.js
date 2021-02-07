import axios from "axios";

export default axios.create({
  baseURL: "https://api.spoonacular.com",
  header: {
    "Content-type": "application/json"
  }
});
