import React from "react";
import "./gallery.css";
import NavBar from "../utils/navbar";

const Gallery = () => {
  return (
    <div className="body">
      <NavBar />
      <div className="gallery-header">
        <div className="gallery">
          <h3>Gallery</h3>
        </div>
      </div>
      <div className="Quotes">
        <p>
          A photograph can be an instant of life captured for eternity that will
          never cease looking back at you.
        </p>
      </div>
      <div className="View-btn">
        <p id="View-btn">
          <a href="/gallery/images" className="view-link">
            View all Photos
          </a>
        </p>
      </div>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/20138185/pexels-photo-20138185/free-photo-of-man-and-woman-holding-a-bouquet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 1"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/933118/pexels-photo-933118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 2"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/2892205/pexels-photo-2892205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 3"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/2179205/pexels-photo-2179205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 4"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/6625974/pexels-photo-6625974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 5"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 6"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 7"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/890567/pexels-photo-890567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 8"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/765432/pexels-photo-765432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 9"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/2892187/pexels-photo-2892187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 10"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/456789/pexels-photo-456789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 11"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/678901/pexels-photo-678901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 12"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/234567/pexels-photo-234567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 13"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/345678/pexels-photo-345678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 14"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/567890/pexels-photo-567890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 15"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/678902/pexels-photo-678902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 16"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/789012/pexels-photo-789012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 17"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/890123/pexels-photo-890123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 18"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/901234/pexels-photo-901234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 19"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/345679/pexels-photo-345679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
