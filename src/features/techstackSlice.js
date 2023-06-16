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

export const createTechStack = createAsyncThunk(
    "techStacks/create",
    async (data, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await techstackService.create(data, token);
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

export const updateTechStack = createAsyncThunk(
    "techStack/update",
    async ( data, thunkAPI ) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await techstackService.update(data, token);
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

export const deleteTechStack = createAsyncThunk(
    "techStack/delete",
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await techstackService.deleteTechStack(id, token);
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
        builder.addCase(createTechStack.pending, (state) => {
            state.isLoading = false;
        })
        builder.addCase(createTechStack.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.techstacks.push(action.payload);
        })
        builder.addCase(createTechStack.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        builder.addCase(updateTechStack.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(updateTechStack.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.techstacks = state.techstacks.map((data) => 
                data._id === action.payload._id ? action.payload : data);
        })
        builder.addCase(updateTechStack.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        builder.addCase(deleteTechStack.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(deleteTechStack.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.techstacks = state.techstacks.filter((data) => 
                data._id !== action.payload._id);
        })
        builder.addCase(deleteTechStack.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});

export const { reset } = techstackSlice.actions;

export default techstackSlice.reducer;
