import React from 'react';
const HorizontalImageSlider: React.FC<any> = ({ data }) => {
  const { objects } = data;
  const imageStyle = (width: number, height: number): React.CSSProperties => ({ width, height, objectFit: 'contain', borderRadius: 8, cursor: 'pointer', margin: '0 10px' });
  return (
    <div className='items-container'>
      <div className='w-full flex gap-1'>
        {objects.map((item:any, index:number) => <img key={index} src={item.data.image_url} alt={item.meta.name} style={imageStyle(336, 195)}/>)}
      </div>
    </div>
  );
};

export default HorizontalImageSlider;
