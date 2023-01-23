import React from 'react'
import {useGetUsersQuery} from '../features/users/userApiSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function Users() {
    const navigate  = useNavigate();
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        // error
    } = useGetUsersQuery()

    console.log(users, 'users');

    let content;
    if(isLoading) {
        content = <p>"Loading"</p>
    } else if(isSuccess) {
        content = <p>"Success" <Link to='/dashboard'>DAsh</Link></p>

    } else if(isError) {
        navigate("/");
    } else {
        content = (
            <>
            Gagagl
            <Link to="/dashboard">Dashboard</Link>
            </>
        )
    }


  return (
    <div>{content}</div>
  )
}
