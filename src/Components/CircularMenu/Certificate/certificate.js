import React from 'react'
import { useSelector } from 'react-redux';

function Certificate() {

  const activeDesk = useSelector(state => state.desk.activeDeskInfo);
  const consoleImage = activeDesk.activeColor?.deskImage || activeDesk.displayFront;

  return (
    <>
      <div className='newCertifyContainer'>
        {consoleImage && (
          <div className='certifyProductPreview'>
            <img src={consoleImage} alt={activeDesk.title} />
          </div>
        )}
        <p className='certify-heading'>Certifications</p>
        <div className='certify-grid'>
          {activeDesk.certificates.map((certificate, index) => {
            return (
              <div key={index + 'certificate'} className='certifyImgWrapper'>
                <img src={certificate} alt={`Certificate ${index + 1}`} className='certifyImg' />
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Certificate
