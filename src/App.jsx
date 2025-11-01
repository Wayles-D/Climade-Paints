import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Materials from "./Pages/Materials";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Quote from "./Pages/Quote";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Materials" element={<Materials />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Quote" element={<Quote />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
