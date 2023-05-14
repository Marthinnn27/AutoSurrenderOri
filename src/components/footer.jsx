import React from "react";
import facebook from "../assets/images/icon/fb.png"
import whatsapp from "../assets/images/icon/wa.png"
import instagram from "../assets/images/icon/Instagram.png"
import japanmatsuri from "../assets/images/icon/Vector.png"


const Footer = () => {
    return (

        <section className="footer">
      <div className="foot">
        <div className="footer-content">
          <div className="footlinks">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="./">Home</a></li>
              <li><a href="./aboutus">About Us</a></li>
              <li><a href="./tourspage">Tours</a></li>
            </ul>
          </div>
          <div className="japanmtsuri">
            <img src={japanmatsuri} alt="Japan Mtsuri" />
          </div>
          <div className="footlinks">
            <h4>Connect</h4>
            <div className="social">
              <a href="https://www.facebook.com/Kirigaya.Kazuto270104" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook Icon" />
              </a>
              <a href="https://www.instagram.com/josuamrthn_27/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram Icon" />
              </a>
              <a href="https://wa.me/6285244858168" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="Whatsapp Icon" />
              </a>
            </div>
            <div className="social">
              <a href="https://www.facebook.com/mohd.rahil.blogger" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook Icon" />
              </a>
              <a href="https://www.instagram.com/mohdrahil101" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram Icon" />
              </a>
              <a href="https://www.linkedin.com/in/mohdrahil101" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="Whatsapp Icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="end">
        <p>
          Copyright ©UAS WEBPROGRAMMING 2023.<br />
          Website developed by: Marthin Mangindaan And Christian Sabanari
        </p>
      </div>
    </section>
  );
};
      
  
  export default Footer
