import { configureStore } from "@reduxjs/toolkit";
import certificadoReducer from "../features/certificadoSlice";
import mensajeReducer from "../features/mensajeSlice";
import techstackReducer from "../features/techstackSlice";
import projectReducer from "../features/projectSlice";

export const store = configureStore({
    reducer: {
        certificados: certificadoReducer,
        mensajes: mensajeReducer,
        techstacks: techstackReducer,
        projects: projectReducer
    },
})