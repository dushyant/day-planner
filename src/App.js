import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyDay from "./components/dayplanner/myday/MyDay";
import './App.scss';

// Components
import Header from './components/layout/header';
import Exercises from './components/dayplanner/exercises/exercises';
import MyTasks from './components/dayplanner/mytasks/MyTasks';
import Meals from './components/dayplanner/meals/meals';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import TaskForm from './components/dayplanner/mytasks/TaskForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container mt-4">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/myday" component={MyDay} />
            <Route path="/exercises" component={Exercises} />
            <Route path="/tasks" exact component={MyTasks} />
            <Route path="/tasks/new" component={TaskForm} />
            <Route path="/meals" component={Meals} />
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Register} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
