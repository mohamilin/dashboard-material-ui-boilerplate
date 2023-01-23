/* eslint-disable react-hooks/rules-of-hooks */
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setCredentials, logout } from '../../features/auth/authSlice'


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
    // credentials: 'true',
    prepareHeaders: (headers, {getState}) => {
        let token = getState().auth.token;

        token = localStorage.getItem('token')

        if(token) {
            headers.set('authorization', `Bearer ${token}`)
        }

        return headers;
    }
})

const baseQueryWithReauth = async(args, api, option) => {
    let result = await baseQuery(args, api, option)
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken");

    if(result?.error?.data?.code === 401 && token ) {
        console.log('sending refresh token');
        const refreshResult = await baseQuery(`/auth/refresh-token?token=${refreshToken}`, api, option)

        if(refreshResult?.data) {
            let user = api.getState().auth.user;
            // store new token
            user = JSON.parse(user)
            api.dispatch(setCredentials({...refreshResult.data, user}))
            console.log(
                {...refreshResult.data, user}, 
                'store new token');
            // retry originial query with new access token
            result = await baseQuery(args, api, option)

        } else {
            api.dispatch(logout())
        }
    }


    return result
}


export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})