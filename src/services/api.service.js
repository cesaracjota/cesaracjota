import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const USERNAME = "cesaracjota";

async function fetchBlogs(username, perPage) {
    const response = await axios.get(`${API_URL}/devto/posts/${username}/${perPage}`);
    return response.data.data;
}

const getStarredRepositories = async () => {
    const response = await axios.get(`${API_URL}/repo/${USERNAME}`);
    return response.data.data;
};

export {
    getStarredRepositories, 
    fetchBlogs
};