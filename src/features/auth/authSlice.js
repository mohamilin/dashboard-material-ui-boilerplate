import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {user: null, token: null},
    reducers: {
        setCredentials: (state, action) => {
            const result = action.payload;

            localStorage.setItem('token', result?.token?.access?.token)
            localStorage.setItem("refreshToken", result?.token?.refresh?.token);

            state.token = localStorage.getItem('token')

        },
        logout: (state, action) => {
            state.user = null;
            state.token = null;
        }
    }
})

export const {setCredentials, logout} = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = () => localStorage.getItem('token')
