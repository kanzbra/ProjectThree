import React, { Component } from 'react';
import './ClockDown.css';


class Clock extends Component {
    constructer(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
            
        }
    }

    render() {  

        return (
        <div className="Clockdown">
            <div className = "App-title" > Countdown to Next Month's Rent </div>
            <div>
            <div className = "Clock-days">{this.state.days} days </div>
            <div className = "Clock-hours">{this.state.hours} hours </div>
            <div className = "Clock-minutes">{this.state.minutes} minutes</div>
            <div className = "Clock-seconds">{this.state.seconds} seconds </div>
            </div>
            <div>
                <input placeholder='new data' />
                <button> Submit </button>
                </div>
        </div>
        )
    } 
  }

  export default Clock;
