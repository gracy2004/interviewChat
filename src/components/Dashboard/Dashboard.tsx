import React, { useState } from "react";
import { Table, Modal, Button } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import CandidateDetail from "../CandidateDetail/CandidateDetail";

const Dashboard: React.FC = () => {
  const candidates = useSelector((state: RootState) => state.candidates.list);
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (candidate: any) => {
    setSelectedCandidate(candidate);
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
    setSelectedCandidate(null);
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { 
      title: "Score", 
      dataIndex: "score", 
      key: "score",
      render: (score: number) => <span style={{ color: score > 80 ? "green" : "orange", fontWeight: "bold" }}>{score}</span>
    },
    { title: "Summary", dataIndex: "summary", key: "summary" },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Button type="link" onClick={() => showModal(record)}>View Details</Button>
      ),
    },
  ];

  return (
    <div>
      <h2>Interviewer Dashboard</h2>
      <Table
        dataSource={candidates}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        bordered
        style={{ background: "#fff", borderRadius: "10px", overflow: "hidden" }}
      />

      <Modal
        title="Candidate Details"
        visible={isModalVisible}
        onCancel={handleClose}
        footer={null}
        width={600}
      >
        {selectedCandidate && <CandidateDetail candidate={selectedCandidate} />}
      </Modal>
    </div>
  );
};

export default Dashboard;
