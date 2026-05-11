import React, { useMemo, useState } from "react";
import './CarouselSlider.css'
import { useDispatch, useSelector } from "react-redux";
import { setActiveDesk } from '../../../Redux/action';
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const toSlug = (title) =>
  title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

const toDeskSlug = (desk) => toSlug(desk.title);

function CarouselSlider({ onConsoleClick }) {
  const deskSelectedId = useSelector(state => state.desk.activeDesk);
  const DeskList = useSelector(state => state.desk.list);
  const dispatch = useDispatch();
  const [image, setImages] = useState(deskSelectedId);
  const navigate = useNavigate();
  const location = useLocation();
  const selectedIndex = Math.max(0, DeskList.findIndex((desk) => desk.id === deskSelectedId));
  const visibleStart = Math.min(
    Math.max(0, selectedIndex - 1),
    Math.max(0, DeskList.length - 3)
  );
  const visibleDesks = useMemo(
    () => DeskList.slice(visibleStart, visibleStart + 3),
    [DeskList, visibleStart]
  );

  // Are we on the listing page (/consoles) or product page (/consoles/:slug)?
  const isListingPage = location.pathname === '/consoles';

  const handleClick = (desk) => {
    const { id } = desk;
    dispatch(setActiveDesk(id));
    setImages(id);

    if (isListingPage) {
      if (onConsoleClick) onConsoleClick();
    } else {
      navigate(`/consoles/${toDeskSlug(desk)}`);
    }
  };

  const handleStep = (direction) => {
    const nextIndex = selectedIndex + direction;
    if (nextIndex < 0 || nextIndex >= DeskList.length) return;

    const desk = DeskList[nextIndex];
    dispatch(setActiveDesk(desk.id));
    setImages(desk.id);
  };

  useEffect(() => {
    setImages(deskSelectedId);
  }, [deskSelectedId]);

  return (
    <>
      <div className="cSlider">
        <div className="cSliderContainer">
          <button
            className="console-carousel-arrow"
            type="button"
            onClick={() => handleStep(-1)}
            disabled={selectedIndex === 0}
            aria-label="Previous console"
          >
            &#8249;
          </button>

          <div className="console-carousel-track">
            {visibleDesks.map(desk => {
              return (
                <div className="title" key={desk.id + 'desk'}>
                  <img
                    src={desk.img}
                    alt={desk.title}
                    key={desk.id}
                    onClick={() => handleClick(desk)}
                    className={image === desk.id ? 'active' : ''}
                    style={{ cursor: 'pointer' }}
                  />
                  <br />
                  <span>{desk.title}</span>
                </div>
              );
            })}
          </div>

          <button
            className="console-carousel-arrow"
            type="button"
            onClick={() => handleStep(1)}
            disabled={selectedIndex === DeskList.length - 1}
            aria-label="Next console"
          >
            &#8250;
          </button>
        </div>
      </div>
    </>
  );
}

export default CarouselSlider;
