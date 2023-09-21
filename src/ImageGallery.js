import React, { useState, useEffect } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images, isAuthenticated }) => {
  const [draggedImageIndex, setDraggedImageIndex] = useState(null);
  const [galleryImages, setGalleryImages] = useState(images);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter images based on the search term
  const filteredImages = galleryImages.filter((image) =>
    image.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  useEffect(() => {
    // Update galleryImages when images prop changes (e.g., due to a search)
    setGalleryImages(images);
  }, [images]);

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

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="image-gallery">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search images..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      {filteredImages.map((image, index) => (
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
