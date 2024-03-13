import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SuperHero from "./components/Superhero";
import "./style/landingPage.css";

export default function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end intro section */}

      {/* trending section */}
      <div className="trending">
          <Trending/>
          <SuperHero/>
          
      </div>
      {/* trending end */}
    </div>
  );
}
