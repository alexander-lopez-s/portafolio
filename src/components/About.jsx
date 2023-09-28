import { useState, useEffect } from 'react';
import { FcManager, FcMindMap, FcShop } from 'react-icons/fc';
import {
  FaGlobe,
  FaMusic,
  FaCamera,
  FaLanguage,
  FaDumbbell,
  FaHiking,
  FaChess,
} from 'react-icons/fa';
import { GiCook } from 'react-icons/gi';
import '../stylings/About.css';
import image1 from '../assets/about1.jpg';
import image2 from '../assets/about2.png';
import image3 from '../assets/about3.png';
import image4 from '../assets/about4.png';
import image5 from '../assets/about5.png';

const images = [image1, image2, image3, image4, image5];

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
            I am a <span className="custom-style1">relentless traveler</span> with an unwaveringly{' '}
            <span className="custom-style2">positive</span> outlook on life. My{' '}
            <span className="custom-style3">persistency</span> knows no bounds as I take challenges with{' '}
            <span className="custom-style4">enthusiasm</span> and determination.
          </p>
          <p>
            <strong>
              <FcManager />&nbsp;Name:
            </strong>{' '}
            {name}
          </p>
          <p>
            <strong>
              <FcMindMap />&nbsp;Nationality:
            </strong>{' '}
            {nationality}
          </p>
          <p>
            <strong>
              <FcShop />&nbsp;Address:
            </strong>{' '}
            {address}
          </p>
          <div className="about-item">
            <p className="hobbies-text">
              <strong>Hobbies:</strong>
            </p>
            <ul className="hobbies-list">
              <li>
                <FaGlobe />&nbsp;Traveling
              </li>
              <li>
                <FaMusic />&nbsp;Piano
              </li>
              <li>
                <FaCamera />&nbsp;Photography
              </li>
              <li>
                <FaLanguage />&nbsp;Swimming
              </li>
              <li>
                <FaHiking />&nbsp;Hiking
              </li>
              <li>
                <GiCook />&nbsp;Cooking
              </li>
              <li>
                <FaDumbbell />&nbsp;Fitness
              </li>
              <li>
                <FaChess />&nbsp;Chess
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
