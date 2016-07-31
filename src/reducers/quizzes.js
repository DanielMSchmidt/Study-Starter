import {ADD_QUESTION} from '../constants/actionTypes';
import initialState from './initialState';

export default function questions(state = initialState.quizzes, action) {
  switch (action.type) {

    default:
      return state;
  }
}
