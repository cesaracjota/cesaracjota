import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import projectService from "../services/projecto.service";

const initialState = {
    projects: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

export const getAllProjects = createAsyncThunk(
    "projects/getAllProjects",
    async (_, thunkAPI) => {
        try {
            return await projectService.getAll();
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

export const projectSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        reset : () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProjects.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAllProjects.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.projects = action.payload;
        });
        builder.addCase(getAllProjects.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const { reset } = projectSlice.actions;

export default projectSlice.reducer;
