import { apiSlice } from "../../app/api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/login-email',
                method: 'POST',
                body: {...credentials}
            })
        }),
        logout: builder.mutation({
            query: refresh_token => ({
                url: '/auth/logout',
                method: 'POST',
                body: {...refresh_token}
            })
        })
    })
})


export const {
    useLoginMutation,
    useLogoutMutation
} = usersApiSlice;
