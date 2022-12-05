const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="feedback__container">
      <h2 className="feedback__title">Please leave feedback</h2>
      {options.map(option => (
        <button
          className="feedback__btn"
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
