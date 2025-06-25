const initialState = {
    name : "",
    userId : "",
    profilePhoto : "",
    gender : "",
    hostel : "",
    type : "",
    room : "",
    room_hosted : "",
    photo : ""
}

export const setUser = (user) => (
    {
        type: "set_user",
        payload: user
    }
)

const userReducer = (state = initialState, action) => {
    if(action.type == "set_user"){
        console.log(action.payload,"received");
        return { ...state, ...action.payload}
    }
    return state;
}

export default userReducer;