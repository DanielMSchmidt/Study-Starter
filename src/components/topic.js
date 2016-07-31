import React from 'react';
// import {Link} from 'react-router';
import {connect} from 'react-redux';
import QuestionList from './questionList';

class Topic extends React.Component {
  render() {
    return (
      <div class="topic">
        <h1> Algebra </h1>
        <a>Set PreRequisite</a>
        <QuestionList/>
        <p>This is wrong. Should be generated. Topics with their own Question Lists of Questions</p>
      </div>
    );
  }
}

export default Topic;
