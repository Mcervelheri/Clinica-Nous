import React from 'react';

const RandomBackgroundImages = ({ images, limit = 3 }) => {
    const generateRandomPosition = () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        transform: 'translate(-50%, -50%)',
    });

    // Limita a quantidade de imagens
    const limitedImages = images.slice(0, limit);

    return (
        <>
            {limitedImages.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Background element ${index}`}
                    className="absolute w-64 h-64 object-cover opacity-15"
                    style={generateRandomPosition()}
                />
            ))}
        </>
    );
};

export default RandomBackgroundImages;
