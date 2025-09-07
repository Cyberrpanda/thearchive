import { useEffect, useRef } from "react";
import Book from "./book";

export default function Services() {
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
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="services-section__content">
        <div>
          <h1 className="card-header">Our Services</h1>
        </div>

        <div className="services-section__group1">
          <div className="services-section__p1">
            <Book className="svg" />
            <div>
              <h3> Book Purchase</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
              dolor sequi earum corporis provident laborum reiciendis debitis
              voluptatem quis minus
            </div>
          </div>

          <div className="services-section__p2">
            <Book className="svg" />
            <div>
              <h3>Book Lending</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                hic eligendi, facilis ipsam incidunt ut doloremque similique,
                neque nesciunt modi rep
              </p>
            </div>
          </div>
        </div>

        <div className="services-section__group2">
          <div className="services-section__p3">
            <Book className="svg" />
            <div>
              <h3>Research Consultations</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                hic eligendi, facilis ipsam incidunt ut doloremque similique,
                neque nesciunt modi rep
              </p>
            </div>
          </div>

          <div className="services-section__p4">
            <Book className="svg" />
            <div>
              <h3>Driver Training</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                hic eligendi, facilis ipsam incidunt ut doloremque similique,
                neque nesciunt modi rep
              </p>
            </div>
          </div>
        </div>

        <div className="services-section__group3">
          <div className="services-section__p5">
            <Book className="svg" />
            <div>
              <h3> Free Wi-Fi & Internet Access</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                hic eligendi, facilis ipsam incidunt ut doloremque similique,
                neque nesciunt modi rep
              </p>
            </div>
          </div>

          <div className="services-section__p6">
            <Book className="svg" />
            <div>
              <h3>Ask a Librarian</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                hic eligendi, facilis ipsam incidunt ut doloremque similique,
                neque nesciunt modi rep
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}