import React, { useState } from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Notification from "./notification/Notification";

import Section from "./section/Section";
import Statistics from "./statistics/Statistics";
import "./App.css";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [state, setState] = useState(initialState);

  const addFeedback = (e) => {
    const { name } = e.target;

    setState((prev) => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const countTotalFeedback = () => {
    const { bad, good, neutral } = state;
    const total = bad + good + neutral;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;

    const positivePercentage = good ? (good * 100) / countTotalFeedback() : 0;

    return Number(positivePercentage).toFixed();
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = Object.keys(state);

  return (
    <div className="section">
      <Section title="Please leave feedback">
        <FeedbackOptions addFeedback={addFeedback} options={options} />
      </Section>
      <Section title="Statistics">
        {totalFeedback !== 0 ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};

export default App;
