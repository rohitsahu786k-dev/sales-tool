import React from 'react'

function Image({ srcImage }) {
    return (
        <>
            {
                srcImage && <div>
                    <div className='imageView'>
                        <img src={srcImage} className='colorImage' />
                    </div>
                </ div>
            }
        </>
    )
}

export default Image