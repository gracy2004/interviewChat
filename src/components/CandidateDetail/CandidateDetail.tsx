import React from "react";

const CandidateDetail: React.FC<{ candidate: any }> = ({ candidate }) => {
  return (
    <div>
      <p><strong>Name:</strong> {candidate.name}</p>
      <p><strong>Email:</strong> {candidate.email}</p>
      <p><strong>Phone:</strong> {candidate.phone}</p>
      <p><strong>Score:</strong> {candidate.score}</p>
      <p><strong>Summary:</strong> {candidate.summary}</p>
    </div>
  );
};

export default CandidateDetail;
