import axios from "axios";

const KEY = "AIzaSyDGbn1KoTShps7tle7oQ-4VXWhwA4zuP-4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
