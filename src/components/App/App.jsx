import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification.jsx";
import { useEffect, useState } from "react";

const getValues = () => {
  const savedValues = localStorage.getItem("feedbacks");
  return savedValues !== null
    ? JSON.parse(savedValues)
    : { good: 0, neutral: 0, bad: 0 };
};

function App() {
  const [values, setValues] = useState(getValues);
  const onUpdateFeedback = (feedbackType) => {
    setValues({ ...values, [feedbackType]: values[feedbackType] + 1 });
  };

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(values));
  }, [values]);

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);
  const checkPositiveFeedback = !isNaN(positiveFeedback) ? positiveFeedback : 0;

  const onResetTotal = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <Description />
      <Options
        total={totalFeedback}
        onLeaveFeedback={onUpdateFeedback}
        onResetTotal={onResetTotal}
      />
      {totalFeedback > 0 ? (
        <Feedback
          total={totalFeedback}
          positiveFeedback={checkPositiveFeedback}
          dictOfValues={values}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
