import React, { useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';



const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUploadAndPredict = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post("http://127.0.0.1:8000/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      setPrediction(response.data.predicted_class);
    } catch (error) {
      console.error("Error uploading and predicting:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "16px" }}>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          component="span"
          startIcon={<CloudUploadIcon />}
        >
          Upload File
        </Button>
      </label>

      {loading && <LinearProgress style={{ width: "100%", marginTop: "16px" }} />}
      {prediction !== null && !loading && <Typography variant="body1">Predicted Class: {prediction}</Typography>}
    </div>
  );
};

export default ImageUpload;
