import { combineReducers } from 'redux';
import roomReducer from './isRoomHosted/roomReducer';
import authReducer from './isAuthenticated/authReducer';
import roomPhoto from './roomPhoto/roomPhotoReducer';

const rootReducer = combineReducers({
    room: roomReducer,
    auth: authReducer,
    photo: roomPhoto
});

export default rootReducer;
