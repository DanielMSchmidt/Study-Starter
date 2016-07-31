import React from 'react';
import {connect} from 'react-redux';
import QuestionList from './questionList';

class Topic extends React.Component {
  render() {
    const {
      id,
      name,
      questions,
    } = this.props;

    return (
      <div className="topic">
        <h2>{name}</h2>
        <a>Set PreRequisite</a>
        <QuestionList topicId={id} questions={questions}/>
      </div>
    );
  }
}

export default connect((state, ownProps) => {
  const topic = state.topics.find(topic => topic.id === ownProps.id);
  const questions = state.questions.filter(question => topic.questions.includes(question.id));

  return {
    topic,
    questions
  };
}, {})(Topic);
