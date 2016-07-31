import {ADD_QUESTION} from '../constants/actionTypes';
import initialState from './initialState';

export default function questions(state = initialState.topics, action) {
  let unchangedTopics;
  let changedTopic;

  switch (action.type) {

    case ADD_QUESTION:
      unchangedTopics = state.filter(topic => action.topicId !== topic.id);
      changedTopic = state.find(topic => action.topicId === topic.id);

      return [
        ...unchangedTopics,
        {
          ...changedTopic,
          questions: [...changedTopic.questions, action.data.id],
        }
      ];

    default:
      return state;
  }
}
