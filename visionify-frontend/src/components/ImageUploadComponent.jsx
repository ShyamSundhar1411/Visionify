// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUploadAndPredict = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      // Upload the image to FastAPI for prediction
      const response = await axios.post("http://127.0.0.1:8000/predict/cifar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      // Handle the prediction response
      setPrediction(response.data.predicted_class);
    } catch (error) {
      console.error("Error uploading and predicting:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUploadAndPredict}>Upload and Predict</button>
      {prediction !== null && <p>Predicted Class: {prediction}</p>}
    </div>
  );
};

export default ImageUpload;
