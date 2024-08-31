"use client";

import React, { useState } from "react";
import IntroSection from "./components/IntroSection/IntroSection";
import Header from "./components/Header";
import Programs from "./components/Programs/Programs";
import SportsExperience from "./components/SportsExperience";
import MartialArtsShowcase from "./components/MartialArtsShowcase";
import ImageSlider from "./components/ImageSlider";
import ClassBooking from "./components/ClassBooking";
import RibbonContainer from "./components/RibbonContainer";
import ClientsReviews from "./components/ClientsReviews";
import MentorSlider from "./components/MentorSlider";
import Footer from "./components/Footer";

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
        <RibbonContainer />
        <ClientsReviews />
        <MentorSlider />
        <Footer />
      </main>
    </>
  );
}
