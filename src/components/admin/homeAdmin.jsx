import React, { useContext } from 'react'
import { AppContext } from '../../context/context';

const HomeAdmin = () => {
    const {user,setUser} = useContext(AppContext);
    console.log(user);
    return (
        <div>
            <h1>Welcome to admin dashboard!</h1>
        </div>
    )
}

export default HomeAdmin