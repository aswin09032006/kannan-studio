import React from "react";
import Home from "./components/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./components/services/services";
import Gallery from "./components/gallery/gallery";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import ServiceDetails from "./components/services/servicedetails";
import GalleryImages from "./components/gallery/galleryimages";
import ReserveSpot from "./components/home/reservespot";
import AdminLogin from "./components/loginsignup/signin";
import AdminPage from "./components/admin/adminpage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reserve-your-spot" element={<ReserveSpot />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/images" element={<GalleryImages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
