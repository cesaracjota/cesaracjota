import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const getAll = async () => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const response = await axios.get(`${baseURL}/projects`, config);

    return response.data.projects;

}

const projectService = {
    getAll,
}

export default projectService;