import React from 'react';
import {Link} from 'react-router';

const QuestionList = () => {
  return (
    <div>
      <h1>React Slingshot</h1>

      <h2>Get Startesasdasdasdd</h2>
      <ol>
        <li>Review the <Link to="fuel-savings">demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>
    </div>
  );
};

export default QuestionList;
