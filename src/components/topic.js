import React from 'react';
// import {Link} from 'react-router';
// import {connect} from 'react-redux';
import QuestionList from './questionList';

class Topic extends React.Component {
  render() {
    return (
      <div className="topic">
        <h2> Algebra </h2>
        <a>Set PreRequisite</a>
        <QuestionList/>
      </div>
    );
  }
}

export default Topic;
