import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images, isAuthenticated }) => {
  const [draggedImageIndex, setDraggedImageIndex] = useState(null);
  const [galleryImages, setGalleryImages] = useState(images);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
    setDraggedImageIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, toIndex) => {
    e.preventDefault();

    if (draggedImageIndex === toIndex) {
      return;
    }

    if (isAuthenticated) {
      const updatedImages = [...galleryImages];
      const draggedImage = updatedImages[draggedImageIndex];
      updatedImages.splice(draggedImageIndex, 1);
      updatedImages.splice(toIndex, 0, draggedImage);

      setDraggedImageIndex(null);
      setGalleryImages(updatedImages);
    }
  };

  return (
    <div className="image-gallery">
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className={`image-card ${draggedImageIndex === index ? 'dragging' : ''}`}
          draggable={isAuthenticated ? 'true' : 'false'}
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, index)}
        >
          <img src={image.url} alt={`Image ${index}`} />
          <div className="tags">
            {image.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
      {!isAuthenticated && (
        <div className="error-message">
          Please login to drag the images
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
