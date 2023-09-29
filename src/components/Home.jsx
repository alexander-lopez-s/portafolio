import avatar from "../assets/rounded-avatar.png";
import "../stylings/Avatar.css";
import "../stylings/Home.css";
import SocialLinks from "./SocialLinks";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {

    const h1Element = document.querySelector('.home-container h1');
    h1Element.classList.add('animate-text');
  }, []);

  return (
    <div className="home-container">
      <h1>Hi, I am <span className="emphasize-name">Cris!</span></h1>
      <div className="avatar-text-wrapper">
      <img src={avatar} alt="my-avatar-picture" className="avatar" />
      <p>
        I am a <span className="emphasize-career"> Junior Frontend Web Developer</span> passionate about crafting clean,
        pixel-perfect code to enhance user experiences through captivating web
        animations, creating engaging and interactive websites.
      </p>
      </div>
      <SocialLinks />
    </div>
  );
};


export default Home;

