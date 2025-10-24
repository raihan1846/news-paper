import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../../assets/user.png"
import { AuthContext } from '../../provider/AuthProvider';
const Navbar = () => {
    const {user, logOut} = use(AuthContext)
    const handleLogout = () =>{
        logOut().then(()=>{
         alert("You Logout successfully..")
        })
        .catch((error)=>{
         console.log(error.message);
        })
    }
    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user && user.email}</div>
            <div className='nav flex gap-5 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login-btn flex gap-5'>
                <img src={`${user ? user.photoUrl: userIcon}`} alt="" />
                {
                    user ? 
                <button className='btn btn-primary px-10' onClick={handleLogout}>Logout</button>
                    
                    : 
                <Link className='btn btn-primary px-10' to="/auth/login">Login</Link>

                }
            </div>
        </div>
    );
};

export default Navbar;