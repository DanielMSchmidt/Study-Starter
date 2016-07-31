import React from 'react';
// import {Link} from 'react-router';
import {connect} from 'react-redux';
import Topic from './topic';

// Get as route param from react-router
const id = 1;

class Quiz extends React.Component {
  render() {
    const {
      quiz: {
        name,
        topics,
      },
    } = this.props;

    return (
      <div className="quiz">
        <h1>{name}</h1>
        {topics.map(topicId => <Topic id={topicId} />)}
      </div>
    );
  }
}

export default connect(state => {
  const quiz = state.quizzes.find(quiz => quiz.id === id);

  return {
    quiz,
  };
}, {})(Quiz);
