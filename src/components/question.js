import React from 'react';
import './question.scss';

export default class Question extends React.Component {
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
      <div className="question">
        <p>{question}</p>
        <ul>{options.map((option, index) => (
            <li key={index} className={index === answer ? 'correct' : ''}>{option}</li>
        ))}</ul>
      </div>
    );
  }
}
