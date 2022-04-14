import React from "react";
import { Fade } from "react-reveal";
import { About } from "./about/About";
import { Header } from "./header/Header";
import { Projects } from "./projects/Projects";
import { Footer } from "./ui/Footer";
import { Navbar } from "./ui/Navbar";
import { Contact } from "./contact/Contact";

function App() {

  return (
    <div className="App">
      <Navbar />
      <br id="home" /><br /><br /><br />
      <Fade left>
      <Header />
      </Fade>
      <main>
      <About />
      <Projects />
      <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
