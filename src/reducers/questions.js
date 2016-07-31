import {ADD_QUESTION} from '../constants/actionTypes';
import initialState from './initialState';

export default function questions(state = initialState.questions, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return [
        ...state,
        action.data
      ];

    default:
      return state;
  }
}
