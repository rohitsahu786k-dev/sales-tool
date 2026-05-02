import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import direction from '../../../assets/color-picker/direction.png'

import './Color.css'
import { setActiveColor } from '../../../Redux/action';

function Color() {

  const dispatch = useDispatch();

  const activeDesk = useSelector(state => state.desk.activeDeskInfo);
  const handleClick = (color) => {
    dispatch(setActiveColor(color))
  }

  return (
    <>
      { activeDesk.colors.length > 0 &&
        <div className="dots">
        <p className='heading'>Color Options</p>
        <div className='division'><img src={direction} alt="" /></div>
        {activeDesk.colors.map((color, index) => {
          return <img src={color.icon} alt={color.name} key={index} className={activeDesk.activeColor?.name === color.name ? 'active' : ''} onClick={() => handleClick(color)} />
        })}
      </div>
      }
    </>
  )
}

export default Color
