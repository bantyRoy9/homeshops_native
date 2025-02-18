import React from 'react';
import { BannerProps } from '../type';
const Banner: React.FC<BannerProps> = ({ data }) => {
    const { data: bannerData, layout_config } = data;
    const bannerStyle: React.CSSProperties = {
        maxWidth: layout_config.max_width,
        marginRight: layout_config.margin_right,
        marginTop: layout_config.margin_top,
        marginLeft: layout_config.margin_left,
        marginBottom: layout_config.margin_bottom,
        borderRadius: layout_config.border_radius > 0 ? layout_config.border_radius : undefined,
        aspectRatio: layout_config.aspect_ratio.toString(),
        display: 'block',
        cursor: 'pointer',
    };
    return (
        <div className='items-container'>
            <div className="">
                <img src={bannerData.image} alt="paan corner banner" style={bannerStyle} loading="eager" className="object-fill" />
            </div>
        </div>
    );
};

export default Banner;
