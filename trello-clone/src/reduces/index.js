import { combineReducers } from 'redux';
import listReducer from './listreducer';

export default combineReducers({
    lists: listReducer
}); 