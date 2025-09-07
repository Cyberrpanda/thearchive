import { Link } from "react-router-dom";
import Person from "./person";
import Phone from "./phone";
import Mail from "./mail";
import Lock from "./lock";

export default function Signup(){
    return(
        <section id="signup" className="signup-section">
            <div className="signup-section__content1">
              <p>Join our community <span>and learn with us</span></p>
              
              <div className="subtext">
                <span>Already part of the community ? </span><Link to="/signin" className="btn--green2">Login</Link>
              </div>
            </div>

            <div className="signup-section__content2">
              <div className="signup-section__content2--header">
                <span className="h1">Hello!</span>
                <span className="h2">Let's Get Started</span>
              </div>
              
              <form className="form" action="">
                <div className="formfree">
                  <div className="input-wrapper">
                    <Person className="input-icon"/>
                    <input className="" type="text" placeholder="Firstname" />
                  </div>
                  <div className="input-wrapper">
                    <Person className="input-icon"/>
                    <input className="" type="text" placeholder="Lastname" />
                  </div> 
                </div>

                <div className="input-wrapper">
                  <Mail className="input-icon"/>
                  <input className="formblk" type="text" placeholder="Email Address" />
                </div>
                <div className="input-wrapper">
                  <Phone className="input-icon"/>
                  <input className="formblk" type="text" placeholder="Phone Number" />
                </div>
                <div className="input-wrapper">
                  <Lock className="input-icon"/>
                  <input className="formblk" type="password" placeholder="Password" />
                </div>
                  <button className="btn--green1" type="submit">Sign Up</button> 
              </form>
            </div>
        </section>
    )
}