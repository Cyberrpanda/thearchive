import { useEffect } from "react";
import card1_1200 from "../assets/1200(3).webp";
import card1_768 from "../assets/768(3).webp";
import card1_480 from "../assets/480(3).webp";
import card2_1200 from "../assets/1200(4).webp";
import card2_768 from "../assets/768(4).webp";
import card2_480 from "../assets/480(4).webp";
import card3_1200 from "../assets/1200(5).webp";
import card3_768 from "../assets/768(5).webp";
import card3_480 from "../assets/480(5).webp";

export default function Facilities(){

    return(
        <section id="facilities" className="facilities-section">
          <div className="card-container">
              <div className="cards card1">
                  <figure className="biopic">
                     <picture>
                         <source media="(max-width: 480px)" srcSet={card1_480} type="image/webp" />
                         <source media="(max-width: 768px)" srcSet={card1_768} type="image/webp" />
                         <source srcSet={card1_1200} type="image/webp" />
                         <img className="cmembers" src={card1_1200} loading="lazy" alt="h1" />
                     </picture>
                 </figure>

                 <div className="img-caption">
                    <span className="card-header">
                      Immersive Catalogue 
                    </span>  
                    <span className="img-caption__subtext">
                     Read more&#8594;
                    </span>
                 </div>
              </div>


              <div className="cards card2">
                    <figure className="biopic">
                     <picture>
                         <source media="(max-width: 480px)" srcSet={card2_480} type="image/webp" />
                         <source media="(max-width: 768px)" srcSet={card2_768} type="image/webp" />
                         <source srcSet={card2_1200} type="image/webp" />
                         <img className="cmembers" src={card2_1200} loading="lazy" alt="h1" />
                     </picture>
                 </figure>

                 <div className="img-caption">
                    <span className="card-header">
                      Modern Facilities
                    </span>
                    <span className="img-caption__subtext">
                     Read more&#8594;
                    </span>
                 </div>
              </div>


              <div className="cards card3">
                    <figure className="biopic">
                     <picture>
                         <source media="(max-width: 480px)" srcSet={card3_480} type="image/webp" />
                         <source media="(max-width: 768px)" srcSet={card3_768} type="image/webp" />
                         <source srcSet={card3_1200} type="image/webp" />
                         <img className="cmembers" src={card3_1200} loading="lazy" alt="h1" />
                     </picture>
                 </figure>

                 <div className="img-caption">
                    <span className="card-header">
                      Dedicated Staff 
                    </span>
                    <span className="img-caption__subtext">
                     Read more&#8594;
                    </span>
                 </div>
              </div>
          </div>
            


        </section>
    )
}