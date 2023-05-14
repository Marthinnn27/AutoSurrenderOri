import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import "../style/japanmatsuri.css"
import Profile1 from "../assets/images/trending/photopic1.png"
import Profile2 from "../assets/images/trending/photopic2.png"

function AboutUsPage() {
    return (
        <div>
      <div>
        <NavigationBar />
      </div>
      <section className="about">
      <div className="main">
        <img src={Profile1}alt="" />
        <div className="abt-text">
          <h1>FrontEnd <span>Developer</span></h1>
          <p>Marthin Virnst Yosua Mangindaan</p>
          <a href="https://github.com/Marthinnn27" className="connectbtn" target="_blank" rel="noreferrer">Connect with me!</a>
        </div>
      </div>
      <div className="main">
        <img src={Profile2} alt="" />
        <div className="abt-text">
          <h1>Backend <span>Developer</span></h1>
          <p>Christian Geraldo Sabanari</p>
          <a href="https://github.com/Marthinnn27" className="connectbtn" target="_blank" rel="noreferrer">Connect with me!</a>
        </div>
      </div>
    </section>
      <div classNameName="footer">
        <Footer />
      </div>
    </div>


        );
}
export default AboutUsPage