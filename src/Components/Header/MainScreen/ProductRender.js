import React from 'react'
import CreateProduct from './CreateProduct';

function ProductRender({ pages }) {
  return (
    <div>
        {
        pages.map(([page, images], index) => (
          <CreateProduct key={page}
            page={page}
            image={images}
          />
        ))
      }
    </div>
  )
}

export default ProductRender
