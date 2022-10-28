import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false);
  const showNav = () => {
    if(window.scrollY > 100) {
      handleShow(true);
    } else 
    {
      handleShow(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", showNav);
    return () => window.removeEventListener("scroll", showNav);
  }, [])
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">
          <img 
          className='nav-logo'
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
          
          <img
          className='nav_avatar'
          src="https://occ-0-64-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeLKIkjJc_qjRdxnpepqcFpyuDSbmrWuywkKfuNxVbP9SAE7shnZgNdA9RK5ITPR6oyM0ZZJuompU97WfSeORTzc8RsyUYVJo6R2.png?r=72f" alt="avatar" />
        </div>
    </div>
  )
}

export default Nav