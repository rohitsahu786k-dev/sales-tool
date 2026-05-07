import React, { createRef, useRef } from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './WheelChildItems.css'
function WheelChildItems() {

    const slides = useSelector(state => state.wheelItem.childItem);
    const selectedItem = useSelector(state => state.wheelItem.currentIndex);
    const selectedSlide = slides[selectedItem];

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

    return (
        <>
            {/* <Carousel transitionMs={1000} ref={refC} showArrows={false} className='iconChildItems' onChange={(currentItem) => currentItem.play()}> */}
            <div className='iconChildItems'>
                {selectedSlide && (
                    selectedSlide.type === "image" ?
                    <div key={selectedSlide.media}>
                        <div className='imageView'>
                            <img src={selectedSlide.media} alt="" className={(selectedSlide.className ? selectedSlide.className : '') + ' colorImage'} />
                        </div>
                    </div>
                    :
                    <div
                        key={selectedSlide.media}>
                        <video ref={elementRefs.current[selectedItem]} autoPlay={false} className='product' onClick={(e) => { if (e.target.requestFullscreen) { e.target.requestFullscreen(); } else if (e.target.webkitRequestFullscreen) { e.target.webkitRequestFullscreen(); } }} >
                            <source src={selectedSlide.media} key={selectedSlide.media} />
                        </video>
                    </div>
                )}
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

