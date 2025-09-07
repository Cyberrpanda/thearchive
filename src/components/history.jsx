import { useState, useEffect, useRef } from "react";
import facilities1200 from "../assets/1200.webp";
import facilities768 from "../assets/768.webp";
import facilities480 from "../assets/480.webp";

export default function History() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null); // Create a ref to attach to the section

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
    <section id="history" className="history-section" ref={sectionRef}>
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              provident. Dolore iste velit deserunt nisi inventore cumque, sit
              minima non quo. Quae ducimus porro sed odit eum facere minima
              blanditiis.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              provident. Dolore iste velit deserunt nisi inventore cumque, sit
              minima non quo. Quae ducimus porro sed odit eum facere minima
              blanditiis.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              provident. Dolore iste velit deserunt nisi inventore cumque, sit
              minima non quo. Quae ducimus porro sed odit eum facere minima
              blanditiis.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              provident. Dolore iste velit deserunt nisi inventore cumque, sit
              minima non quo. Quae ducimus porro sed odit eum facere minima
              blanditiis.
            </p>
            <button className="modal-close-btn" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="history-section__content">
        <div>
          <h1 className="card-header">Who are we ?</h1>
        </div>

        <div className="history-section__container">
          <div className="content1">
            <div className="history-section__image">
              <figure className="biopic">
                <picture>
                  <source
                    media="(max-width: 480px)"
                    srcSet={facilities480}
                    type="image/webp"
                  />
                  <source
                    media="(max-width: 768px)"
                    srcSet={facilities768}
                    type="image/webp"
                  />
                  <source srcSet={facilities1200} type="image/webp" />
                  <img
                    className="cmembers"
                    src={facilities1200}
                    loading="lazy"
                    alt="h1"
                  />
                </picture>
              </figure>
            </div>
          </div>

          <div className="content2 contxt">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipi sic ing elit.
              Eligendi
            </p>

            <p>
              dolor dignissimos labore, similique vel! Delectus aperiam dolorum
              consequat
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              ab optio
            </p>

            <p>
              nulla, cum odit quae ex totam iusto vitae libero assumenda
              tenetur dolore
            </p>

            <p>
              culpa soluta earum dolorem vitae, beatae! Blanditiis, nobis ipsa?
              quasi
            </p>

            <button onClick={toggleModal} className=" btn--history">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}