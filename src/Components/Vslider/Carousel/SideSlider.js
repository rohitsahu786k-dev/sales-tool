
import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useSelector } from 'react-redux';

function SideSlider() {
    const activeDesk = useSelector(state => state.desk.activeDeskInfo);
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        setActiveIndex(0);
        if (carouselRef.current) {
            carouselRef.current.goTo(0);
        }
    }, [activeDesk]);

    const goUp = () => {
        const prev = Math.max(0, activeIndex - 1);
        setActiveIndex(prev);
        if (carouselRef.current) carouselRef.current.goTo(prev);
    };

    const goDown = () => {
        const next = Math.min(activeDesk.features.length - 1, activeIndex + 1);
        setActiveIndex(next);
        if (carouselRef.current) carouselRef.current.goTo(next);
    };

    return (
        <div className="sideSliderWrapper">
            {/* UP arrow */}
            <button
                className="side-arrow-btn"
                onClick={goUp}
                disabled={activeIndex === 0}
                aria-label="Previous feature"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15" />
                </svg>
            </button>

            {/* Feature list */}
            <div className="sideSliderList">
                <Carousel
                    ref={carouselRef}
                    verticalMode
                    initialActiveIndex={0}
                    itemsToShow={3}
                    transitionMs={200}
                    showArrows={false}
                    pagination={false}
                >
                    {activeDesk.features.map((feature, index) => (
                        <span
                            key={index}
                            className={activeIndex === index ? 'active' : ''}
                            onClick={() => {
                                setActiveIndex(index);
                                if (carouselRef.current) carouselRef.current.goTo(index);
                            }}
                        >
                            {feature}
                        </span>
                    ))}
                </Carousel>
            </div>

            {/* DOWN arrow */}
            <button
                className="side-arrow-btn"
                onClick={goDown}
                disabled={activeIndex >= activeDesk.features.length - 1}
                aria-label="Next feature"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>
        </div>
    );
}

export default SideSlider
