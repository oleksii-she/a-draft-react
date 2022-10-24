import React, { Component } from 'react';
import { Statistics } from './Statistics';
export class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    let total = 0;
    total += neutral;
    total += bad;
    total += good;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback()); //вычисление процентов
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
      ></Statistics>
      // <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions>
    );

    // return (
    //   <div>
    //     <div>
    //       <h2>Pleace leave feedback</h2>
    //       <button
    //         type="button"
    //         onClick={() => {
    //           this.setState(prevState => {
    //             return {
    //               good: prevState.good + 1,
    //             };
    //           });
    //         }}
    //       >
    //         Good
    //       </button>
    //       <button
    //         type="button"
    //         onClick={() => {
    //           this.setState(prevState => {
    //             return {
    //               neutral: prevState.neutral + 1,
    //             };
    //           });
    //         }}
    //       >
    //         Neutral
    //       </button>
    //       <button
    //         onClick={() => {
    //           this.setState(prevState => {
    //             return {
    //               bad: prevState.bad + 1,
    //             };
    //           });
    //         }}
    //       >
    //         Bad
    //       </button>
    //     </div>
    //     {this.countTotalFeedback() ? (
    //       <div>
    //         <h2>Statistics</h2>
    //         <p>Good: {good}</p>
    //         <p>Neutral: {neutral}</p>
    //         <p>Bad: {bad}</p>
    //         <p>total:{this.countTotalFeedback()} </p>
    //         <p>Posittive feedback: {this.countPositiveFeedbackPercentage()}%</p>
    //       </div>
    //     ) : (
    //       <div>
    //         <p>There is no feedback</p>
    //       </div>
    //     )}
    //   </div>
    // );
  }
}
