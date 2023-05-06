import axios from "axios";
import { ToastChakra } from "../helpers/toast";
// import { ToastChakra } from "../helpers/toast";

const baseURL = process.env.REACT_APP_API_URL;

// Get all messages
const getAll = async (token) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }
    const response = await axios.get(`${baseURL}/mensajes`, config);

    return response.data.mensajes;
}

// Get a specific message

const getById = async (id, token) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }
    const response = await axios.get(`${baseURL}/mensajes/${id}`, config);
    return response.data.mensajes;
}

// Create a new user


const create = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const response = await axios.post(`${baseURL}/mensajes`, data, config);
    if (response.status === 200 || response.status === 201) {
        setTimeout(() => {
            ToastChakra('SU MENSAJE FUE ENVIADO', 'El mensaje ha sido registrado correctamente','success', 3500, 'bottom');
        }, 1000)
        return response.data.mensaje;
    }
}

const mensajeLeido = async (data, token) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }
    const response = await axios.put(`${baseURL}/mensajes/leido/${data?._id}`, data, config);
    if (response.status === 200 || response.status === 201) {
        ToastChakra('EL MENSAJE HA SIDO MARCADO COMO LEIDO', 'El mensaje ha sido marcado leido correctamente','info', 3500, 'bottom');
        return response.data.mensaje;
    }
}

// Delete a message


const deleteMensaje = async (id, token) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }
    const response = await axios.delete(`${baseURL}/mensajes/${id}`, config);
    ToastChakra('MENSAJE ELIMINADO', 'El mensaje se ha eliminado correctamente','success', 1500, 'bottom');
    return response.data.mensaje;
}

const mensajeService = {
    getAll,
    getById,
    create,
    mensajeLeido,
    deleteMensaje,
}

export default mensajeService;