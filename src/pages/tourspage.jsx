import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import "../style/japanmatsuri.css"

function ToursPage() {
    return (
        <div>
      <div>
        <NavigationBar />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>


        );
}
export default ToursPage