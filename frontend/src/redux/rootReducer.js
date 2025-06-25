import { combineReducers } from 'redux';
import roomReducer from './isRoomHosted/roomReducer';
import authReducer from './isAuthenticated/authReducer';
import roomPhoto from './roomPhoto/roomPhotoReducer';
import socketReducer from './socketReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    room: roomReducer,
    auth: authReducer,
    photo: roomPhoto,
    socket: socketReducer,
    user: userReducer
});

export default rootReducer;
