import axios from 'axios';

const token = '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';

// const API_URL = "https://dev.to/api/articles";
// const API_KEY_DEV = "sqC7soGuMdCSq5mYhDgRkzUD";

const API_URL = process.env.REACT_APP_API_URL;

const USERNAME = "cesaracjota";

async function fetchBlogs(username, perPage) {

    const response = await axios.get(`${API_URL}/devto/posts/${username}/${perPage}`);

    return response.data.data;

}

const getStarredRepositories = async () => {
    const response = await axios.get(`${API_URL}/repo/${USERNAME}`, {
        headers: {
            Authorization: `token ${token}`,
        },
    });

    return response.data.data;

};

export { getStarredRepositories, fetchBlogs };