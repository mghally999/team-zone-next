"use client";

import React, { useState } from "react";
import IntroSection from "./components/IntroSection/IntroSection";
import Header from "./components/Header";
import Programs from "./components/Programs/Programs";
import SportsExperience from "./components/SportsExperience";
import MartialArtsShowcase from "./components/MartialArtsShowcase";
import ImageSlider from "./components/ImageSlider";
import ClassBooking from "./components/ClassBooking";
import RibbonContainer1 from "./components/RibbonContainer1";
import RibbonContainer2 from "./components/RibbonContainer2";
import ClientsReviews from "./components/ClientsReviews";
import MentorSlider from "./components/MentorSlider";
import Footer from "./components/Footer";
import Packages from "./components/Packages";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <Programs />
        <SportsExperience />
        <MartialArtsShowcase />
        <ImageSlider />
        <ClassBooking />
        <RibbonContainer1 />
        <Packages />
        <RibbonContainer2 />
        <ClientsReviews />
        <MentorSlider />
        <Footer />
      </main>
    </>
  );
}
