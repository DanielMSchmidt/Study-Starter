import React from 'react';
import Question from './question';

export default class QuestionList extends React.Component {
  render() {
    const {
      questions,
      topicId,
    } = this.props;

    return (
      <div className="question-list">
        <ul>
          {questions.map(question => (
            <li>
            <Question {...question}/>
            <a>Delete</a>
            </li>
          ))}
        </ul>
        <a onClick={() => this.props.addQuestion(topicId)}>Create New Question</a>
      </div>
    );
  }
}


