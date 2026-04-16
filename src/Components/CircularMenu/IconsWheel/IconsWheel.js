
import { useNavigate } from 'react-router-dom';
import './IconWheel.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayImage, setNext } from '../../../Redux/action';
import { ArrowBack, ArrowLeft } from '../../../svgAssests';

function IconsWheel({ page, name, image, rotation, x, active, handleActive, disabled }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const disableNext = useSelector(state => state.wheelItem.disableNext);

    const handleClick = (pageNo) => {
        if (pageNo == 0) {
            navigate("/Vslider")
            dispatch(setDisplayImage(false))
        } else {
            dispatch(setNext())
        }
    }
    console.log(page)
    return (
        <>
            <div className={"menu-item " + (page == active ? "active" : "") + " " + (disabled ? "disabled-div" : "")} onClick={(e) => handleActive(page)}
                style={{ transform: `rotate(${rotation}deg) translate(${0}%)` }}>
                <img src={image}
                    style={
                        {
                            transform: `rotate(${x}deg)`,
                            '--i': page,
                            name: 'name',
                        }
                    } />
            </div>
            <span className={"nameId " + (page == active ? "active" : "") + " " + (disabled ? "disabled-div" : "")} onClick={(e) => { e.stopPropagation(); handleClick(page); }}>
                {name}
                <div className="nbutton" style={{ cursor: 'pointer' }}>
                    {page != 0 ? <button className="btn btn-success-1 circleButton" disabled={disableNext} ><ArrowBack /></button>
                        : <button className="btn btn-success-1 circleButton"><ArrowLeft /></button>}
                </div>
            </span>

        </>
    )
}
export default IconsWheel