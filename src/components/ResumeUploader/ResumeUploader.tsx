import React, { useState } from "react";
import { Card, Input, Button, Progress, message } from "antd";
import { useDispatch } from "react-redux";
import { startInterview } from "../../features/candidatesSlice";

const ResumeUploader: React.FC = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setProgress(0);
    }
  };

  const handleUpload = () => {
    if (!file) {
      message.error("Please select a file first!");
      return;
    }

    setUploading(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          setUploaded(true);
          message.success(`${file.name} uploaded successfully!`);
          dispatch(startInterview()); // start interview
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  if (uploaded)
    return (
      <Card title="Resume Uploaded">
        File <b>{file?.name}</b> uploaded successfully!
      </Card>
    );

  return (
    <Card title="Upload Your Resume" style={{ marginBottom: "20px" }}>
      <Input type="file" onChange={handleFileChange} disabled={uploading} />
      {file && <p style={{ marginTop: "10px" }}>Selected File: {file.name}</p>}
      <Progress percent={progress} style={{ marginTop: "10px" }} />
      <Button
        type="primary"
        style={{ marginTop: "10px" }}
        onClick={handleUpload}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </Button>
    </Card>
  );
};

export default ResumeUploader;
