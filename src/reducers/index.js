import { combineReducers } from 'redux';
import quiz from './quiz';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  quiz,
  routing: routerReducer
});

export default rootReducer;
