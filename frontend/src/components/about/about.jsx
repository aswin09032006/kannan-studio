import React from "react";
import "./about.css";
import NavBar from "../utils/navbar";
import weddingImg from "../../assets/weddingImg.jpg";
import portraitImg from "../../assets/potraitImg.jpg";
import eventImg from "../../assets/eventImg.jpg";
import newbornImg from "../../assets/newbornImg.jpg";
import preweddingImg from "../../assets/preweddingImg.jpg";
import albumsImg from "../../assets/albumsImg.jpg";
import videosImg from "../../assets/videosImg.jpg";
import DetailsContainer from "./details";

const About = () => {
  const images = [
    { src: weddingImg, alt: "Wedding Photography", className: "large" },
    { src: portraitImg, alt: "Portrait Photography" },
    { src: eventImg, alt: "Event Photography" },
    { src: newbornImg, alt: "Newborn Photography" },
    { src: preweddingImg, alt: "Prewedding Photography" },
    { src: albumsImg, alt: "Photo Albums" },
    { src: videosImg, alt: "Video Services" },
  ];

  return (
    <div className="about-container">
      <NavBar />

      <h1>About us</h1>
      <div className="details">
        <DetailsContainer
          title="Our History"
          description="Established in the era of film photography, Kannan Studio has witnessed the evolution of the craft, adapting and embracing every technological advancement along the way. From traditional film to the digital age, our commitment to excellence remains unwavering."
        />
        <DetailsContainer
          title="Customer Satisfaction"
          description="Customer satisfaction is at the heart of everything we do. We believe in forging meaningful connections with our clients, listening to their vision, and exceeding their expectations. Your happiness is our ultimate goal, and we go above and beyond to ensure that every photo reflects your unique story."
        />
        <DetailsContainer
          title="Services"
          description="At Kannan Studio, we offer a range of photography services, including portrait sessions, event coverage, commercial photography, and more. Whether you're celebrating a special occasion or capturing professional images for your business, we tailor our approach to meet your specific needs."
        />
        <DetailsContainer
          title="Our Studio"
          description="Our studio is equipped with state-of-the-art equipment and technology to deliver high-quality results. From lighting to post-production editing, we pay meticulous attention to every detail to ensure that your photos are nothing short of spectacular."
        />
        <DetailsContainer
          title="Conclusion"
          description="Thank you for considering Kannan Studio to capture your special moments. We look forward to being a part of your journey and turning your dreams into timeless photographs."
        />
      </div>
      <div className="grid-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`grid-item ${image.className || ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
