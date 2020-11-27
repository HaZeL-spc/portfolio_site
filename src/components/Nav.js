import React, { useEffect } from 'react';

const Nav = () => {
  
  useEffect(() => {
    const nav = document.querySelector('.navbar')
    nav.style.height = "70px"
  }, [])

  return (
    <ul className="navbar row font-sans">
      <li className="col-3 border-right">Home</li>
      <li className="col-3 border-right">About</li>
      <li className="col-3">My projects</li>
      <li className="col-3 border-left">Contact</li>
    </ul>
  );
};

export default Nav;