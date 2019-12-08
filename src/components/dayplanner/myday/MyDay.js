import React, { Component } from "react";
import Calendar from "./components/Calendar";
import './MyDay.scss';

export default class MyDay extends Component {

  render() {

    return (
      <div className="my-day">
        <Calendar />
      </div>
    );

  }

}
