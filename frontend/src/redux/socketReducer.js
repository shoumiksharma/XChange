const initialState = { socket: null };


export const setSocket = (socket) => (
    {
        type: "set_socket",
        payload: socket,
    }
)

const socketReducer = (state = initialState, action) => {
    if (action.type == "set_socket") {
        return { ...state, socket: action.payload };
    }
    return state;
}

export default socketReducer;