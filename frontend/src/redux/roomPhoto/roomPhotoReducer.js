const initialState = { roomPhoto: false };

const photoReducer = (state = initialState, action) => {
  if (action.type === 'uploaded') {
    return { roomPhoto: true };
  }

  if (action.type === 'notUploaded') {
    return { roomPhoto: false };
  }

  return state;
};

export default photoReducer;
