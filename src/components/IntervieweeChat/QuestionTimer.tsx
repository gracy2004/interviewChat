import React, { useState, useEffect } from "react";

const QuestionTimer: React.FC = () => {
  const [time, setTime] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>Time Left: {time}s</div>;
};

export default QuestionTimer;
