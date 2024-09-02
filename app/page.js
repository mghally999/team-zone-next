"use client";

import React, { useState } from "react";
import Header from "./components/Header/Header";
import { IntroSection } from "./components/IntroSection";
import Programs from "./components/Programs/Programs";
import SportsExperience from "./components/SportsExperience/SportsExperience";
import { MartialArts } from "./components/MartialArts";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import ClassBooking from "./components/ClassBooking/ClassBooking";
import RibbonContainer1 from "./components/RibbonContainer1/RibbonContainer1";
import RibbonContainer2 from "./components/RibbonContainer2/RibbonContainer2";
import Packages from "./components/Packages/Packages";
import ClientsReviews from "./components/ClientsReviews/ClientsReviews";
import MentorSlider from "./components/MentorSlider/MentorSlider";
import Footer from "./components/Footer/Footer";


export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <Programs />
        <SportsExperience />
        <MartialArts />
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
