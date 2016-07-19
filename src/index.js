import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Hello} from './app/hello';
import './index.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <Hello />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Hello}/>
  </Router>,
  document.getElementById('root')
);
