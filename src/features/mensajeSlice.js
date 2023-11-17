import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mensajeService from "../services/mensaje.service";

const initialState = {
    mensajes: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

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

export const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        reset : () => initialState,
    },
    extraReducers: (builder) => {
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
    }
});

export const { reset } = messageSlice.actions;

export default messageSlice.reducer;
