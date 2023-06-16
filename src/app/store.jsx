import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import userReducer from "../features/userSlice";
import certificadoReducer from "../features/certificadoSlice";
import mensajeReducer from "../features/mensajeSlice";
import techstackReducer from "../features/techstackSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: userReducer,
        certificados: certificadoReducer,
        mensajes: mensajeReducer,
        techstacks: techstackReducer,
    },
})