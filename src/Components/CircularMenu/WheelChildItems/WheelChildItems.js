import React, { createRef, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Carousel from "react-elastic-carousel";
import './WheelChildItems.css'
import Image from '../ImageAssets/Image';


const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToSlide: 1 }
];
function WheelChildItems() {

    const slides = useSelector(state => state.wheelItem.childItem);
    const selectedItem = useSelector(state => state.wheelItem.currentIndex);
    const activeDesk = useSelector(state => state.desk.activeDeskInfo);
    const wheelIndex = useSelector(state => state.product.wheelIndex);
    // const imageId = 0;
    useEffect(() => {

    }, [])

    // const refC = useRef(null);
    const elementRefs = useRef([...Array(30)].map(() => createRef()));;

    useEffect(() => {
        
        if (elementRefs.current[selectedItem]) {
            // refC.current.goTo(selectedItem)
            // if (selectedItem > 0) {
            // elementRefs.current[selectedItem].current.load();
            elementRefs.current[selectedItem].current?.play();
            // } else if (selectedItem == 0) {
            //     setTimeout(() => {
            //         elementRefs.current[selectedItem].current.play();
            //     }, 2000)
            // }

        }

    }, [selectedItem])

    useEffect(() => {
    }, [slides])

    return (
        <>
            {/* <Carousel transitionMs={1000} ref={refC} showArrows={false} className='iconChildItems' onChange={(currentItem) => currentItem.play()}> */}
            <div className='iconChildItems'>  {slides.map((slide, index) => {
                console.log(slide.type)
                return slide.type == "image" ?
                    <div key={slide.media} style={{ display: selectedItem === (index) ? "block" : "none" }}>
                        <div className='imageView'>
                            <img src={slide.media} className={(slide.className ? slide.className : '') + ' colorImage'} />
                        </div>
                    </div>
                    :
                    <div
                        style={{ display: selectedItem === (index) ? "block" : "none" }}>
                        <video key={slide.media} ref={elementRefs.current[index]} autoPlay={false} className='product'  >
                            <source src={slide.media} key={slide.media} />
                        </video>
                    </div>
            })}
            </div>
            {/* </Carousel> */}
            {/* return index == 0 ? <Image srcImage={img} /> : <div
                    style={{ display: selectedItem === (index - 1) ? "block" : "none" }}>
                    <video key={img} ref={elementRefs.current[index - 1]} autoPlay={false}  >
                        <source src={img} key={index} />
                    </video>
                </div> */}
        </>
    )
}

export default WheelChildItems
