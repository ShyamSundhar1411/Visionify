// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  console.log("Hey Form");
  const handleUploadAndPredict = async (event) => {
    event.preventDefault();
    console.log("Hey Pressed")
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post("http://127.0.0.1:8000/predict/cifar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      setPrediction(response.data.predicted_class);
    } catch (error) {
      console.error("Error uploading and predicting:", error);
    }finally{
      setLoading(false);
    }
  };

  return (
    <div>
      <form>
        <input type="file" accept= ".jpeg, .png, .jpg" onChange={handleFileChange} />
        <button onClick={handleUploadAndPredict}>Upload and Predict</button>
      </form>
      {loading && <p>Loading...</p>}
      {prediction !== null && !loading && <p>Predicted Class: {prediction}</p>}
    </div>
  );
};

export default ImageUpload;
