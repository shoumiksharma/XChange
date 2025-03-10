// src/components/authFunctions.js

export const handleLogin = (setIsLoggedIn, setUser) => {
    setIsLoggedIn(true);
    setUser({
        name: 'User',
        profilePicture: 'teen.png',
    });
};

export const handleLogout = (setIsLoggedIn, setUser) => {
    setIsLoggedIn(false);
    setUser(null);
};
