import React, { useEffect, useState, useRef } from 'react';
import $ from "jquery";

const Nav = () => {
  const [navbarMD, setNavbarMD] = useState(true)
  const navbarMDElement = useRef(null)

  const changeNav = () => {
    const width = window.innerWidth

    if (width <= 798) {
      setNavbarMD(false)
    } else {
      setNavbarMD(true)
    }

  }

  const moveUp = () => {
    console.log(3)
    window.scrollTo(window.scrollX, window.scrollY - 100);
  } 

  useEffect(() => {
    if (navbarMD) {
      navbarMDElement.current.style.height = "70px"
    }

    changeNav()
    window.addEventListener('resize', changeNav)
    window.addEventListener('hashchange', moveUp)
  }, [navbarMD])

  console.log(navbarMD)

  if (navbarMD) {
    return (
      <ul className="navbar navbar-md row font-sans" ref={navbarMDElement}>
        <li className="col-3 border-right"><a href="#header-page">Home</a></li>
        <li className="col-3 border-right"><a href="#about-site">About</a></li>
        <li className="col-3"><a>My projects</a></li>
        <li className="col-3 border-left"><a>Contact</a></li>
      </ul>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        {/* <a className="navbar-brand font-sans" href="#">Navbar</a> */}
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
            <a 
              data-toggle="collapse" 
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation" 
              className="nav-link" href="#"><h2 className="font-sans">My Projects</h2></a>
            </li>
            <li className="nav-item active">
            <a 
              data-toggle="collapse" 
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation" 
              className="nav-link"  
              href="#"><h2 className="font-sans">Contact</h2></a>
            </li>
          </ul>
        </div>
      </nav>
    )    
  }
};

export default Nav;