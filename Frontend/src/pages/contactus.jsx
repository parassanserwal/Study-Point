import React from "react";
import Contact from '../Components/contact/Contact.js'
import Header from '../Components/Header/Header.js'
export default function contactus() {
  return (
    <div>
        <Header/>
      <Contact/>
      <div className="con">
      <i class="fa fa-solid fa-phone fa-shake"></i>
      <p>9000000001</p>
      </div>
      <div className="mai">
      <i class="fa fa-light fa-envelope"></i>
      <p>studypoint.info@gmail.com</p>
      </div>
    </div>
  )
}
