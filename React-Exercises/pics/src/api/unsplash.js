import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID LBFRI9tbIqvOiDzDsh5pKm5IY0jWI5cqZEzifp1aVNA",
    },
});
