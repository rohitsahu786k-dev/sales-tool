import PropTypes from 'prop-types'
import './HeaderMain.css'
import { useNavigate } from "react-router-dom"
import React, { useState } from 'react'
import logo from '../../assets/logo-black.png'
import { BurgerIcon } from '../../svgAssests'

export default function HeaderMain(props) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Vslider");
  }
  const [toggle, setToggle] = useState("1");
  function setImage(id) {
    setToggle(id)
  }


  return (
    <>
      <div className='backFeel'>


      </div>
      <div className='col-md-5'>

        <div className="heads">
          <div className="hamburger">
          
            <h1>{props.title}</h1>
          </div>
          <div className="main-area">
            <h1>{props.head}</h1>
            <h2>{props.subTitle}</h2>

            <button onClick={handleSubmit} className="btn btn-danger">{props.buttonName}</button>
            <p>{props.desc}
            <br/><br/>
            {props.bText}</p>
           

          </div>

        </div>

      </div>
      <div className='col-md-7'>
        <div className='wSLogo'>
          <img src={logo} alt="" />
        </div>
      </div>

    </>
  )
}
HeaderMain.propTypes = {
  title: PropTypes.string,
  head: PropTypes.string,
  subTitle: PropTypes.string,
  desc: PropTypes.string,
  bText: PropTypes.string
}