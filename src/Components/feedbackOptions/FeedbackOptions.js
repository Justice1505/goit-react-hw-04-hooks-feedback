import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ addFeedback, options }) => {
  return (
    <>
      {options.map((option) => (
        <button
          className={s.btn}
          type="button"
          name={option}
          onClick={addFeedback}
          key={option}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  addFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
