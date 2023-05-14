import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import "../style/japanmatsuri.css"
import Search from "../components/Search"
import Introtrs from "../components/introtrs"


function ToursPage() {
    return (
        <div>
      <div className="BGtrs">
          <NavigationBar />
        
          <Introtrs />
        <Search />
      </div>
    </div>


        );
}
export default ToursPage