import React from 'react';
// import {Link} from 'react-router';
import Topic from './topic';
import {connect} from 'react-redux';
import {addQuestion} from '../actions/questions';

class Quiz extends React.Component {
  render() {
    const {
      name,
      topics,
    } = this.props.quiz;

    return (
      <div className="quiz">
        <h1>{name}</h1>
        {topics.map(topic => (
          <Topic {...topic} topicId={topic.id} addQuestion={this.props.addQuestion} />
        ))}
      </div>
    );
  }
}

export default connect(state => ({
  quiz: state.quiz
}), {
  addQuestion
})(Quiz)
