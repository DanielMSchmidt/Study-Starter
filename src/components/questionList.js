import React from 'react';
// import {Link} from 'react-router';
import {connect} from 'react-redux';
import Question from './question';
import {addQuestion} from '../actions/questions';

class QuestionList extends React.Component {
  render() {
    return (
      <div>
        <h1>All Questions</h1>
        <ul>
          {
            this.props.questions.map(question => (
              <li>
                <Question {...question}/>
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
