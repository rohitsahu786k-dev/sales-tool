import React, { useRef } from "react";
import "./Vslider.css";
import CarouselSlider from "./Carousel/CarouselSlider";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-black.png";
import { ArrowSlider, SearchIcon } from "../../svgAssests";
import Header2 from "./Carousel/Header2";
import ImageSliderAssets from "./ImageSliderAssets/ImageSliderAssets";
import SideSlider from "./Carousel/SideSlider";
import { useSelector } from "react-redux";
import FBXViewer from "../FBXViewer";

function Vslider({ setPlayVideo }) {
  const activeDesk = useSelector((state) => state.desk.activeDeskInfo);
  const disableAllMenu = useSelector((state) => state.desk.disableAllMenu);
  const divRef = useRef(null);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayVideo(true);
    navigate("/CircularMenu");
  };

  return (
    <>
      <div className="col-md-5">
        <Header2
          title="Control Room Consoles"
          head={activeDesk.title}
          desc={activeDesk.shortDescription}
        />
        {!disableAllMenu && (
          <div className="vSlider">
            <div className="listItems">
              <div className="arrowSlider">
                <ArrowSlider />
              </div>
              <SideSlider></SideSlider>
            </div>
          </div>
        )}

        <CarouselSlider />
      </div>
      <div className="col-md-7" ref={divRef}>
        {disableAllMenu ? (
          <>
            {" "}
            {divRef && divRef.current && (
              <FBXViewer fileName={activeDesk.fbxFileName} />
            )}
          </>
        ) : (
          <ImageSliderAssets />
        )}
        <div className="wSLogoIn">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="moreButton">
        <button onClick={handleSubmit} className="btn btn-light">
          {/* <SearchIcon /> */}
          <span>Explore</span>
        </button>
      </div>
    </>
  );
}

export default Vslider;
