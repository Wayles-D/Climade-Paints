import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageSkeleton } from "./components/SkeletonLoader";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";

// Lazy load all page components for better performance
const Homepage = lazy(() => import("./Homepage"));
const About = lazy(() => import("./Pages/About"));
const Services = lazy(() => import("./Pages/Services"));
const Materials = lazy(() => import("./Pages/Materials"));
const Gallery = lazy(() => import("./Pages/Gallery"));
const Contact = lazy(() => import("./Pages/Contact"));
const BookSiteVisit = lazy(() => import("./Pages/BookSiteVisit"));

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/About" element={<About />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Materials" element={<Materials />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/book-site-visit" element={<BookSiteVisit />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
