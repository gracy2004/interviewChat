import React, { useState } from "react";
import ResumeUploader from "./components/ResumeUploader/ResumeUploader";
import IntervieweeChat from "./components/IntervieweeChat/IntervieweeChat";
import Dashboard from "./components/Dashboard/Dashboard";
import { Tabs } from "antd";

const App: React.FC = () => {
  const [tab, setTab] = useState("1");

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1>Swipe AI Interview Assistant</h1>
      <Tabs activeKey={tab} onChange={(key) => setTab(key)}>
        <Tabs.TabPane tab="Interviewee" key="1">
          <ResumeUploader />
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
