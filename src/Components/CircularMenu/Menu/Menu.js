import React, { useState } from 'react'
import MenuItems from '../MenuItems/MenuItems';

import './Menu.css';
import { pages } from './imagelist'

import { useDispatch, useSelector } from 'react-redux';

import { resetChild, setActiveLongDescription, setDisableNext, setDisplayImage, setWheelIndex, updateChildItem, setNext } from '../../../Redux/action';

function Menu() {
    const dispatch = useDispatch();

    const activeDesk = useSelector(state => state.desk.activeDeskInfo);
    const disableAllMenu = useSelector(state => state.desk.disableAllMenu);

    const [active, setActive] = useState(0);
    const handleActive = (currentActiveIndex) => {
        setActive(currentActiveIndex)
        dispatch(setWheelIndex(currentActiveIndex))
        dispatch(setActiveLongDescription(activeDesk.longDescription))
        dispatch(resetChild())
        switch (currentActiveIndex) {
            case 0: {
                dispatch(setDisplayImage(true))
                break;
            }
            case 1: {
                dispatch(updateChildItem(activeDesk.wiring))
                setTimeout(() => dispatch(setNext()), 50)
                break;
            }
            case 2: {
                dispatch(updateChildItem(activeDesk.equipments))
                setTimeout(() => dispatch(setNext()), 50)
                break;
            }
            case 3: {
                dispatch(updateChildItem(activeDesk.certify))
                dispatch(setDisableNext(true))
                break;
            }
            case 4: {
                dispatch(updateChildItem(activeDesk.feat))
                setTimeout(() => dispatch(setNext()), 50)
                break;
            }
            case 5: {
                dispatch(updateChildItem(activeDesk.ergos))
                setTimeout(() => dispatch(setNext()), 50)
                break;
            }
            case 6: {
                dispatch(updateChildItem(activeDesk.assembly))
                setTimeout(() => dispatch(setNext()), 50)
                break;
            }
            default: {
                console.log("No valid case matched. Default case executed.");
                break;
            }
        }
    }

    return (
        <>
            <div className="container">
                <div>
                    <div className="menu active" id="menu">
                        <div className="toggle active">
                            {/* Arrow is rendered via nameId in MenuItems */}
                        </div>
                        {pages.map((page, index) => {
                            return <MenuItems key={index + "mi"} pages={{ ...page, pLength: pages.length }} handleActive={handleActive} active={active} disableAllMenu={disableAllMenu}></MenuItems>
                        })}

                        <div className="indicator">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
