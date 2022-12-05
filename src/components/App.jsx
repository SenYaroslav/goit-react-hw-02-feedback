import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  // countPositiveFeedbackPercentage = () => {};

  onLeaveFeedback = e => {
    const targetState = e.currentTarget.name;
    this.setState(prevState => ({
      [targetState]: prevState[targetState] + 1,
    }));
  };

  render() {
    this.countTotalFeedback()
    const { good, neutral, bad } = this.state;
    return (
      <>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics good={good} neutral={neutral} bad={bad} countTotalFeedback={this.countTotalFeedback} />
      </>
    );
  }
}

export default App;
