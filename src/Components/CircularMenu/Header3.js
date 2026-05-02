import React from 'react'
import PropTypes from 'prop-types'


function Header3(props) {
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

export default Header3

Header3.propTypes = {
  title: PropTypes.string,
  head: PropTypes.string,
  desc: PropTypes.string
}
