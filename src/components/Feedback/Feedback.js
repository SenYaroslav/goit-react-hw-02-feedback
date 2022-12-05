import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  onGoodBtnClick = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  onNeutralBtnClick = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  onBadBtnClick = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  // countTotalFeedback = () => {
  //   this.setState({
  //     total: this.state.good + this.state.neutral + this.state.bad,
  //   });
  // };

  // (() => {
  //   this.setState({
  //     total: this.state.good + this.state.neutral + this.state.bad,
  //   });
  // })();

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <>
        <div className="feedback__container">
          <h2 className="feedback__title">Please leave feedback</h2>
          <button
            className="feedback__btn"
            type="button"
            onClick={this.onGoodBtnClick}
          >
            Good
          </button>
          <button
            className="feedback__btn"
            type="button"
            onClick={this.onNeutralBtnClick}
          >
            Neutral
          </button>
          <button
            className="feedback__btn"
            type="button"
            onClick={this.onBadBtnClick}
          >
            Bad
          </button>
        </div>
        <div className="statistics__container">
          <h2 className="statistics__title">Statistics</h2>
          <ul className="statistics__list">
            <li className="statistics__item">Good: {good}</li>
            <li className="statistics__item">Neutral: {neutral}</li>
            <li className="statistics__item">Bad: {bad}</li>
            <li className="statistics__item">Total: {total}</li>
            <li className="statistics__item">
              Positive feedback: {positivePercentage}
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Feedback;
