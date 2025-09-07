import Slider from "react-slick";
import team1 from "../assets/person1.jpg";
import team1Webp480 from "../assets/person1-480.webp";
import team1Webp768 from "../assets/person1-768.webp";
import team1Webp1200 from "../assets/person1-1200.webp";
import team2 from "../assets/person2.jpg";
import team2Webp480 from "../assets/person2-480.webp";
import team2Webp768 from "../assets/person2-768.webp";
import team2Webp1200 from "../assets/person2-1200.webp";
import team3 from "../assets/person3.jpg";
import team3Webp480 from "../assets/person3-480.webp";
import team3Webp768 from "../assets/person3-768.webp";
import team3Webp1200 from "../assets/person3-1200.webp";
import team4 from "../assets/person4.jpg";
import team4Webp480 from "../assets/person4-480.webp";
import team4Webp768 from "../assets/person4-768.webp";
import team4Webp1200 from "../assets/person4-1200.webp";

export default function Carousel() {
  const cards = [
    {
      img: { webp480: team1Webp480, webp768: team1Webp768, webp1200: team1Webp1200, fallback: team1 },
      title: "Jane Andrews",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem hic eligendi, facilis ipsam incidunt ut doloremque similique, neque nesciunt modi rep"
    },
    {
      img: { webp480: team2Webp480, webp768: team2Webp768, webp1200: team2Webp1200, fallback: team2 },
      title: "Matt Jackson",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem hic eligendi, facilis ipsam incidunt ut doloremque similique, neque nesciunt modi rep"
    },
    {
      img: { webp480: team3Webp480, webp768: team3Webp768, webp1200: team3Webp1200, fallback: team3 },
      title: "Olivia Lauren",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem hic eligendi, facilis ipsam incidunt ut doloremque similique, neque nesciunt modi rep"
    },
    {
      img: { webp480: team4Webp480, webp768: team4Webp768, webp1200: team4Webp1200, fallback: team4 },
      title: "David James",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem hic eligendi, facilis ipsam incidunt ut doloremque similique, neque nesciunt modi rep"
    }
  ];

  const settings = {
    dots: false, // No pagination dots
    infinite: true, // Enable infinite loop for smooth auto-scroll
    speed: 500,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 4000, // 4 seconds between slides
    pauseOnHover: true, // Pause when user hovers
    pauseOnFocus: true, // Pause when carousel is focused (accessibility)
    pauseOnDotsHover: false, // Since we don't have dots
    slidesToShow: 2.3, // Show 2 full cards + slight preview of the next
    slidesToScroll: 1, // Move one card at a time
    centerMode: false,
    centerPadding: '0px',
    arrows: false, // No arrows at all
    lazyLoad: "ondemand",
    variableWidth: false,
    cssEase: 'ease-in-out', // Smooth animation easing
    useTransform: true, // Use CSS transforms for better performance
    responsive: [
      {
        breakpoint: 768,
        settings: { 
          slidesToShow: 1.2, // Show 1 card + preview on tablet
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
          autoplay: true,
          autoplaySpeed: 4000,
          pauseOnHover: true,
          pauseOnFocus: true,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
          autoplay: true,
          autoplaySpeed: 4000,
          pauseOnHover: true,
          pauseOnFocus: true,
          infinite: true
        }
      }
    ]
  };

  return (
    <section className="carousel-section">
      <div className="card-header">
        <h1>Don't just listen to us </h1>
        <span>Listen to our community</span>
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="carousel-slide"> {/* Changed class name */}
              <div className="carousel-card">
                <figure className="biopic">
                  <picture>
                    <source media="(max-width: 480px)" srcSet={card.img.webp480} type="image/webp" />
                    <source media="(max-width: 768px)" srcSet={card.img.webp768} type="image/webp" />
                    <source srcSet={card.img.webp1200} type="image/webp" />
                    <img className="cmembers" src={card.img.fallback} loading="lazy" alt={card.title} />
                  </picture>
                </figure>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}