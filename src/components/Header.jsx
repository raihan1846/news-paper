import React from 'react';
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className='flex flex-center flex-col items-center gap-3'>
           <img className='w-[350px]' src={logo} alt="" />
           <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;