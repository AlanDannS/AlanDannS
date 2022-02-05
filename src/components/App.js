import React from "react";
import { About } from "./about/About";
import { Header } from "./header/Header";
import { Projects } from "./projects/Projects";
import { Footer } from "./ui/Footer";
import { Navbar } from "./ui/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
