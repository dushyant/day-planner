import React, { Component } from "react";
import Week from './Week';
import Day from './Day';
import DaySection from './DaySection';

export default class Calendar extends Component {

  render() {
    return (
      <div className="main-box"> 
        <Week />
        <Day />
        <DaySection />
      </div>
    )
  }
}