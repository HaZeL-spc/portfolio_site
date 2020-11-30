import React, { useEffect, useState, useRef } from 'react';
import $ from "jquery";

const Nav = () => {
  const [navbarMD, setNavbarMD] = useState(true)
  const navbarMDElement = useRef(null)

  const changeNav = () => {
    const width = window.innerWidth

    if (width <= 880) {
      setNavbarMD(false)
    } else {
      setNavbarMD(true)
    }
  }

  // const changePosition = (e) => {
    // $(this).dblclick()
    // window.setTimeout(() => {
    //   moveUp()
    // }, 0)
  // }

  const addIntersectionObserver = () => {
    const headerPage = document.querySelector('.header-page')
    const navbar = document.querySelector('.navbar')

    const headerPageOptions = {
      threshold: 0,
      rootMargin: "-100px 0px 0px 0px"
    }

    const headerPageObserver = new IntersectionObserver(
      function(
        entries,
        headerPageObserver
      ) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            navbar.classList.add("change-color")
          } else {
            navbar.classList.remove("change-color")
          }
        })
      }, headerPageOptions)

    headerPageObserver.observe(headerPage)
  }

  useEffect(() => {
    if (navbarMD) {
      navbarMDElement.current.style.height = "70px"
    }

    // $("a-nav-link").click(changePosition)
    changeNav()
    addIntersectionObserver()
    window.addEventListener('resize', changeNav)
    // window.addEventListener('hashchange', moveUp)
  }, [navbarMD])

  console.log(navbarMD)

  if (navbarMD) {
    return (
      <ul className="navbar navbar-md row font-sans" ref={navbarMDElement}>
        <li className="col-3 border-right"><a href="#header-page">Home</a></li>
        <li className="col-3 border-right"><a href="#about-header">About</a></li>
        <li className="col-3"><a href="#my-projects-container">My projects</a></li>
        <li className="col-3 border-left"><a href="#contact-site">Contact</a></li>
      </ul>
    );
  } else {
    return (
      <nav className="navbar navbar-normal navbar-expand-lg navbar-light bg-white">
        <div className="w-100">
          <button style={{float:"right"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active border-bottom">
              <h2 className="font-sans">
                <div data-toggle="collapse" 
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation" 
                  className="nav-link" ><a href="#header-page">Menu</a> 
                </div>
              </h2>
            </li>
            <li className="nav-item active border-bottom">
              <h2 className="font-sans">
                <div data-toggle="collapse" 
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation" 
                  className="nav-link" ><a href="#about-site">About</a>
                </div>
              </h2>
            </li>
            <li className="nav-item active border-bottom">
              <h2 className="font-sans">
                <div data-toggle="collapse" 
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation" 
                  className="nav-link" ><a href="#my-projects-container">My projects</a>
                </div>
              </h2>
            </li>
            <li className="nav-item active">
              <h2 className="font-sans">
                <div data-toggle="collapse" 
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation" 
                  className="nav-link" ><a href="#contact-site">Contact</a>
                </div>
              </h2>
            </li>
          </ul>
        </div>
      </nav>
    )    
  }
};

export default Nav;