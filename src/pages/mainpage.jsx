import React from "react"
import NavigationBar from "../components/NavigationBar"
import Intro from "../components/Intro"
import Trending from "../components/Trending"
import Footer from "../components/footer"
import "../style/japanmatsuri.css"

function MainPage() {
    return (
        <div>
        <div className="NavigationBar">
          <NavigationBar />
        
          <Intro />
        </div>
  
        <div className="trending">
          <Trending />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>

        );
}
export default MainPage