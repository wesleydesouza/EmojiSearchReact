import axios from "axios";
// https://raw.githubusercontent.com/ahfarmer/emoji-search/master/src/emojiList.json

const api = axios.create({
    baseURL: "https://raw.githubusercontent.com"
});

export default api;