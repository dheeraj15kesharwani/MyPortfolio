import React from 'react'
import "./about.css";
import AboutImg from "../../assets/neww2.jpg"
import CV from "../../assets/Dheeraj_Kesharwani___CV.pdf"
import Info from './Info'

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="About Image" className="about__img" />

        <div className="about__data">
          <Info/>

          <p className="about__description">
            I am a highly motivated and dedicated individual with a passion for learning and growth. I am a
            Frontend developer, I created web pages with UI / Ux user interface, I have year of experience and
            many clients are happy with projects carried out.
          </p>

          <a download="" href={CV} className="button button--flex">
            <i className="uil uil-cloud-download"></i> Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default About