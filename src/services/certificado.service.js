import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const getAll = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const response = await axios.get(`${baseURL}/certificados`, config);

    return response.data.certificados;
}


const certificadoService = {
    getAll,
}

export default certificadoService;