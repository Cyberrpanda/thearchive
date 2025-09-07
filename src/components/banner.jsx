import { useEffect, useRef } from "react";
import Bookopen from "./bookopen";
import Desktop from "./desktop";
import People from "./people";

export default function Banner() {
  const sectionRef = useRef(null); // Create a ref to attach to the section

  // This useEffect handles the animation trigger on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // If the section is intersecting (visible), add the 'is-visible' class
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // Stop observing after it's visible
        }
      },
      {
        root: null, // observes intersections relative to the viewport
        threshold: 0.1, // trigger when 10% of the element is visible
      }
    );

    // Start observing the section element
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    // Attach the ref to your section element
    <section id="banner" className="banner-section" ref={sectionRef}>
      <div className="banner-section__content">
        <div className="banner-section__content__c1">
          <h1>
            Expand your <span> </span>
            <span className="banner-section__text__sub">
              knowledge base with us
            </span>
          </h1>
          <span className="banner-section__text__sub2">
            Our Dedication to educate the world got us here
          </span>
        </div>

        <div className="banner-section__content__c2">
          <div className="svg-container">
            <People className="svg-group" />
            <span>
              500+<span> </span>
              <span className="svg-container__text">Current Users</span>
            </span>
          </div>

          <div className="svg-container">
            <Desktop className="svg-group" />
            <span>
              150<span> </span>
              <span className="svg-container__text">Working Systems</span>
            </span>
          </div>

          <div className="svg-container">
            <Bookopen className="svg-group" />
            <span>
              30,000+<span> </span>
              <span className="svg-container__text">Catalogue </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}