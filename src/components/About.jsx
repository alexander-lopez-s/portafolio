import { useState, useEffect } from 'react';
import { FcManager, FcMindMap, FcShop } from 'react-icons/fc';
import '../stylings/About.css';
import image2 from '../assets/about2.png';
import image4 from '../assets/about4.png';

const images = [image2, image4];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const name = "Alexander Lopez";
  const nationality = "Mexican";
  const address = "Lange Molenstraat 3, 8200 Sint-Andries, Belgium";

  return (
    <div className="about-container">
      <div className="about-title">
        <h2>About me</h2>
      </div>
      <div className="about-content">
        <div className="about-gallery">
          <img src={images[currentImageIndex]} alt="my-pictures" className="about-image" />
        </div>
        <div className="description">
          <p className="motto">
            I am a relentless traveler with an unwaveringly positive outlook on life. My persistence knows no bounds as I take challenges with enthusiasm and determination.
          </p>
          <p><strong><FcManager /> Name:</strong> {name}</p>
          <p><strong><FcMindMap /> Nationality:</strong> {nationality}</p>
          <p><strong><FcShop /> Address:</strong> {address}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
