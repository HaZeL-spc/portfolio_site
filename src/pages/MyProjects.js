import React, { useEffect } from 'react';

const MyProjects = () => {

  const addIntersectionObserver = () => {
    const projectCardUnder = document.querySelectorAll('.project-card-under')
    // const navbar = document.querySelector('.navbar')

    const headerPageOptions = {
      threshold: 1,
    }

    const projectCardObserver = new IntersectionObserver(
      function(
        entries,
        projectCardObserver
      ) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return
          } else {
            entry.target.style.minHeight = "0px";
            entry.target.nextSibling.classList.add("appear")
            projectCardObserver.unobserve(entry.target)
            setTimeout(() => {
              entry.target.nextSibling.nextSibling.classList.add("appear")
            }, 1500)
          }
        })
      }, headerPageOptions)

      projectCardUnder.forEach(card => {
        projectCardObserver.observe(card)
      })
  }

  useEffect(() => {
    addIntersectionObserver()
  }, [])


  return (
    <div id="my-projects-container" className="my-projects-container">
      <div className="container">
        {/* <h2 className="section-header">My Projects</h2> */}
        <div className="row">
          <div className="col-12 col-md-6 d-flex order-2 order-md-1 flex-column project-card-div mt-5">
            <div className="project-card-under"></div>
            <div className="project-card from-left"></div>
            <div className="overlay">
              <div className="text-project">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div> 
          </div>

          <div className="col-12 col-md-6 order-1 order-md-2 my-auto mr-auto pt-5">
            <h2 className="text-center font-sans name-project">Project 1</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 my-5 my-auto mr-auto pt-5">
            <h2 className="text-center font-sans name-project">Project 2</h2>
          </div>
          
          <div className="col-12 col-md-6 d-flex flex-column project-card-div my-5">
            <div className="project-card-under"></div>
            <div className="project-card from-right"></div>
            <div className="overlay">
              <div className="text-project">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;