import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;

export const login = createAsyncThunk('auth/login', async (loginData, thunkApi) => {
    try {
        const res = await axios.post(base_url + '/api/v1/login', loginData);
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
})
export const register = createAsyncThunk('auth/register', async (registerData, thunkApi) => {
    try {
        const res = await axios.post(base_url + '/api/v1/register', registerData);
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
})

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    email: null,
    apiKey: null,
    accessToken: null,
    success: null,
    msg: null,
    registerSuccess: null,
    registerMsg: null
}



const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: (state, action) => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('email')
            localStorage.removeItem('apiKey')
            state.email = null;
            state.apiKey = null;
            state.accessToken = null;
            state.success = null;
            state.msg = null;
            state.isLoggedIn = false;
        },
        setCredentials: (state, action) => {
            const { email, apiKey, accessToken } = action.payload;
            state.email = email;
            state.apiKey = apiKey;
            state.accessToken = accessToken;
            state.isLoggedIn = true;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        }).addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.email = action.payload.email;
            state.apiKey = action.payload.apiKey;
            state.accessToken = action.payload.token;
            state.success = action.payload.success;
            state.msg = action.payload.msg;
            localStorage.setItem('email',action.payload.email)
            localStorage.setItem('apiKey',action.payload.apiKey)
            localStorage.setItem('accessToken',action.payload.token)
        }).addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.success = false;
            state.msg = action.payload.msg;
        }).addCase(register.pending, (state) => {
            state.isLoading = true;
        }).addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.registerSuccess = true;
            state.registerMsg = action.payload.msg;
        }).addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.registerSuccess = false;
            state.registerMsg = action.payload.msg;
        })
    }
})

export const { logout, setCredentials } = loginSlice.actions;

export default loginSlice.reducer;