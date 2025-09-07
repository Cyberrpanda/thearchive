import { useEffect } from "react";
import home1200 from "../assets/1200(2).webp";
import home768 from "../assets/768(2).webp";
import home480 from "../assets/480(2).webp";


export default function Home(){
   
     useEffect(() => {
        const text = document.querySelector(".home-section__text");
        const image = document.querySelector(".home-section__image");

        requestAnimationFrame(() => {
            text.classList.add("animate-text");
            image.classList.add("animate-image");
        });
    }, []);

    return (
        <section id="home" className="home-section">
            <div className="home-section__text">
                <h1>
                    Welcome to <span> </span>
                  <span className="home-section__text__sub">The Archive</span> 
                </h1>
                    your gateway to all things literal...
            </div>

            <div className="home-section__image">
                 <figure className="biopic">
                     <picture>
                         <source media="(max-width: 480px)" srcSet={home480} type="image/webp" />
                         <source media="(max-width: 768px)" srcSet={home768} type="image/webp" />
                         <source srcSet={home1200} type="image/webp" />
                         <img className="cmembers" src={home1200} loading="lazy" alt="h1" />
                     </picture>
                 </figure>
            </div>

        </section>
    )
}