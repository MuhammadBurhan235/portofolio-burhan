import React, { useState } from "react";
import { useUploadImage } from "./useUploadImage";
import { useNavigate } from "react-router-dom";

export const UploadImage: React.FC = () => {
  const { uploadImage } = useUploadImage();
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleToGallery = () => {
    navigate("/portofolio-burhan/imggallery"); // Navigasi kembali ke halaman sebelumnya
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    try {
      const uploadedImageUrl = await uploadImage(file);
      setImageUrl(uploadedImageUrl);
      alert("Image uploaded successfully!");
      navigate("/portofolio-burhan/imggallery"); // Navigate to the gallery page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
        />
        <button type="submit">Upload Image</button>
      </form>
      <button onClick={handleToGallery}>Gallery</button>
    </>
  );
};
