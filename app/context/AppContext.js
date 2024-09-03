"use client";

import React, { createContext, useState, useEffect, useCallback } from "react";

export const AppContext = createContext();

const content = [
  {
    label: "Kids Jiu-Jitsu Class (Ages 2-3)",
    description:
      "Our Jiu-Jitsu class for toddlers is designed to introduce young children to the fundamentals of balance, mobility, and agility through playful and engaging activities. This class focuses on fostering motor skills and coordination in a fun, supportive environment. With age-appropriate exercises and games, children will develop their physical abilities while enjoying the social and interactive aspects of jiu-jitsu. Join us to give your child a head start in building essential movement skills and confidence!",
  },
  {
    label: "Kids Jiu-Jitsu Class (Ages 4-6)",
    description:
      "In our 4-6 year-old class, children build strength, balance, and power while developing self-confidence and courage through fun jiu-jitsu activities. We focus on essential skills to help them handle bullying and prepare them for the next level of jiu-jitsu classes. This program supports a smooth transition to more advanced training while promoting athleticism and personal growth.",
  },
  {
    label: "Kids Jiu-Jitsu Class (Ages 7-10)",
    description:
      "Our 7-10 year-old class focuses on building self-confidence, managing bullying, and enhancing self-control. With an emphasis on advanced jiu-jitsu techniques, kids become athletic and skilled fighters. This class helps them refine their jiu-jitsu abilities, preparing them to excel in their practice and develop into confident, effective practitioners.",
  },
  {
    label: "Teens Jiu-Jitsu Class (Ages 11-15)",
    description:
      "Our 11-15 year-old class supports teenagers in their self-improvement journey through focused jiu-jitsu training. They learn advanced techniques to become efficient fighters while gaining valuable self-defense skills. This class fosters personal growth and discipline, helping them navigate early adolescence with confidence and resilience.",
  },
  {
    label: "White Belt Intro Class",
    description:
      "Our White Belt Intro Class is designed for beginners aged 11 and up, offering a free introduction to jiu-jitsu. We cover essential basics with a focus on safety and guide new students through fundamental techniques. This class helps newcomers smoothly transition into our group classes and is perfect for those who are new to jiu-jitsu.",
  },
  {
    label: "Beginners Jiu-Jitsu Class",
    description:
      "Our Beginners Jiu-Jitsu Class focuses on core principles and fundamental techniques, guiding newcomers through essential skills. After completing the White Belt Intro Class, students safely transition into this class, where they build a solid foundation and prepare for more advanced training. This class is designed to ensure a smooth progression from basic to advanced jiu-jitsu.",
  },
  {
    label: "Advanced Jiu-Jitsu Class",
    description:
      "Our Advanced Jiu-Jitsu Class is designed for experienced practitioners who are comfortable training at a higher level. This class features mixed belt levels and focuses on advanced techniques with a more intense training environment. It is ideal for those who have a solid foundation and are ready to push their skills further.",
  },
  {
    label: "Competition Class",
    description:
      "Our Competition Class, held twice a week, is led by champion coaches and focuses on preparing athletes for competitive events. This class offers valuable training and experience, even for those who don’t compete, providing an opportunity to immerse in the competitive environment and enhance skills.",
  },
];

export const AppContextProvider = ({ children }) => {
  // Existing form and popup states
  const [currentTab, setCurrentTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    age: "",
    gender: "",
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/img1.jpeg",
    "/img2.jpeg",
    "/img3.jpeg",
    "/img1.jpeg",
    "/img2.jpeg",
    "/img3.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  }, [slides.length]);

  const goToSlide = useCallback((slideIndex) => {
    setCurrentSlide(slideIndex);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      age: formData.age.trim(),
      gender:
        formData.gender.charAt(0).toUpperCase() +
        formData.gender.slice(1).toLowerCase().trim(),
    };

    const whatsappMessage = `
    Name: ${formattedData.name}
    Email: ${formattedData.email}
    Mobile Number: ${formattedData.phoneNumber}
    Age: ${formattedData.age}
    Gender: ${formattedData.gender}
        `;

    const whatsappLink = `https://wa.me/971508272111?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappLink, "_blank");
  };

  const openPopup = () => setIsPopupVisible(true);
  const closePopup = () => setIsPopupVisible(false);

  return (
    <AppContext.Provider
      value={{
        content,
        currentTab,
        setCurrentTab,
        formData,
        handleChange,
        handleSubmit,
        isPopupVisible,
        openPopup,
        closePopup,
        currentSlide,
        nextSlide,
        prevSlide,
        goToSlide,
        slides,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
