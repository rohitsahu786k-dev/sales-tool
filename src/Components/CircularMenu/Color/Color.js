import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import direction from '../../../assets/color-picker/direction.png'

import './Color.css'
import { setActiveColor } from '../../../Redux/action';

function Color() {

  const dispatch = useDispatch();

  const activeDesk = useSelector(state => state.desk.activeDeskInfo);
  const [isActive, setIsActive] = useState(false);
  const handleClick = (color) => {
    dispatch(setActiveColor(color))
    setIsActive(current => !current);
  }

  return (
    <>
      { activeDesk.colors.length > 0 &&
        <div className="dots">
        <p className='heading'>Color Options</p>
        <div className='division'><img src={direction} /></div>
        {activeDesk.colors.map((color, index) => {
          return <img src={color.icon} key={index} className={activeDesk.activeColor?.name == color.name ? 'active' : ''} onClick={() => handleClick(color)} />
        })}
      </div>
      }
    </>
  )
}

export default Color
