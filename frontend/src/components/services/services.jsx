import React from "react";
import "./services.css";
import NavBar from "../utils/navbar";
import ServiceCard from "./servicecard";
import weddingImg from "../../assets/weddingImg.jpg";
import portraitImg from "../../assets/potraitImg.jpg";
import eventImg from "../../assets/eventImg.jpg";
import newbornImg from "../../assets/newbornImg.jpg";
import preweddingImg from "../../assets/preweddingImg.jpg";
import albumsImg from "../../assets/albumsImg.jpg";
import videosImg from "../../assets/videosImg.jpg";

const Services = () => {
  return (
    <div>
      <NavBar />
      <div className="service-header">
        <div className="header-title">
          <h1>Our Services</h1>
          <p>
            Capture your most cherished moments with our professional
            photography services. Whether it's a wedding, family portrait, or
            special event, we ensure stunning, high-quality images.
          </p>
        </div>
      </div>
      <div className="services-grid">
        <ServiceCard
          title="Wedding Photography"
          description="At Kannan Studio, we believe that your wedding day is one of the most important days of your life, filled with moments you'll cherish forever. Our wedding photography services are designed to capture the beauty, emotion, and joy of your special day with stunning, high-quality images."
          imageSrc={weddingImg}
          altText="Wedding Photography"
          details="We offer comprehensive packages that include pre-wedding shoots, full-day coverage, and beautifully edited photo albums. Our experienced photographers use the latest equipment to ensure every moment is captured with precision. We also provide destination wedding photography services, ensuring your special day is documented beautifully, no matter the location."
          images={[weddingImg, portraitImg, eventImg]}
          packages={[
            "Basic Package: Includes 6 hours of coverage and a digital photo album.",
            "Premium Package: Includes 10 hours of coverage, a pre-wedding shoot, and a custom photo album.",
            "Deluxe Package: Includes full-day coverage, a pre-wedding shoot, a post-wedding shoot, and a premium photo album.",
          ]}
        />
        <ServiceCard
          title="Portrait Photography"
          description="Capture timeless portraits with our professional portrait photography services. Whether it's individual, family, or corporate portraits, we ensure you look your best in every shot."
          imageSrc={portraitImg}
          altText="Portrait Photography"
          details="Our portrait sessions are customized to your preferences, with options for indoor studio sessions or outdoor locations. We offer a variety of portrait styles, including classic, contemporary, and artistic. Our team works closely with you to bring out your personality and capture unique expressions that make your portraits stand out."
          images={[portraitImg, weddingImg, newbornImg]}
          packages={[
            "Individual Portrait Package: Includes a one-hour session with 10 edited images.",
            "Family Portrait Package: Includes a two-hour session with 20 edited images.",
            "Corporate Portrait Package: Includes a one-hour session for professional headshots, with 15 edited images.",
          ]}
        />
        <ServiceCard
          title="Event Photography"
          description="From corporate events to private parties, our event photography captures the essence and energy of your special occasions. We focus on candid and posed shots to create a comprehensive collection of memories."
          imageSrc={eventImg}
          altText="Event Photography"
          details="We cover a wide range of events, including corporate conferences, birthday parties, anniversaries, and more. Our photographers are skilled at capturing both the grand moments and the small details that make your event unique. We offer on-site printing and digital galleries to share with your guests."
          images={[eventImg, preweddingImg, albumsImg]}
          packages={[
            "Basic Event Package: Includes 4 hours of coverage and a digital photo gallery.",
            "Standard Event Package: Includes 6 hours of coverage, on-site printing, and a digital photo gallery.",
            "Premium Event Package: Includes full-day coverage, on-site printing, a digital photo gallery, and a custom photo album.",
          ]}
        />
        <ServiceCard
          title="Newborn Photography"
          description="Our newborn and maternity photography services are designed to preserve the precious moments of new life. We offer a safe and comfortable environment for both mother and baby, ensuring that these tender moments are captured beautifully."
          imageSrc={newbornImg}
          altText="Newborn Photography"
          details="Our sessions include props and setups tailored to create charming and memorable newborn portraits. We take extra care to ensure the safety and comfort of your baby, using soft lighting and gentle handling. Our maternity sessions celebrate the beauty of pregnancy, capturing the joy and anticipation of expecting parents."
          images={[newbornImg, videosImg, portraitImg]}
          packages={[
            "Newborn Package: Includes a two-hour session with 15 edited images and props.",
            "Maternity Package: Includes a one-hour session with 10 edited images and props.",
            "Combined Package: Includes a maternity session and a newborn session with 20 edited images from each.",
          ]}
        />
        <ServiceCard
          title="PreWedding Photography"
          description="Our pre-wedding photography services are designed to capture the love and excitement that builds as you approach your wedding day. These sessions provide a wonderful opportunity to celebrate your engagement and create beautiful memories before your big day."
          imageSrc={preweddingImg}
          altText="PreWedding Photography"
          details="We offer creative and romantic pre-wedding photoshoots at various picturesque locations. Our photographers work with you to create a storyboard that reflects your relationship and personalities. From urban settings to natural landscapes, we ensure your pre-wedding photos are as unique as your love story."
          images={[preweddingImg, eventImg, weddingImg]}
          packages={[
            "Basic PreWedding Package: Includes a two-hour session with 20 edited images.",
            "Standard PreWedding Package: Includes a four-hour session at two locations with 40 edited images.",
            "Deluxe PreWedding Package: Includes a full-day session at multiple locations with 60 edited images and a custom photo album.",
          ]}
        />
        <ServiceCard
          title="Customized Albums"
          description="We understand the importance of preserving your cherished memories. Our custom-designed photo albums are a perfect way to keep your favorite moments alive and accessible for years to come."
          imageSrc={albumsImg}
          altText="Customized Albums"
          details="Our albums are crafted with high-quality materials and personalized layouts to suit your style. We offer a variety of sizes, cover options, and page designs. Each album is a unique reflection of your special moments, created with care and attention to detail."
          images={[albumsImg, preweddingImg, portraitImg]}
          packages={[
            "Standard Album: Includes 20 pages with up to 50 images.",
            "Premium Album: Includes 30 pages with up to 75 images and a custom cover.",
            "Deluxe Album: Includes 50 pages with up to 100 images, a custom cover, and a matching box.",
          ]}
        />
        <ServiceCard
          title="Video coverage"
          description="Our video coverage services complement our photography offerings, providing a comprehensive record of your special events. We capture the essence and emotion of your moments, creating a timeless video that you can treasure forever."
          imageSrc={videosImg}
          altText="Video coverage"
          details="We offer professional video editing services to create cinematic highlights and full-length event videos. Our team uses high-quality equipment to ensure clear audio and stunning visuals. Whether it's a wedding, corporate event, or personal celebration, we create videos that tell your story beautifully."
          images={[videosImg, weddingImg, eventImg]}
          packages={[
            "Basic Video Package: Includes 4 hours of coverage and a highlight reel.",
            "Standard Video Package: Includes 6 hours of coverage, a highlight reel, and a full-length video.",
            "Premium Video Package: Includes full-day coverage, a highlight reel, a full-length video, and a custom DVD.",
          ]}
        />
      </div>
    </div>
  );
};

export default Services;
