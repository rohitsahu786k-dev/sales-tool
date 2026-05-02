import PropTypes from 'prop-types'
import './HeaderMain.css'
import { useNavigate } from "react-router-dom"
import React from 'react'
import logo from '../../assets/logo-black.png'

export default function HeaderMain(props) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/consoles");
  }

  return (
    <>
      <div className='backFeel'>
      </div>
      <div className='w-full md:w-5/12'>
        <div className="heads">
          <div className="hamburger">
            <h1>{props.title}</h1>
          </div>
          <div className="main-area">
            <h1>{props.head}</h1>
            <h2>{props.subTitle}</h2>

            <button
              onClick={handleSubmit}
              className="inline-flex min-h-12 min-w-40 items-center justify-center rounded-full bg-[#EA2D2D] px-6 py-3 text-lg font-semibold text-gray-900 transition hover:bg-[#c92424] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              {props.buttonName}
            </button>
            <p>{props.desc}
            <br/><br/>
            {props.bText}</p>
          </div>
        </div>
      </div>
      <div className='w-full md:w-7/12'>
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



