
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useSelector } from 'react-redux';

function SideSlider() {

    const activeDesk = useSelector(state => state.desk.activeDeskInfo);
    const [active, setActive] = useState("");

    useEffect(() => {
        setActive(activeDesk.features[0])
    }, [activeDesk])

    return (
        <div>
            <Carousel verticalMode initialActiveIndex={0} itemsToShow={3} transitionMs={100}>
                {activeDesk.features.map((feature, index) => {
                    return <span key={index} className={active === feature ? 'active' : ''} onClick={() => setActive(feature)} >{feature}</span>
                })}
            </Carousel>

        </div>
    )
}

export default SideSlider
