import React, { useState } from "react";
import ResumeUploader from "./components/ResumeUploader/ResumeUploader";
import IntervieweeChat from "./components/IntervieweeChat/IntervieweeChat";
import Dashboard from "./components/Dashboard/Dashboard";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const App: React.FC = () => {
  const [tab, setTab] = useState("1");
  const interviewStarted = useSelector((state: RootState) => state.candidates.interviewStarted);
  const interviewFinished = useSelector((state: RootState) => state.candidates.interviewFinished);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1>Swipe AI Interview Assistant</h1>
      <Tabs activeKey={tab} onChange={(key) => setTab(key)}>
        <Tabs.TabPane tab="Interviewee" key="1">
          {!interviewStarted && !interviewFinished && <ResumeUploader />}
          <IntervieweeChat />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Interviewer" key="2">
          <Dashboard />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default App;
