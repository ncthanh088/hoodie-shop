import axios from 'axios';

// REST api
const api = () => {
    return {
        get: (url) => axios.get(url),
        delete: (url) => axios.delete(url),
        post: (url, body) => axios.post(url, body),
        patch: (url, body) => axios.patch(url, body),
        put: (url, body, config) => axios.put(url, body, config),
    };
};

export default api();