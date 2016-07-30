import * as types from '../constants/actionTypes';

export function addQuestion() {
  return {type: types.ADD_QUESTION, data: {
    answer: 1,
    options: ['{', '[', '*', '-'],
    question: 'What marks an array in javascript?',
  }};
}
