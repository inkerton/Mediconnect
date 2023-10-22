import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='contact'>
        <img  className='contact_img'
        src="https://images.livemint.com/img/2021/03/30/600x338/370287381_0-9_1616715876780_1617104400800.jpg" alt=""/>
          <div className='contact_container'> 
      <h1 className="h1">Send Message</h1>

        <h2 className="h2_container">Name</h2>
        <input type="text" className="_input" />
    
      <h2 className="h2_container">Email</h2>
      <input className="_input" type="text"/>
     
      <h2 className="h2_container">Type Message</h2>
      <textarea className="_input"  />
   <div className="btn_div">
   <button className="btn_right" >
     Submit
      </button>
   </div>
     
      </div>
    </div>
  )
}

export default Contact