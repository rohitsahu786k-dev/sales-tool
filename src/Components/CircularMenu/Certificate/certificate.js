import React from 'react'
import { useSelector } from 'react-redux';

function Certificate() {

  const activeDesk = useSelector(state => state.desk.activeDeskInfo);

  return (
    <>
      <div className='newCertifyContainer'>
        {activeDesk.certificates.map((certificate, index) => {
          return <img src={certificate} key={index + 'certificate'} className={'certifyImg'} />
        })}
      </div>
    </>
  )
}

export default Certificate
