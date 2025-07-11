import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function SidebarMenu({ isMenuOpen , closeMenu, openFeedback }) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const logOut = async () => {
        try{
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/logOut`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials : 'include'
            })
            const data = await response.json();
            console.log(data.message);
            if(response.status == 200){
                dispatch({type : 'logOut'});
                navigate('/');
            }
        }
    
        catch(err){
            console.log("Error : ",err);
        }
    }

    return (
        true && (
            <div
            className={`fixed top-0 left-0 md:w-[30vw] h-full bg-gradient-to-r from-[#000000] to-[#827a7a00] text-white transform ${isMenuOpen ? 'translate-x-0 z-7' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>

            <div onClick={closeMenu} className={`flex flex-col items-center mt-[40%] ${isMenuOpen ? 'block' : 'hidden'} ml-[40px]`}>
                
                <NavLink to="/" className={({ isActive }) => `${isActive ? 'bg-gray-700' : ''} p-4 hover:bg-gray-700 transform transition-transform ease-in-out hover:scale-110 duration-200 scale-[2px] text-lg w-full rounded-full text-center`}>Home</NavLink>
                <NavLink to="/search-rooms" className={({ isActive }) => `${isActive ? 'bg-gray-700' : ''} p-4 hover:bg-gray-700 transform transition-transform ease-in-out hover:scale-110 duration-200 text-lg w-full rounded-full text-center`}>Search Room</NavLink>
                {/* {isLoggedIn && <NavLink to="/room" className={({ isActive }) => `${isActive ? 'bg-gray-700' : ''} p-4 hover:bg-gray-700 transform transition-transform ease-in-out hover:scale-110 duration-200 text-lg w-full rounded-full text-center`}>Your Room</NavLink>} */}
                {isLoggedIn && <NavLink to="/chats" className={({ isActive }) => `${isActive ? 'bg-gray-700' : ''} p-4 hover:bg-gray-700 transform transition-transform ease-in-out hover:scale-110 duration-200 text-lg w-full rounded-full text-center`}>Chats</NavLink>}
                {!isLoggedIn && <NavLink to="/log-in" className={`p-4 hover:bg-gray-700 transform transition-transform ease-in-out hover:scale-110 duration-200 text-lg w-full rounded-full text-center`}>Chats</NavLink>}
                <NavLink to="/reviews" className={({ isActive }) => `${isActive ? 'bg-gray-700' : ''} p-4 hover:bg-gray-700 transform transition-transform ease-in-out hover:scale-110 duration-200 text-lg w-full rounded-full text-center`}>Hostel Review</NavLink>
                {isLoggedIn && <NavLink to="/profile" className={({ isActive }) => `${isActive ? 'bg-gray-700' : ''} p-4 hover:bg-gray-700 transform transition-transform ease-in-out hover:scale-110 duration-200 text-lg w-full rounded-full text-center`}>Profile</NavLink>}
                {!isLoggedIn && <NavLink to="/log-in" className={`p-4 hover:bg-gray-700 transform transition-transform ease-in-out hover:scale-110 duration-200 text-lg w-full rounded-full text-center`}>Profile</NavLink>}
                {isLoggedIn && <NavLink to="/" onClick={() => {logOut()}} className={`p-4 hover:bg-gray-700 transform transition-transform ease-in-out hover:scale-110 duration-200 text-lg w-full rounded-full text-center`}>Log Out</NavLink>}
                <button onClick={openFeedback} className="p-4 hover:bg-gray-700 transform transition-transform ease-in-out hover:scale-110 duration-200 text-lg w-full rounded-full text-center">Have a feedback ?</button>
            </div>
        </div>)
    );
}

export default SidebarMenu;