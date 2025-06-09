import React from "react";
import { Header } from "../common/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import { About } from "./About";
import { Services } from "./Services";
import { Portfolio } from "./Portfolio";
import { Testimonials } from "./Testimonials";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { Footer } from "../common/Footer";

export const Pages = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};
