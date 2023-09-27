import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import "../stylings/SocialIcons.css";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="social-icon linkedin" />
      </a>
      <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
        <FaGithub className="social-icon github" />
      </a>
      <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="social-icon whatsapp" />
      </a>
      <a href="https://instagram" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-icon instagram" />
      </a>
    </div>
  );
};

export default SocialLinks;
