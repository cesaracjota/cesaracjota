import axios from "axios";
import { ToastChakra } from "../helpers/toast";

const baseURL = process.env.REACT_APP_API_URL;

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

const mensajeService = {
    create,
}

export default mensajeService;