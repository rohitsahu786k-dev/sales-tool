import React from 'react'
import './CreateProduct.css'

function CreateProduct({ image }) {
    return (
       <>
       <div className='videoView'></div>
            <img src={image} className='product'>
            </img>
       </>
    )
}
export default CreateProduct
