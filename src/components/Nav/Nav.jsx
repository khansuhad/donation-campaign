import React from 'react';
import image from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => {
    return (
        <nav>
               <div className='flex flex-col lg:flex-row lg:justify-between justify-center gap-5 items-center px-[10%] pt-10'>
            <div className=''>
            <img src={image} className=''/>
            </div>
            <div className='flex gap-5 text-2xl font-semibold'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/donation'>Donation</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
               
            </div>
            </div>
        </nav>
    );
};

export default Nav;