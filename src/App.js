import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyDay from "./components/dayplanner/myday/MyDay";
import './App.scss';

// Components
import Header from './components/layout/header';
import Exercises from './components/dayplanner/exercises/exercises';
import MyTasks from './components/dayplanner/mytasks/mytasks';
import Meals from './components/dayplanner/meals/meals';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <Router>
      <div className="App ">
        <Header />
        <main className="container mt-4">
          <Switch>
            <Route path="/myday" component={MyDay} />
            <Route path="/exercises" component={Exercises} />
            <Route path="/tasks" component={MyTasks} />
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
