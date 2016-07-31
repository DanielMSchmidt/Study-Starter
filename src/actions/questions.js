import * as types from '../constants/actionTypes';

export function addQuestion(topicId, questionId) {
  return {
    type: types.ADD_QUESTION,
    data: {
      id: questionId,
      answer: 1,
      options: ['{', '[', '*', '-'],
      question: 'What marks an array in javascript?',
    },
    topicId,
  };
}
