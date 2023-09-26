import avatar from "../assets/avatar.png";
import "../stylings/Avatar.css";
import "../stylings/Home.css";
import SocialLinks from "./SocialLinks";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Hi, my name is <span className="emphasize-name">Alexander!</span></h1>
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

