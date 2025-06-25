import { useEffect, useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import SidebarMenu from './SidebarMenu';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchUser } from '../utils/fetchUser';

function Navbar({openFeedback}) {
    const navigate = useNavigate();
    // const [user, setUser] = useState({});
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const user = useSelector((state) => state.user);
    // useEffect(() => {
    //     const fetchUserData = async () => {

    //         const data = await fetchUser();
    //         const userData = data.user;
    
    //         if (userData) {
    //             // console.log(userData);
    //             setUser(userData)
    //         }

    //     }
        
    //     if(isLoggedIn){
    //         fetchUserData();
    //     }
    // }, [isLoggedIn] );


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleLogin = () => {
        navigate('/log-in');
    };

    const handleSignIn = () => {
        navigate('/sign-in');
    };
    

    return (
        <>
            <div className="flex justify-center text-[22px] 2xl:text-[2vw] text-white mb-[7px]">
                <div className="bg-black h-[70px] 2xl:h-[80px] w-[95vw] mt-[5vh] rounded-full flex justify-between items-center px-[2vw]">
                    <div className="flex gap-[7px] ml-[7px]">
                        <HamburgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
                        <div className="text-white">logo</div>
                    </div>
                    <div className="text-white">
                        <div>
                            {!isLoggedIn ? (
                                <div className="flex gap-[1vw]">
                                    <button
                                        onClick={() => handleLogin()}
                                        className="bg-blue-500 hover:bg-sky-700 text-white px-[1vw] py-[0.5vh] rounded-full mr-2">
                                        Log In
                                    </button>
                                    <button className="bg-green-500 hover:bg-green-700 text-white px-[1vw] py-[0.5vh] rounded-full" onClick={() => handleSignIn()}>
                                        Sign Up
                                    </button>
                                </div>
                            ) : (
                                <div className="flex gap-[2vw]">
                                    <div className="items-center flex">Hello, {user.name || 'User'}</div>
                                    <button className="flex" onClick={() => navigate('/profile')}>
                                        <img
                                            src={user.gender === 'm' ? 'teen.png' : 'teen (1).png'}
                                            alt="profile"
                                            className="h-[70px] 2xl:h-[80px] rounded-full"
                                        />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <SidebarMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} openFeedback={openFeedback}/>

            {/* Background overlay to close the menu when clicked */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50"
                    onClick={closeMenu}
                ></div>
            )}
        </>
    );
}

export default Navbar;




    // import { useState } from "react";
    // import HamburgerMenu from "./HamburgerMenu";
    
    // function        Navbar(){
    
    //     const [isLoggedIn, setIsLoggedIn] = useState(false);
    //     const [user, setUser] = useState(null);
    
    //     const handleLogin = () => {
    //         setIsLoggedIn(true);
    //         setUser({
    //           name: 'John Doe',
    //           profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg', 
    //         });
    //     };
    
    //     const handleLogout = () => {
    //         // Simulate logout logic
    //         setIsLoggedIn(false);
    //         setUser(null);
    //     };
    
    //     return (
    //         <>
    //             <div className='flex justify-center text-[22px] 2xl:text-[2vw] text-white mb-[7px] 2xl:mb-[14vh]'>
    //                 <div className='bg-black h-[70px] 2xl:h-[11vh] w-[95vw] mt-[5vh] rounded-full flex justify-between items-center px-[2vw]'>
    //                     <div className="flex  gap-[7px] ml-[7px]">    
    //                         <HamburgerMenu />
    //                         <div className="text-white">logo</div>
    //                     </div>
    //                     <div className="text-white">
    
    //                         <div>
    //                             {!isLoggedIn ? (
    //                             <div className="flex gap-[1vw]">
    //                                 <button onClick={handleLogin} className="bg-blue-500 hover:bg-sky-700 text-white px-[1vw] py-[0.5vh] rounded-full mr-2">Login</button>
    //                                 <button className="bg-green-500 hover:bg-green-700 text-white px-[1vw] py-[0.5vh] rounded-full">Sign Up</button>         
    //                             </div>)
                                
    //                             : 
                                
    //                             <div className="flex gap-[2vw]">
    //                                 <div className="items-center flex">Hello, user</div>
    //                                 <button className="flex" onClick={handleLogout}>
    //                                     <img src="teen.png" alt="profile" className="h-[10vh] rounded-full" />
    //                                 </button>
    //                             </div> 
                                
    //                             }
                                
    //                         </div>
    
    //                         {/* <img src="10775561.png" alt="" /> */}
    //                     </div>
    //                 </div>
    //             </div>
    //         </>
    //     )
    // }
    
    // export default Navbar;