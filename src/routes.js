import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import Quiz from './components/quiz.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="Quiz" component={Quiz}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
