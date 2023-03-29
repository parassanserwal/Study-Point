import React from "react";
import './home.css'
import Header from "../Header/Header"
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <>
      {/* <div className="header">
        <div className="main-logo">
          <div className="logo">LOGO</div>
        </div>
        <div className="buttons">
          <div className="home">Home</div>
          <div className="about">About</div>
          <div className="skills">Skills</div>
          <div className="works">Works</div>
          <div className="testimonial">Testimonial</div>
          <div className="contact">Contact</div>
        </div>
        <div className="download-button">
          <div className="download">Download CV</div>
        </div>
      </div> */}
      <Header/>
      <div className="main-container1">
        <div className="container1">
          <div className="text">
            <p className="i-text hlo">Unlock Your Potential With Expert </p>
            <p className="h hlo">Guidance</p>
          </div>
          <div className="text1">
            <p className="h hlo">So,Join Our Institute</p>
            <p className="i-text1 hlo">Today!!</p>
          </div>
          <div className="text2">
            {/* <p className="i-text2 hlo">
              I'm karan a creative web developer, i've been helping businesses
            </p> */}
            <p className="i-text2 hlo">
            "Prepare smarter, not harder, with Us."
            </p>
          </div>
          <div className="text3">
            <div className="contactme">      <NavLink to='/contact' activeclassname='active' className="contactus" style={{color:"white"}}>Contact</NavLink>
</div>
            <div className="learnmore">Learn More-</div>
          </div>
        </div>
        <div className="container2"></div>
      </div>
      <div className="basic-info">
        <div className="clients">
          <div className="num1">900+</div>
          <div className="client">Qualified</div>
        </div>
        <div className="projects">
          <div className="num1">200+</div>
          <div className="client">Scored Under AIR 300</div>
        </div>
        <div className="reviews">
          <div className="num1">100+</div>
          <div className="client">Scored Under AIR 200</div>
        </div>
      </div>
      <div className="main-container3">
        <div className="skillls">
          <p className="tag-line">Why You Should Choose</p>
          <p className="tag-line">Us?</p>
          <div className="tag-line3">
          "Our Institute provides a conducive learning environment that fosters creativity, critical thinking, and problem-solving skills - essential qualities for success in IIT."
          </div>
          <p className="tag-line4">design</p>
          <div className="hire-me">Join Us</div>
        </div>
        <div className="All-Tags">
        <div className="singh">
          <i className="fa-solid fa-heart-pulse"></i>
          <div className="add-skill1">Mentors</div>
          <div className="add-skill2">1:1</div>
        </div>
        <div className="skills-tag">
          
          <div className="add-skill">
            <i className="fa fa-light fa-gem"></i>
            <div className="add-skill1">Personalized</div>

            <div className="add-skill2">mentorship</div>
          </div>
          <div className="skille">
            <i className="fa fa-thin fa-graduation-cap"></i>
            <div className="add-skill1">Doubt class</div>
            <div className="add-skill2">live</div>
          </div>
        </div>
        <div className="skulls">
          <i className="fa-solid fa-heart-pulse"></i>
          <div className="add-skill1">Experienced</div>
          <div className="add-skill2">faculty</div>
        </div>
        </div>
      </div>
      <div className="main-container4">
        <div className="project">
          <p className="tag-line">Our Recent Student</p>
          <p className="tag-line">Results ?</p>
          <div className="tag-line3">
          "We are proud to showcase our top performers who have made us proud with their remarkable success."
          </div>
          <div className="hire-me">Show More</div>
        </div>
        <div className="project-image">
          <div className="img1">
            <img src="https://i.imgur.com/FaVZBHO.png"/>
            <p>AIR 1</p>
            <p className="name-tag">Sakshi</p>
          </div>
          <div className="img1">
          <img src="https://i.imgur.com/nzRlgmg.png"/>
            <p>AIR 4</p>
            <p className="name-tag">Anvi</p>
          </div>
          <div className="img1">
          <img src="https://i.imgur.com/zzqTsva.png"/>
            <p>AIR 6</p>
            <p className="name-tag">Arnav</p>
          </div>
          {/* <div className="img1">
          <img src="https://i.imgur.com/tQpa5Mv.png"/>
            <p>AIR 8</p>
            <p className="name-tag">Prince</p>
          </div> */}
        </div>
      </div>
      <div className="main-container5">
        <div className="reviews">
          <p className="tag-line">Our App Looks Something</p>
          <p className="tag-line">Like This</p>
          <div className="review-image"></div>
        </div>
      </div>
    </>
  );
}
