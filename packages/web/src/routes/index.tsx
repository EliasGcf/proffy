import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import ClassForm from '../pages/ClassForm';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/landing" isPrivate component={Landing} />
      <Route path="/profile" isPrivate component={Profile} />
      <Route path="/study" isPrivate component={TeacherList} />
      <Route path="/give-classes" isPrivate component={ClassForm} />
    </Switch>
  );
};

export default Routes;
