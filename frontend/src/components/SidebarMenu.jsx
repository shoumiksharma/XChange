import React from 'react';
import { NavLink } from 'react-router-dom';
import { logOut } from '../utils/logInFunctions';

function SidebarMenu({ isMenuOpen , closeMenu, openFeedback }) {
    return (
        true && (
            <div
            className={`fixed top-0 left-0 md:w-[30vw] h-full bg-gradient-to-r from-[#000000] to-[#827a7a00] text-white transform ${isMenuOpen ? 'translate-x-0 z-7' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>

            <div onClick={closeMenu} className={`flex flex-col items-center mt-[40%] ${isMenuOpen ? 'block' : 'hidden'} ml-[40px]`}>
                
                <NavLink to="/" className={({ isActive }) => `${isActive ? 'bg-gray-700' : ''} p-4 hover:bg-gray-700 transform transition-transform ease-in-out hover:scale-110 duration-200 scale-[2px] text-lg w-full rounded-full text-center`}>Home</NavLink>
                <NavLink to="/search-rooms" className={({ isActive }) => `${isActive ? 'bg-gray-700' : ''} p-4 hover:bg-gray-700 transform transition-transform ease-in-out hover:scale-110 duration-200 text-lg w-full rounded-full text-center`}>Search Room</NavLink>
                <NavLink to="/" className={({ isActive }) => `${isActive ? 'bg-gray-700' : ''} p-4 hover:bg-gray-700 transform transition-transform ease-in-out hover:scale-110 duration-200 text-lg w-full rounded-full text-center`}>Host Room</NavLink>
                <NavLink to="/reviews" className={({ isActive }) => `${isActive ? 'bg-gray-700' : ''} p-4 hover:bg-gray-700 transform transition-transform ease-in-out hover:scale-110 duration-200 text-lg w-full rounded-full text-center`}>Hostel Review</NavLink>
                <NavLink to="/profile" className={({ isActive }) => `${isActive ? 'bg-gray-700' : ''} p-4 hover:bg-gray-700 transform transition-transform ease-in-out hover:scale-110 duration-200 text-lg w-full rounded-full text-center`}>Profile</NavLink>
                <NavLink to="/" onClick={() => {logOut()}} className={`p-4 hover:bg-gray-700 transform transition-transform ease-in-out hover:scale-110 duration-200 text-lg w-full rounded-full text-center`}>Log Out</NavLink>
                <button onClick={openFeedback} className="p-4 hover:bg-gray-700 transform transition-transform ease-in-out hover:scale-110 duration-200 text-lg w-full rounded-full text-center">Have a feedback ?</button>
            </div>
        </div>)
    );
}

export default SidebarMenu;

                {/* <button className="p-4 text-lg hover:bg-gray-700 w-full rounded-full">Search Room</button>
                <button className="p-4 text-lg hover:bg-gray-700 w-full rounded-full">Host Room</button>
                <button className="p-4 text-lg hover:bg-gray-700 w-full rounded-full">Hostel Review</button>
                <button className="p-4 text-lg hover:bg-gray-700 w-full rounded-full">Profile</button>
                <button className="p-4 text-lg hover:bg-gray-700 w-full rounded-full">Log Out</button>
                <button className="p-4 text-lg hover:bg-gray-700 w-full rounded-full">Have a feedback ?</button> */}