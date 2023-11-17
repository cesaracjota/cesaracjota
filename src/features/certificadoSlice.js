import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import certificadoService from "../services/certificado.service";

const initialState = {
    certificados: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

export const getAllCertificados = createAsyncThunk(
    "certificados/getAllCertificados",
    async (_, thunkAPI) => {
        try {
            return await certificadoService.getAll();
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

export const certificadoSlice = createSlice({
    name: "certificados",
    initialState,
    reducers: {
        reset : () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(getAllCertificados.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAllCertificados.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.certificados = action.payload;
        });
        builder.addCase(getAllCertificados.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const { reset } = certificadoSlice.actions;

export default certificadoSlice.reducer;
