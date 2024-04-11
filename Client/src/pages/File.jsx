import React, { useEffect, useState } from "react";
import axios from "axios";

const File = () => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${window.location.origin}/images`);
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    try {
      await axios.post(`${window.location.origin}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchImages();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <>
      <h1>Image Gallery</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={handleNameChange}
        />
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Upload</button>
      </form>
      <div>
        {images.map((image) => (
          <div key={image._id}>
            <h2>{image.name}</h2>
            <img
              src={image.imageUrl}
              alt={image.name}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default File;
