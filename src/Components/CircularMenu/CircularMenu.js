import React, { useEffect } from 'react'
import logo from '../../assets/logo-black.png'
import Color from './Color/Color'
import Header3 from './Header3'
import Menu from './Menu/Menu'
import VAssets from './VAssets/VAssets';
import { useDispatch, useSelector } from 'react-redux'
import Image from './ImageAssets/Image'
import WheelChildItems from './WheelChildItems/WheelChildItems'
import { setActiveLongDescription } from '../../Redux/action'
import Certificate from './Certificate/certificate'

function CircularMenu() {

  const activeDesk = useSelector(state => state.desk.activeDeskInfo);
  const disableAllMenu = useSelector(state => state.desk.disableAllMenu);
  const wheelIndex = useSelector(state => state.product.wheelIndex);
  const displayImage = useSelector(state => state.product.displayImage);
  const selectedItem = useSelector(state => state.wheelItem.currentIndex);
  const slides = useSelector(state => state.wheelItem.childItem);

  const dispatch = useDispatch();

  useEffect(() => {
    if (slides[selectedItem]) {
      if (slides[selectedItem].description) {
        if (wheelIndex == 3) {
          let description = "";
          slides.slice(0, selectedItem + 1).forEach((slide) => {
            description = slide.description ? description + "" + slide.description + "<br /><br />" : ""
          });;
          dispatch(setActiveLongDescription(description))
        } else {
          dispatch(setActiveLongDescription(slides[selectedItem].description))
        }
      } else {
        dispatch(setActiveLongDescription(activeDesk.longDescription))
      }
    }
  }, [selectedItem, slides])

  return (
    <>
      <div className='col-md-5'>
        <Header3 title="Control Room Consoles" head={activeDesk.title} desc={activeDesk.activeLongDescription} />
        <Menu />

      </div>
      {/* {disableAllMenu &&
        <div className='col-md-7'>
          
        </div>
      } */}
      {/* {!disableAllMenu && */}
        <div className='col-md-7'>
          {
            wheelIndex == 0 ?
              activeDesk.activeColor ?
                <Image srcImage={activeDesk.activeColor.deskImage} />
                : (displayImage ? <Image srcImage={activeDesk.displayFront} /> : <VAssets />)
              : <WheelChildItems />
          }

          {/* Images called here */}

          <div className='wSLogoIn'>
            <img src={logo} alt="" />
          </div>
          {
            wheelIndex == 0 && <Color></Color>
          }
          {
            wheelIndex == 3 && <Certificate></Certificate>
          }
        </div>
      {/* } */}
    </>
  )
}

export default CircularMenu
