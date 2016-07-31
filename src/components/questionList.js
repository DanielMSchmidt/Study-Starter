import React from 'react';
// import {Link} from 'react-router';
import {connect} from 'react-redux';
import Question from './question';
import {addQuestion} from '../actions/questions';

class QuestionList extends React.Component {
  render() {
    const {
      topicId,
      questions,
    } = this.props;

    // TODO: get a guaranteed uniqe Id from somewhere
    var questionId = Math.round(Math.random() * 1000);

    return (
      <div className="question-list">
        <ul>
        {
          questions.map(question => (
            <li>
            <Question {...question}/>
            <a>Delete</a>
            </li>
          ))
        }
        </ul>
        <a onClick={() => this.props.addQuestion(topicId, questionId)}>Create New Question</a>
      </div>
    );
  }
}

export default connect(state => ({
}), {
  addQuestion
})(QuestionList)
