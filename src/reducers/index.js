import { combineReducers } from 'redux';
import questions from './questions';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  questions,
  routing: routerReducer
});

export default rootReducer;
