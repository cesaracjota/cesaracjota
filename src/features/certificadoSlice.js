import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import certificadoService from "../services/certificado.service";

const initialState = {
    certificados: [],
    certificado: [],
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

export const getCertificado = createAsyncThunk(
    "certificados/getCertificado",
    async (id, thunkAPI) => {
        try {
            return await certificadoService.getById(id);
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

export const createCertificado = createAsyncThunk(
    "certificados/create",
    async (data, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await certificadoService.create(data, token);
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

export const updateCertificado = createAsyncThunk(
    "certificados/update",
    async ( data, thunkAPI ) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await certificadoService.update(data, token);
        } catch (error) {
            const message = (error.response && 
                error.response.data && 
                error.response.data.msg) || 
                error.message || 
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const deleteCertificado = createAsyncThunk(
    "certificados/delete",
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await certificadoService.deleteCertificado(id, token);
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
        builder.addCase(getCertificado.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCertificado.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.certificado = action.payload;
        });
        builder.addCase(getCertificado.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
        builder.addCase(createCertificado.pending, (state) => {
            state.isLoading = false;
        })
        builder.addCase(createCertificado.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.certificados.push(action.payload);
        })
        builder.addCase(createCertificado.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        builder.addCase(updateCertificado.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(updateCertificado.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.certificados = state.certificados.map((certificado) => 
                certificado._id === action.payload._id ? action.payload : certificado);
        })
        builder.addCase(updateCertificado.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        builder.addCase(deleteCertificado.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(deleteCertificado.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.certificados = state.certificados.filter((certificado) => 
                certificado._id !== action.payload._id);
        })
        builder.addCase(deleteCertificado.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});

export const { reset } = certificadoSlice.actions;

export default certificadoSlice.reducer;
