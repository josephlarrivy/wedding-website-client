import React, { useState } from 'react';
import '../styles/ImageCollage.css';



const ImageCollage = ({ image1, image2, image3, image4, image5, image6, image7, image8, image9 }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openImage = (index) => {
        setSelectedImage(images[index]);
        setCurrentIndex(index);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % images.length;
        openImage(newIndex);
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        openImage(newIndex);
    };

    const images = [image1, image2, image3, image4, image5, image8, image7, image6, image9];

    return (
        <div id='image-collage-inner-container'>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`barn ${index + 1}`} onClick={() => openImage(index)} />
            ))}

            {selectedImage && (
                <div id='image-viewer-overlay'>
                    <span className='close-button' onClick={closeImage}>
                        <p style={{'color': 'white'}}>Close</p>
                    </span>
                    <span className='nav-button prev' onClick={prevImage}>
                        prev
                    </span>
                    <img src={selectedImage} alt='enlarged' className='enlarged-image' />
                    <span className='nav-button next' onClick={nextImage}>
                        next
                    </span>
                </div>
            )}
        </div>
    );
};

export default ImageCollage;
