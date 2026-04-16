import React from 'react'
import PropTypes from 'prop-types'
import { BurgerIcon } from '../../../svgAssests'


function Header2(props) {
  return (
    <>
      <div className="heads">
        <div className="hamburger">
          <h1>{props.title}</h1>
        </div>
        <div className="main-area">
          <h1>{props.head}</h1>
          <span dangerouslySetInnerHTML={{ __html: props.desc }}></span>
        </div>
      </div>
    </>
  )
}

export default Header2

Header2.propTypes = {
  title: PropTypes.string,
  head: PropTypes.string,
  desc: PropTypes.string
}