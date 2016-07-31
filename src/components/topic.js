import React from 'react';
import QuestionList from './questionList';

class Topic extends React.Component {
  render() {
    const {
      addQuestion,
      name,
      questions,
      topicId,
    } = this.props;

    return (
      <div className="topic">
        <h2>{name}</h2>
        <QuestionList addQuestion={addQuestion} topicId={topicId} questions={questions} />
      </div>
    );
  }
}

export default Topic;
