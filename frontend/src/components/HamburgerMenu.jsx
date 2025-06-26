function HamburgerMenu({ toggleMenu, isMenuOpen }) {
    return (
        <button onClick={toggleMenu}>
            <div className={`flex flex-col gap-[6px] 2xl:gap-[3.5px] ${isMenuOpen ? 'translate-x-[30vw] z-7 relative' : ''} transition-transform duration-1000 ease-in-out`}>
                <div className={`h-[2px] 2xl:h-[5px] w-[20px] 2xl:w-[30px] bg-white rounded-full ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''} transition-transform duration-300 ease-in-out`}></div>
                <div className={`h-[2px] 2xl:h-[5px] w-[20px] 2xl:w-[30px] bg-white rounded-full ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`h-[2px] 2xl:h-[5px] w-[20px] 2xl:w-[30px] bg-white rounded-full ${isMenuOpen ? '-rotate-45 translate-y-[-8px]' : ''} transition-transform duration-300 ease-in-out`}></div>
            </div>
        </button>
    );
}

export default HamburgerMenu;