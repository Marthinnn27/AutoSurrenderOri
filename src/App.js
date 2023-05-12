import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import AboutUs from "./components/AboutUs"

import "./style/japanmatsuri.css"

function App() {
  return (
    <div>
      <div className="NavigationBar">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="aboutus">
        <AboutUs />
      </div>
    </div>
  )
}

export default App
