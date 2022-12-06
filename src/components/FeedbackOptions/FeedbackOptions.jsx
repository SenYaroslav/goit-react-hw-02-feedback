const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="feedback__container">
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
