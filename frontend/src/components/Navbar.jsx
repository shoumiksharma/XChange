import { useEffect, useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import SidebarMenu from './SidebarMenu';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchUser } from '../utils/fetchUser';

function Navbar({openFeedback}) {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const user = useSelector((state) => state.user);

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