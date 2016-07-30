import React from 'react';
import './question.scss';

class Question extends React.Component {
  static propTypes = {
    answer: React.PropTypes.number,
    options: React.PropTypes.array,
    question: React.PropTypes.string,
  }
  render() {
    const {
      answer,
      options,
      question,
    } = this.props;
    return (
      <div>
      <h2>{question}</h2>
      <ul>{options.map((option, index) => (
          <li className={index === answer ? 'correct' : ''}>{option}</li>
      ))}</ul>
      </div>
    );
  }
}

export default Question;
