import { Link } from "react-router-dom";
import Mail from "./mail";
import Lock from "./lock";


export default function Signin(){
    return(
        <section id="signin" className="signin-section">
            <div className="signin-section__content1">
              <p>Join our community <span>and learn with us</span></p>
              
              <div className="subtext">
                <span>Don't have an account ? </span><Link to="/signup" className="btn--green2">Register</Link>
              </div>
            </div>

            <div className="signin-section__content2">
                <div className="signin-section__content2--header">
                    <span className="h1">Welcome Back!</span>
                    <span className="h2">Let's dive in</span>
                </div>
                
                <form className="form" action="">
                    <div className="input-wrapper">
                        <Mail className="input-icon"/>
                        <input className="formblk" type="text" placeholder="Email Address" />
                    </div>

                    <div className="input-wrapper">
                        <Lock className="input-icon"/>
                        <input className="formblk" type="password" placeholder="Password" />
                    </div>
                    <button className="btn--green1" type="submit">Sign In</button>
                </form>
            </div>
        </section>
    )
}