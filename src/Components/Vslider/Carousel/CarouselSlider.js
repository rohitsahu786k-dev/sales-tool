import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import './CarouselSlider.css'
import { useDispatch, useSelector } from "react-redux";
import { setActiveDesk } from '../../../Redux/action';
import { useEffect } from "react";
import { useRef } from "react";

const breakPoints = [
  { width: 1, itemsToShow: 3, itemsToSlide: 1 },
  { width: 550, itemsToShow: 3, itemsToSlide: 1 },
  { width: 768, itemsToShow: 3, itemsToSlide: 1 },
  { width: 1200, itemsToShow: 3, itemsToSlide: 1 },
];

function CarouselSlider() {
  const deskSelectedId = useSelector(state => state.desk.activeDesk);
  const DeskList = useSelector(state => state.desk.list);
  const dispatch = useDispatch();
  const carouselRef = useRef(null);
  const [image, setImages] = useState(deskSelectedId);
  const [title, setTitle] = useState(0);

  const handleClick = (id) => {
    dispatch(setActiveDesk(id))
    setImages(id)
  }

  useEffect(() => {
    setImages(deskSelectedId)
  }, [deskSelectedId])

  const onNext = (nextItemObject, currentPageIndex) => {
    dispatch(setActiveDesk(nextItemObject.index))
    setImages(nextItemObject.index)
  }

  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef.current.goTo(0);
    }
  };

  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef.current.goTo(DeskList.length);
    }
  };

  return (
    <>
      <div className="cSlider">
        <div className="cSliderContainer">
        <Carousel
          ref={carouselRef}
          itemsToScroll={1}
          itemsToShow={3}
          initialFirstItem={deskSelectedId}
          // onPrevStart={onPrevStart}
          // onNextStart={onNextStart}
          // disableArrowsOnEnd={false}
          breakPoints={breakPoints}
          // onNextEnd={onNext}
          // onPrevEnd={onNext}
          transitionMs={1000}>

          {DeskList.map(desk => {
            return <div className="title" key={desk.id+'desk'}> <img src={desk.img} key={desk.id} onClick={() => handleClick(desk.id)} className={image === desk.id ? 'active' : ''} />
              <br /><span >{image === desk.id ? desk.title : '\u00A0'}</span></div>
          })}

        </Carousel>
      </div>
      </div>
    </>
  );
}

export default CarouselSlider
