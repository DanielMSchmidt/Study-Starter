import {ADD_QUESTION} from '../constants/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function quiz(state = initialState.quiz, action) {
  switch (action.type) {
    case ADD_QUESTION:
      var thisTopic = state.topics.find(topic => topic.id === action.topicId);
      var otherTopics = state.topics.filter(topic => topic.id !== action.topicId);

      debugger;
      return {
        ...state,
        topics: [
          ...otherTopics,
          {
            ...thisTopic,
            questions: [
              ...thisTopic.questions,
              action.data
            ]
          }
        ]
      }

    default:
      return state;
  }
}
