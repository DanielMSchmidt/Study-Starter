import React from 'react';
import styles from './question.scss';


class Question extends React.Component {
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
