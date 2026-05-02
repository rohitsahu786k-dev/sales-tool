import React from 'react'
import { useSelector } from 'react-redux';

function ImageSliderAssets({ onConsoleClick }) {
    const activeDesk = useSelector(state => state.desk.activeDeskInfo);

    return (
        <div onClick={onConsoleClick} style={{ cursor: 'pointer', width: '100%', height: '100%' }} title="Click to explore">
            <div className='imageView'>
                <img src={activeDesk.displayImage} alt={activeDesk.title} className='product' />
            </div>
        </div>
    )
}

export default ImageSliderAssets
