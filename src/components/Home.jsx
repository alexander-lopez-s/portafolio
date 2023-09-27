import avatar from "../assets/avatar.png";
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
      <h1>Hi, I am <span className="emphasize-name">Chris!</span></h1>
      <img src={avatar} alt="my-avatar-picture" className="avatar" />
      <p>
        I am a <span className="emphasize-career">frontend web developer</span> passionate about crafting clean,
        pixel-perfect code to enhance user experiences through captivating web
        animations, creating engaging and interactive websites.
      </p>
      <SocialLinks />
    </div>
  );
};


export default Home;

