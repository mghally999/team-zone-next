"use client";

import React from "react";
import Header from "./components/Header/Header";
import { IntroSection } from "./components/IntroSection";
import { Programs } from "./components/Programs";
import SportsExperience from "./components/SportsExperience/SportsExperience";
import { MartialArts } from "./components/MartialArts";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import { ClassBooking } from "./components/ClassBooking";
import Ribbon from "./components/Ribbon/Ribbon";
import { Packages } from "./components/Packages";
import { ClientsReviews } from "./components/ClientsReviews";
import MentorSlider from "./components/MentorSlider/MentorSlider";
import { Footer } from "./components/Footer";

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
        <Packages />
        <Ribbon
          skills={["FUNCTIONAL TRAINING", "BJJ", "BOXING"]}
          repetitionCount={5}
        />
        <ClientsReviews />
        <MentorSlider />
        <Footer />
      </main>
    </>
  );
}
