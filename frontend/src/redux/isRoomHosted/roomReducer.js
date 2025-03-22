const initialState = { isRoomHosted: false };

const authReducer = (state = initialState, action) => {
  if (action.type === 'hosted') {
    return { isRoomHosted: true };
  }

  if (action.type === 'notHosted') {
    return { isRoomHosted: false };
  }

  return state;
};

export default authReducer;
