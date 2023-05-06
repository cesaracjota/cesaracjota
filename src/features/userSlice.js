import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../services/user.service";

const initialState = {
    users: [],
    user: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

export const getAllUsers = createAsyncThunk(
    "users/getAllUsers",
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await userService.getAllUsers(token);
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

export const getUser = createAsyncThunk(
    "users/getUser",
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await userService.getUser(id, token);
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

export const createUser = createAsyncThunk(
    "user/create",
    async (data, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await userService.createUser(data, token);
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

export const updateUser = createAsyncThunk(
    "user/update",
    async ( data, thunkAPI ) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await userService.updateUser(data, token);
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

export const deleteUser = createAsyncThunk(
    "user/delete",
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await userService.deleteUser(id, token);
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

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        reset : () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.users = action.payload;
        });
        builder.addCase(getAllUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
        builder.addCase(getUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = false;
        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.users.push(action.payload);
        })
        builder.addCase(createUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        builder.addCase(updateUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.users = state.users.map((user) => 
                user._id === action.payload._id ? action.payload : user);
        })
        builder.addCase(updateUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        builder.addCase(deleteUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.users = state.users.filter((user) => 
                user._id !== action.payload._id);
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;
