import React from 'react';
// import {Link} from 'react-router';
import {connect} from 'react-redux';
import Question from './question';
import {addQuestion} from '../actions/questions';

class QuestionList extends React.Component {
  render() {
    return (
      <div className="question-list">
        <ul>
        {
          this.props.questions.map(question => (
            <li>
            <Question {...question}/>
            <a>Delete</a>
            </li>
          ))
        }
        </ul>
        <a onClick={this.props.addQuestion}>Create New Question</a>
      </div>
    );
  }
}

export default connect(state => ({
  questions: state.questions.data
}), {
  addQuestion
})(QuestionList)
