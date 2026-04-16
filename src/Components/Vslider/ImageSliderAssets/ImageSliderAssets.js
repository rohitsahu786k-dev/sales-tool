import React from 'react'
import { useSelector } from 'react-redux';

function ImageSliderAssets() {
    const activeDesk = useSelector(state => state.desk.activeDeskInfo);

    return (
        <div>
            <div className='imageView'>
                <img src={activeDesk.displayImage} className='product' />
            </div>
        </div>
    )
}

export default ImageSliderAssets