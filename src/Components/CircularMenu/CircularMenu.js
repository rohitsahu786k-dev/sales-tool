import React, { useEffect } from 'react'
import logo from '../../assets/logo-black.png'
import Color from './Color/Color'
import Header3 from './Header3'
import Menu from './Menu/Menu'
import VAssets from './VAssets/VAssets';
import { useDispatch, useSelector } from 'react-redux'
import Image from './ImageAssets/Image'
import WheelChildItems from './WheelChildItems/WheelChildItems'
import { setActiveLongDescription, setActiveDesk, setDisplayImage, resetChild, setWheelIndex } from '../../Redux/action'
import Certificate from './Certificate/certificate'
import { useParams } from 'react-router-dom'
import './CircularMenu.css'

// Same slug logic used in CarouselSlider
const toSlug = (title) =>
  title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

function CircularMenu() {
  const dispatch = useDispatch();
  const { slug } = useParams();

  const activeDesk = useSelector(state => state.desk.activeDeskInfo);
  const deskList = useSelector(state => state.desk.list);
  const wheelIndex = useSelector(state => state.product.wheelIndex);
  const displayImage = useSelector(state => state.product.displayImage);
  const selectedItem = useSelector(state => state.wheelItem.currentIndex);
  const slides = useSelector(state => state.wheelItem.childItem);

  // When URL slug changes, select the matching console
  useEffect(() => {
    if (!slug || !deskList) return;
    const matched = deskList.find(d => toSlug(d.title) === slug);
    if (matched && matched.id !== activeDesk.id) {
      dispatch(setActiveDesk(matched.id));
      dispatch(setWheelIndex(0));
      dispatch(setDisplayImage(true));
      dispatch(resetChild());
    }
  }, [slug, deskList]); // eslint-disable-line

  // Update description when feature changes
  useEffect(() => {
    if (slides[selectedItem]) {
      if (slides[selectedItem].description) {
        if (wheelIndex === 3) {
          let description = "";
          slides.slice(0, selectedItem + 1).forEach((slide) => {
            description = slide.description ? description + "" + slide.description + "<br /><br />" : ""
          });
          dispatch(setActiveLongDescription(description))
        } else {
          dispatch(setActiveLongDescription(slides[selectedItem].description))
        }
      } else {
        dispatch(setActiveLongDescription(activeDesk.longDescription))
      }
    }
  }, [activeDesk.longDescription, dispatch, selectedItem, slides, wheelIndex])

  return (
    <>
      {/* LEFT PANEL: text + circular menu */}
      <div className='circular-left'>
        <Header3
          title="Control Room Consoles"
          head={activeDesk.title}
          desc={activeDesk.activeLongDescription}
        />
        <Menu />
      </div>

      {/* RIGHT PANEL: product image/video + logo + color picker */}
      <div className='circular-right'>
        {wheelIndex === 0
          ? activeDesk.activeColor
            ? <Image srcImage={activeDesk.activeColor.deskImage} />
            : (displayImage ? <Image srcImage={activeDesk.displayFront} /> : <VAssets />)
          : wheelIndex === 3
            ? <Certificate />
            : <WheelChildItems />
        }

        <div className='wSLogoIn'>
          <img src={logo} alt="OnePWS" />
        </div>

        {wheelIndex === 0 && <Color />}
      </div>
    </>
  )
}

export default CircularMenu
