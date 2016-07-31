import * as types from '../constants/actionTypes';

export function addQuestion(topicId) {
  return {
    data: {
      answer: 1,
      options: ['{', '[', '*', '-'],
      question: 'What marks an array in javascript?',
    },
    topicId,
    type: types.ADD_QUESTION,
  };
}
