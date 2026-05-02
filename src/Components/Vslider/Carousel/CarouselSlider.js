import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import './CarouselSlider.css'
import { useDispatch, useSelector } from "react-redux";
import { setActiveDesk } from '../../../Redux/action';
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 3, itemsToSlide: 1 },
  { width: 550, itemsToShow: 3, itemsToSlide: 1 },
  { width: 768, itemsToShow: 3, itemsToSlide: 1 },
  { width: 1200, itemsToShow: 3, itemsToSlide: 1 },
];

const toSlug = (title) =>
  title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

function CarouselSlider({ onConsoleClick }) {
  const deskSelectedId = useSelector(state => state.desk.activeDesk);
  const DeskList = useSelector(state => state.desk.list);
  const dispatch = useDispatch();
  const carouselRef = useRef(null);
  const [image, setImages] = useState(deskSelectedId);
  const navigate = useNavigate();
  const location = useLocation();

  // Are we on the listing page (/consoles) or product page (/consoles/:slug)?
  const isListingPage = location.pathname === '/consoles';

  const handleClick = (id, title) => {
    dispatch(setActiveDesk(id));
    setImages(id);

    if (isListingPage) {
      if (onConsoleClick) onConsoleClick();
    } else {
      navigate(`/consoles/${toSlug(title)}`);
    }
  };

  useEffect(() => {
    setImages(deskSelectedId);
  }, [deskSelectedId]);

  return (
    <>
      <div className="cSlider">
        <div className="cSliderContainer">
          <Carousel
            ref={carouselRef}
            itemsToScroll={1}
            itemsToShow={3}
            initialFirstItem={deskSelectedId}
            breakPoints={breakPoints}
            transitionMs={600}
            onNextStart={(currentItem, nextItem) => {
              if (nextItem && DeskList[nextItem.index]) {
                const desk = DeskList[nextItem.index];
                dispatch(setActiveDesk(desk.id));
                setImages(desk.id);
              }
            }}
            onPrevStart={(currentItem, nextItem) => {
              if (nextItem && DeskList[nextItem.index]) {
                const desk = DeskList[nextItem.index];
                dispatch(setActiveDesk(desk.id));
                setImages(desk.id);
              }
            }}
          >
            {DeskList.map(desk => {
              return (
                <div className="title" key={desk.id + 'desk'}>
                  <img
                    src={desk.img}
                    alt={desk.title}
                    key={desk.id}
                    onClick={() => handleClick(desk.id, desk.title)}
                    className={image === desk.id ? 'active' : ''}
                    style={{ cursor: 'pointer' }}
                  />
                  <br />
                  <span>{image === desk.id ? desk.title : '\u00A0'}</span>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default CarouselSlider;
