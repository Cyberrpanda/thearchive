import { useRef, useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { FaBars, FaTimes } from "react-icons/fa";



export default function Navbar() {
    const navRef = useRef(null);
    const [navIsOpen, setNavIsOpen] = useState(false);
  
    const showNavbar = () => {
      setNavIsOpen(!navIsOpen);
    };
  
    const closeNavbar = () => {
      setNavIsOpen(false);
    };
  
    return (
      <>
        <header className="head">
          <nav ref={navRef} className={`navbar ${navIsOpen ? "open" : ""}`}>
            <Link to="/">
              <div className="head__logo-box">
                <img src="/assets/logo-removebg-preview.png" alt="" className="head__logo"/>
              </div>
            </Link>
            

            <ul>
              <li>
                <Link smooth to="/#history">About Us</Link>
              </li>
              <li>
                <Link smooth to="/#services">Services</Link>
              </li>
              <li>
                <Link smooth to="/#facilities">Facilities</Link>
              </li>
              <li>
                <Link smooth to="/#footer">Contact Us</Link>
              </li>
            </ul>
          </nav>
         
          <Link to="/signup" className="btn--green">
           Login / Signup &#8594;
          </Link>

          <button className="nav-btn" onClick={showNavbar}>
            {navIsOpen ? <FaTimes /> : <FaBars />}
          </button>
        </header>
      </>
    );
  }
  
