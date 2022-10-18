import React from "react";
import "./ImageGallery.css";

const ImageGallery = ({ fetchData }) => {
  return (
    <div>
      <div className="images-wrapper">
        {fetchData.map((data) => (
          <div className="image">
            <img src={data.largeImageURL} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
