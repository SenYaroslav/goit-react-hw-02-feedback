const Statistics = ({ good, neutral, bad, countTotalFeedback }) => {
  return (
    <div className="statistics__container">
      <h2 className="statistics__title">Statistics</h2>
      <ul className="statistics__list">
        <li className="statistics__item">Good: {good}</li>
        <li className="statistics__item">Neutral: {neutral}</li>
        <li className="statistics__item">Bad: {bad}</li>
        <li className="statistics__item">Total: {countTotalFeedback()}</li>
        <li className="statistics__item">Positive feedback: </li>
      </ul>
    </div>
  );
};

export default Statistics;
