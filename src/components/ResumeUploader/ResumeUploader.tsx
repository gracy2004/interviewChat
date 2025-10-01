import React, { useState, useEffect } from "react";
import { Card, Input, Button, Progress } from "antd";
import { useDispatch } from "react-redux";
import { addCandidate } from "../../features/candidatesSlice";
import { v4 as uuidv4 } from "uuid";

interface Question {
  id: string;
  text: string;
  time: number;
}

const questions: Question[] = [
  { id: uuidv4(), text: "Easy Question 1: What is React?", time: 20 },
  { id: uuidv4(), text: "Easy Question 2: What is JSX?", time: 20 },
  { id: uuidv4(), text: "Medium Question 1: Explain useEffect.", time: 60 },
  { id: uuidv4(), text: "Medium Question 2: What is Redux?", time: 60 },
  { id: uuidv4(), text: "Hard Question 1: Explain React Fiber.", time: 120 },
  { id: uuidv4(), text: "Hard Question 2: How to optimize React performance?", time: 120 },
];

const IntervieweeChat: React.FC = () => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(questions[0].time);
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;
    setTimeLeft(questions[currentIndex].time);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNext();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentIndex, finished]);

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      handleFinish();
    }
  };

  const handleFinish = () => {
    setFinished(true);
    const score = Math.floor(Math.random() * 100);
    const summary = "Candidate completed interview. Score: " + score;
    dispatch(
      addCandidate({
        id: uuidv4(),
        name: "John Doe",
        email: "john@example.com",
        phone: "+911234567890",
        score,
        summary
      })
    );
  };

  if (finished) return <Card title="Interview Finished">Your answers have been submitted!</Card>;

  return (
    <Card title={`Question ${currentIndex + 1} of ${questions.length}`} style={{ marginBottom: "20px" }}>
      <p style={{ fontWeight: 500 }}>{questions[currentIndex].text}</p>
      <Input.TextArea rows={4} value={answers[currentIndex]} onChange={(e) => handleAnswerChange(e.target.value)} />
      <div style={{ marginTop: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Progress percent={Math.round((1 - timeLeft / questions[currentIndex].time) * 100)} 
                  strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} style={{ flex: 1, marginRight: "10px" }} />
        <p style={{ width: "80px", textAlign: "center" }}>{timeLeft}s</p>
        <Button type="primary" onClick={handleNext}>Next</Button>
      </div>
    </Card>
  );
};

export default IntervieweeChat;
