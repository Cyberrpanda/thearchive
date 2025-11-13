import { HashLink as Link } from 'react-router-hash-link';
import Twitter from './twitter';
import Youtube from './youtube';
import Facebook from './facebook';
import Instagram from './instagram';
import Message from './message';

export default function Footer(){
    return(
    <>
        <section id="footer" className="footer-section">
                   <footer className="footer">
                     <nav> 
                      <div className="footer-logo_section">
                        <Link to="/">
                           <div className="footer__logo-box">
                           <img src="/assets/logo-removebg-preview.png" alt="" className="footer__logo"/>  
                         </div>
                       </Link>
                       <p>
                            Copyright &copy; 2025 thearchive.com <span>  </span>
                            <span> All rights reserved</span>
                       </p>

                       <div className='footer_social'>
                          <a href="https://www.facebook.com/">
                            <Facebook className="footer_svg"/>
                          </a>
                          <a href="https://www.instagram.com/">
                            <Instagram className="footer_svg"/>
                          </a>
                          <a href="https://www.youtube.com/">
                            <Youtube className="footer_svg"/>
                          </a>
                          <a href="https://www.twitter.com/">
                            <Twitter className="footer_svg"/>
                          </a>
                       </div>
                      </div>
                       
                      <div className='footer-csection'>
                       <ul>
                        <h1>Company</h1>
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
                           <Link smooth to="/#footer">Testimonials</Link>
                         </li>
                         <li>
                           <Link smooth to="/#footer">Contact Us</Link>
                         </li>
                       </ul>

                       <ul>
                        <h1>Support</h1>
                         <li>
                           <Link smooth to="/#history">Help Center</Link>
                         </li>
                         <li>
                           <Link smooth to="/#services">Terms of Service</Link>
                         </li>
                         <li>
                           <Link smooth to="/#facilities">Legal</Link>
                         </li>
                         <li>
                           <Link smooth to="/#footer">Privacy Policy</Link>
                         </li>
                         <li>
                           <Link smooth to="/#footer">Status</Link>
                         </li>
                       </ul>

                       <div className='footer_search'>
                         <h1>Stay up to Date</h1>
                         <div className='footer_input-wrapper'>
                           <input className='footer_searchbar' type="search" placeholder='Your Email Address'/> 
                           <Message className="footer_message"/>
                         </div>
                         
                         
                       </div>
                     </div>  
                     </nav>
                     </footer>
        </section>

        
      </>
    )
}