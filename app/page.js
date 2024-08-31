"use client";

import React, { useState } from "react";
import IntroSection from "./components/IntroSection/IntroSection";
import Header from "./components/Header";
import Programs from "./components/Programs/Programs";
import SportsExperience from "./components/SportsExperience";
import MartialArtsShowcase from "./components/MartialArtsShowcase";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <Programs />
        <SportsExperience />
        <MartialArtsShowcase />
      </main>
    </>
  );
}
