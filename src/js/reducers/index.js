import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
    cityInfo: weatherReducer
});

export default rootReducer;
