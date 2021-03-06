import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import State from "./context/State";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackToTopButton from "./components/layout/BackToTopButton";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Games from "./components/pages/Games";
import SingleGame from "./components/pages/SingleGame";
import Drawing from "./components/pages/Drawing";
import Origamis from "./components/pages/Origamis";
import Quizes from "./components/pages/Quizes";
import Riddles from "./components/pages/Riddles";
import Puzzles from "./components/pages/Puzzles";
import Experiments from "./components/pages/Experiments";
import EnglishLearning from "./components/pages/EnglishLearning";
import NotFound from "./components/pages/NotFound";

import AOS from "aos";
import "aos/dist/aos.css";

import "./css/App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease",
    });

    // eslint-disable-next-line
  }, []);

  return (
    <State>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hakkinda" component={About} />
            <Route exact path="/oyunlar" component={Games} />
            <Route exact path="/oyunlar/:name" component={SingleGame} />
            <Route exact path="/cizim" component={Drawing} />
            <Route exact path="/origami" component={Origamis} />
            <Route exact path="/quiz" component={Quizes} />
            <Route exact path="/bilmece" component={Riddles} />
            <Route exact path="/bulmaca" component={Puzzles} />
            <Route exact path="/deneyler" component={Experiments} />
            <Route exact path="/ingilizce-ogren" component={EnglishLearning} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
          <BackToTopButton />
        </div>
      </Router>
    </State>
  );
}

export default App;
