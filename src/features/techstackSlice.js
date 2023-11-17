import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import techstackService from "../services/techstack.service";

const initialState = {
    techstacks: [],
    techstack: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

export const getAllTechStacks = createAsyncThunk(
    "techstacks/getAllTechStacks",
    async (_, thunkAPI) => {
        try {
            return await techstackService.getAll();
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

export const techstackSlice = createSlice({
    name: "techstack",
    initialState,
    reducers: {
        reset : () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(getAllTechStacks.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAllTechStacks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.techstacks = action.payload;
        });
        builder.addCase(getAllTechStacks.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const { reset } = techstackSlice.actions;

export default techstackSlice.reducer;
