import React, { useEffect, useState } from 'react';

const About = () => {
  // const [heightOfScreen, setHeightOfScreen] = useState(0)

  const scrollUnderlineHandler = (e) => {
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var screenHeight = window.innerHeight

    if (scrollTop*2.3 > screenHeight) {
      window.addEventListener('scroll', scrollSunHandler)

      const aboutText = document.querySelector('.about-text')
      const aboutUnderline = document.querySelector('.underline-text')

      aboutText.style.opacity = "1"
      aboutUnderline.style.width = "100%"
      console.log(1)
      setTimeout(() => {
        aboutUnderline.style.minWidth = "300px"
        window.removeEventListener('scroll',scrollUnderlineHandler)
      }, 1500)
    }
  }

  const scrollSunHandler = () => {
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var screenHeight = window.innerHeight

    const sun = document.querySelector('.sun')
    var greenColor = screenHeight/(scrollTop*2.5)*242
    var standardColor = `rgba(236,${greenColor},42,1)`

    sun.style.backgroundColor = standardColor
  }


  useEffect(() => {
    window.addEventListener('scroll', scrollUnderlineHandler)

    return () => {
      window.removeEventListener('scroll', scrollUnderlineHandler)
    }
  }, [])

  return (
    <div id="about-site">
      <h2 className="about-header">About</h2>
      <div className="row about-site">
        <div className="col-12 col-md-8 d-flex" >
          <div className="d-flex flex-column mx-auto about-text-div">
            <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="underline-text"></div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="sun"></div>
          <div className="bg"></div>
        </div>
      </div>
      <div className="experience">
        <h2 className="text-center display-4 experience-header">Intermediate</h2>
        <div className="row">
          <div className="col-12 col-md-3 flex-settings-skills text-center px-0 border-md-right">
            <div className="row">
              <h2 className="col-6 col-md-12 border-dark border-bottom pb-2 experience-text-size">Python</h2>
              <h2 className="col-6 col-md-12 border-dark border-bottom border-md-bottom-0 experience-text-size">1 year</h2>
            </div>
          </div>
          <div className="col-12 col-md-3 flex-settings-skills text-center px-0 border-md-right">
            <div className="row">
              <h2 className="col-6 col-md-12 border-dark border-bottom pb-2 experience-text-size">Django</h2>
              <h2 className="col-6 col-md-12 border-dark border-bottom border-md-bottom-0 experience-text-size">8 months</h2>
            </div>
          </div>
          <div className="col-12 col-md-3 flex-settings-skills text-center px-0">
            <div className="row">
              <h2 className="col-6 col-md-12 border-dark border-bottom pb-2 experience-text-size">Javascript</h2>
              <h2 className="col-6 col-md-12 border-dark border-bottom border-md-bottom-0 experience-text-size">8 months</h2>
            </div>
          </div>
          <div className="col-12 col-md-3 flex-settings-skills text-center px-0 border-dark border-md-left">
            <div className="row">
              <h2 className="col-6 col-md-12 border-dark border-bottom pb-2 experience-text-size">React</h2>
              <h2 className="col-6 col-md-12 border-dark border-bottom border-md-bottom-0 experience-text-size">6 months</h2>
            </div>
          </div>
        </div>
        <h2 className="text-center display-4 mt-5 experience-header">Basic Skills</h2>
        <div className="row mt-4">
          <div className="col-4 d-flex flex-column text-center px-0 border-dark border-right">
            <h2 className="experience-text-size">CSS</h2>
          </div>
          <div className="col-4 d-flex flex-column text-center px-0">
            <h2 className="experience-text-size">HTML</h2>
          </div>
          <div className="col-4 d-flex flex-column text-center px-0 border-dark border-left">
            <h2 className="experience-text-size">GIT</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;