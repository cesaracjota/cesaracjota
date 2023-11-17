import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const getAll = async () => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const response = await axios.get(`${baseURL}/techstacks`, config);

    return response.data.techStacks;

}
const techstackService = {
    getAll,
}

export default techstackService;