import "../App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import MainPage from "../src/pages/mainpage"
import ToursPage from "../src/pages/tourspage"
import AboutUs from "../src/pages/aboutuspage"
import "../style/japanmatsuri.css"


const App= () =>  {
  return (
    <div>
    <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/tourspage" element={<ToursPage />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  </Router>
  </div>
  
);
}

export default App
