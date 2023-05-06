import axios from "axios";
import { ToastChakra } from "../helpers/toast";
// import { ToastChakra } from "../helpers/toast";

const baseURL = process.env.REACT_APP_API_URL;

// Get all phrases
const getAll = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const response = await axios.get(`${baseURL}/certificados`, config);

    return response.data.certificados;
}

// Get a specific user

const getById = async (id) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const response = await axios.get(`${baseURL}/certificados/${id}`, config);
    return response.data.certificados;
}

// Create a new user

const create = async (data, token) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }
    const response = await axios.post(`${baseURL}/certificados`, data, config);
    if (response.status === 200 || response.status === 201) {
        ToastChakra('CERTIFICADO CREADO', 'El certificado se ha agregado correctamente','success', 1500, 'bottom');
        return response.data.certificado;
    }
}

// Update a user

const update = async (data, token) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }
    const response = await axios.put(`${baseURL}/certificados/${data._id}`, data, config);
    if (response.status === 200 || response.status === 201) {
        ToastChakra('REGISTRO MODIFICADO', 'El certificado se ha modificado correctamente','success', 1500, 'bottom');
        return response.data.certificado;
    }
}

// Delete a user

const deleteCertificado = async (id, token) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }
    const response = await axios.delete(`${baseURL}/certificados/${id}`, config);
    ToastChakra('CERTIFICADO ELIMINADO', 'El certificado se ha eliminado correctamente','success', 1500, 'bottom');
    return response.data.certificado;
}

const certificadoService = {
    getAll,
    getById,
    create,
    update,
    deleteCertificado,
}

export default certificadoService;