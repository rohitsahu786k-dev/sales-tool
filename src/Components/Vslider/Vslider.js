import React, { useRef } from "react";
import "./Vslider.css";
import CarouselSlider from "./Carousel/CarouselSlider";
import { useNavigate } from "react-router-dom";
import Header2 from "./Carousel/Header2";
import ImageSliderAssets from "./ImageSliderAssets/ImageSliderAssets";
import SideSlider from "./Carousel/SideSlider";
import { useSelector } from "react-redux";
import FBXViewer from "../FBXViewer";

const toSlug = (title) =>
  title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

const toDeskSlug = (desk) => `${desk.id}-${toSlug(desk.title)}`;

function Vslider({ setPlayVideo }) {
  const activeDesk = useSelector((state) => state.desk.activeDeskInfo);
  const disableAllMenu = useSelector((state) => state.desk.disableAllMenu);
  const divRef = useRef(null);
  const navigate = useNavigate();

  const handleExplore = () => {
    setPlayVideo(true);
    navigate(`/consoles/${toDeskSlug(activeDesk)}`);
  };

  return (
    <div className="vslider-page">
      {/* LEFT PANEL */}
      <div className="vslider-left">
        <Header2
          title="Control Room Consoles"
          head={activeDesk.title}
          desc={activeDesk.shortDescription}
        />

        {/* Explore Button */}
        <button className="explore-btn" onClick={handleExplore}>
          Explore
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        {!disableAllMenu && (
          <div className="vSlider">
            <div className="listItems">
              <SideSlider />
            </div>
          </div>
        )}

        <CarouselSlider />
      </div>

      {/* RIGHT PANEL */}
      <div className="vslider-right" ref={divRef}>
        {disableAllMenu ? (
          <>
            {divRef && divRef.current && (
              <FBXViewer fileName={activeDesk.fbxFileName} />
            )}
          </>
        ) : (
          <ImageSliderAssets onConsoleClick={handleExplore} />
        )}
      </div>
    </div>
  );
}

export default Vslider;
