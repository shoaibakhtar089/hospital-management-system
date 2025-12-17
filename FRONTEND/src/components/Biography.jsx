import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>ZeeCare Medical Institute, established in 2024 in Pune, Maharashtra is a leading healthcare institution committed to excellence in patient care, research, and education. Renowned for its state-of-the-art facilities and advanced medical technology, the hospital offers comprehensive services across specialties like cardiology, oncology, orthopedics, and more.</p>
        <p>It serves thousands annually, blending compassionate care with clinical expertise.</p>
        <p>With a team of highly skilled doctors, nurses, and support staff, ZeeCare Medical Institute ensures patient-centric care and innovative treatments.</p>
        <p>Its community outreach programs and focus on preventive healthcare reflect its dedication to societal well-being.</p>
        <p> ZeeCare Medical Institute stands as a beacon of trust and quality in modern healthcare.</p>
        <p>It specializes in multiple disciplines, including cardiology, oncology, neurology, and pediatrics, supported by cutting-edge technology and a skilled medical team.</p>
      </div>
    </div>
  )
}

export default Biography
