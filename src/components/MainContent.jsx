import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faInstagram, 
  faWhatsapp,
  faYoutube,
  faLinkedin,
  faPinterest,
  faGoogle 
} from '@fortawesome/free-brands-svg-icons';
import { SiGooglemybusiness } from "react-icons/si";
import Countdown from './Countdown';
import '../styles/MainContent.css';

import bgImage from '../assets/keraladrivescomingsoon.jpg';

const MainContent = ({ visible }) => {
  const [email, setEmail] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return re.test(email.toLowerCase());
  };

  const handleNotifyMe = () => {
    if (validateEmail(email)) {
      alert('Thank you! We will notify you when we launch.');
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className={`main-content ${visible ? 'visible' : ''} min-h-screen relative flex flex-col items-center justify-center p-4 md:p-8`}>
      <div className="container">
        <h1 className="head-text">KERALA DRIVES</h1>
        <p className="tagline">Discover the beauty of God's own country with us</p>
        
        <Countdown />
        <p className="release-text">Launching on March 31, 2024</p>
        

        <div className="email-form">
          {/* <input
            type="email"
            className="email-input"
            placeholder="Enter your email for updates"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> */}
          <a href="https://enquiry.keraladrives.com/" target="_blank" rel="noopener noreferrer" className="submit-btn">
            Let's Connect
          </a>
        </div>

        <div className="social-links">
          <a href="https://api.whatsapp.com/send/?phone=%2B918086407979&text=Hello%2C+I+am+interested+to+know+more+about+your+service.&type=phone_number&app_absent=0" target="_blank" aria-label="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://g.co/kgs/Rhuop1m" target="_blank" aria-label="Google My Business">
            <SiGooglemybusiness />
          </a>
          <a href="https://www.facebook.com/keraladrivestourstravel/" target="_blank" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/kerala_drives/" target="_blank" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.youtube.com/channel/UC3tmfmBZf5Ufqo2JSEwj6BA?sub_confirmation=1" target="_blank" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://www.pinterest.com/keraladrives195/" target="_blank" aria-label="Pinterest">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a href="https://www.linkedin.com/company/kerala-drives/" target="_blank" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainContent;