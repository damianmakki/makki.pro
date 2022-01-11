import Header from "./components/Header";
import About from "./components/About";
import Carousel from "./components/Carousel";
import CorporateExperience from "./components/CorporateExperience";
import StartupExperience from "./components/StartupExperience";
import WritingAndPodcasts from "./components/WritingAndPodcasts";
import Contact from "./components/Contact";
import Social from "./components/Social";

import { Animated } from "react-animated-css";
import HamburgerIcon from './images/hamburger.svg';
import { slide as Menu } from 'react-burger-menu'

export default function Portfolio() {
  return (
    <>
      <div className="content--centered">
        <Animated animationIn="fadeIn" animationInDelay={200}>
          <Header />
        </Animated>

        <Animated animationIn="fadeIn" animationInDelay={400}>
          <About />
        </Animated>

        <Animated animationIn="fadeIn" animationInDelay={600}>
          <h2 id="projects">Projects</h2>
        </Animated>
      </div>

      <Animated animationIn="fadeIn" animationInDelay={600}>
        <Carousel />
      </Animated>

      <div className="content--centered">
        <Animated animationIn="fadeIn" animationInDelay={800}>
          <CorporateExperience />
        </Animated>

        <Animated animationIn="fadeIn" animationInDelay={1000}>
          <StartupExperience />
        </Animated>

        <Animated animationIn="fadeIn" animationInDelay={1200}>
          <WritingAndPodcasts />
        </Animated>

        <Animated animationIn="fadeIn" animationInDelay={1400}>
          <hr />
        </Animated>

        <Animated animationIn="fadeIn" animationInDelay={1600}>
          <Contact />
        </Animated>

        <Animated animationIn="fadeIn" animationInDelay={1800}>
          <Social />
        </Animated>

        <Animated animationIn="fadeIn" animationInDelay={2000}>
          <p className="copyright">© 2012 - {new Date().getFullYear()} with love by <a href="https://www.ruckuslabs.co">Ruckus Labs, LLC</a>. Any and all rights reserved.</p>
        </Animated>
      </div>

    </>
  );
}
