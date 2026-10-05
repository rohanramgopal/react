import React, { useRef, useState } from "react";

export default function ImageUpload() {
  const fileInput = useRef(null);
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const imageUrl = URL.createObjectURL(selectedImage);
      setImage(imageUrl);
    }
  };

  const handleUpload = () => {
    fileInput.current.click();
  };

  const handleChange = () => {
    fileInput.current.click();
  };

  return (
    <div className="image-section">

      <div className="section-heading">
        <h2>Image Upload</h2>
       
      </div>

      <div className="image-upload-card">

        <input
          ref={fileInput}
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="file-input"
        />

        {!image ? (
          <div className="upload-area">

            <div className="upload-icon">
              📷
            </div>

            <h3>Upload your image</h3>

            <p>
              Select an image from your computer
            </p>

            <button
              type="button"
              className="upload-button"
              onClick={handleUpload}
            >
              Choose Image
            </button>

          </div>
        ) : (
          <div className="preview-area">

            <img
              src={image}
              alt="Selected"
              className="image-preview"
            />

            <h3>Image selected successfully</h3>

            <button
              type="button"
              className="change-button"
              onClick={handleChange}
            >
              Change Image
            </button>

          </div>
        )}

      </div>

    </div>
  );
}