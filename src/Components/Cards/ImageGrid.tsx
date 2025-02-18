import React from 'react';

const ImageGrid = ({ data, columnCount = 10 }: any) => {
    const { items } = data;
    return (
        <div className="image-grid-container">
            <div className="image-grid">
                {items.map((item: any) => (
                    <a key={item.id} href={item.deeplink} target="_blank" rel="noopener noreferrer" className="grid-item">
                        <img src={item.image} alt={item.image_title} className="grid-image"/>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ImageGrid;
