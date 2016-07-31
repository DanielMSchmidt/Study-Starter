import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import QuestionList from './components/questionList.js';
import Topic from './components/topic.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="QuestionList" component={QuestionList}/>
    <Route path="Topic" component={Topic}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
