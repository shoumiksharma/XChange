const initialState = { isLoggedIn: false };

const roomReducer = (state = initialState, action) => {
  if (action.type === 'logIn') {
    return { isLoggedIn: true };
  }

  if (action.type === 'logOut') {
    return { isLoggedIn: false };
  }

  return state;
};

export default roomReducer;
