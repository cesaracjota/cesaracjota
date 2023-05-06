import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mensajeService from "../services/mensaje.service";

const initialState = {
    mensajes: [],
    mensaje: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

export const getAllMensajes = createAsyncThunk(
    "mensajes/getAllMessages",
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await mensajeService.getAll(token);
        } catch (error){
            const message = 
            (error.response && 
                error.response.data && 
                error.response.data.msg) || 
                error.message || 
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getMessage = createAsyncThunk(
    "mensajes/getMessage",
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await mensajeService.getById(id, token);
        } catch (error){
            const message = 
            (error.response && 
                error.response.data && 
                error.response.data.msg) || 
                error.message || 
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const createMessage = createAsyncThunk(
    "mensajes/create",
    async (data, thunkAPI) => {
        try {
            return await mensajeService.create(data);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data && 
                    error.response.data.msg) ||
                    error.message ||
                    error.toString();
                return thunkAPI.rejectWithValue(message);
        }
    }
)

export const mensajeMarcadoLeido = createAsyncThunk(
    "mensajes/mensajeMarcadoLeido",
    async (data, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;

            return await mensajeService.mensajeLeido(data, token);

        } catch (error){
            const message = 
            (error.response && 
                error.response.data && 
                error.response.data.msg) || 
                error.message || 
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const deleteMessage = createAsyncThunk(
    "mensaje/delete",
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await mensajeService.deleteMensaje(id, token);
        } catch (error) {
            const message = 
            (error.response && 
                error.response.data && 
                error.response.data.msg) || 
                error.message || 
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        reset : () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(getAllMensajes.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAllMensajes.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.mensajes = action.payload;
        });
        builder.addCase(getAllMensajes.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
        builder.addCase(getMessage.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMessage.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.mensaje = action.payload;
        });
        builder.addCase(getMessage.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
        builder.addCase(createMessage.pending, (state) => {
            state.isLoading = false;
        })
        builder.addCase(createMessage.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.mensajes.push(action.payload);
        })
        builder.addCase(createMessage.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        builder.addCase(mensajeMarcadoLeido.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(mensajeMarcadoLeido.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.mensajes = state.mensajes.map((mensaje) => 
                mensaje._id === action.payload._id ? action.payload : mensaje);
        })
        builder.addCase(mensajeMarcadoLeido.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        builder.addCase(deleteMessage.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(deleteMessage.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.mensajes = state.mensajes.filter((mensaje) => 
                mensaje._id !== action.payload._id);
        })
        builder.addCase(deleteMessage.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});

export const { reset } = messageSlice.actions;

export default messageSlice.reducer;
