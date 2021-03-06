import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Public from './Public';
import Login from './Login';
import Protected from './Protected';
import PrivateRoute from './routes/PrivateRoute';

const Auth = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/public">Public Page</Link></li>
          <li><Link to="/protected">Protected Page</Link></li>
        </ul>
        <Route path="/" exact component={Public}/>
        <Route path="/public" component={Public}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path='/protected' component={Protected} />
      </div>
    </Router>
  );
}

export default Auth;