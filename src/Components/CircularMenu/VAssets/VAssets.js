import React from 'react'
import { useSelector } from 'react-redux';

function VAssets() {

    const activeDesk = useSelector(state => state.desk.activeDeskInfo);

    return (
        <>
            <div>
                <div className='videoView'></div>
                <video src={activeDesk.video} type="video/mp4" className='product' autoPlay="autoplay">
                </video>
            </div>
        </>
    )
}

export default VAssets
