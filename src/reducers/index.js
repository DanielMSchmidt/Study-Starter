import { combineReducers } from 'redux';
import questions from './questions';
import quizzes from './quizzes';
import topics from './topics';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  questions,
  quizzes,
  topics,
  routing: routerReducer
});

export default rootReducer;
