import { createStore } from 'redux';
import reducer from './isAuthenticated/reducer';

// Create Redux store with the reducer
const store = createStore(reducer);

export default store;
