const Statistics = ({ good, neutral, bad, total, positivePercentage = 0 }) => {
  return (
    <div className="statistics__container">
      <ul className="statistics__list">
        <li className="statistics__item">Good: {good}</li>
        <li className="statistics__item">Neutral: {neutral}</li>
        <li className="statistics__item">Bad: {bad}</li>
        <li className="statistics__item">Total: {total()}</li>
        <li className="statistics__item">Positive feedback: {positivePercentage()}%</li>
      </ul>
    </div>
  );
};

export default Statistics;
