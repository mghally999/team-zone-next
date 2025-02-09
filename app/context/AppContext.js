"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";

export const AppContext = createContext();

const content = [
  {
    label: "Kids Jiu-Jitsu Class (Ages 2-3)",
    sentence:
      "Introduce toddlers to balance and agility through fun, engaging activities that build motor skills and confidence",
    list: [
      "Focus: Balance and Mobility",
      "Activities: Playful Games",
      "Skills: Motor Development",
      "Environment: Supportive and Fun",
    ],
    img: "/kids23.JPG",
  },
  {
    label: "Kids Jiu-Jitsu Class (Ages 4-6)",
    sentence:
      "Build strength and confidence with fun jiu-jitsu activities. Prepares kids for bullying and future training",
    list: [
      "Focus: Strength and Confidence",
      "Activities: Fun Drills",
      "Skills: Bullying Prevention",
      "Progression: Ready for Advanced Classes",
    ],
    img: "/kids46.JPG",
  },
  {
    label: "Kids Jiu-Jitsu Class (Ages 7-10)",
    sentence:
      "Enhance self-confidence and skills with advanced techniques. Prepares kids for future growth in jiu-jitsu",
    list: [
      "Focus: Confidence and Control",
      "Techniques: Advanced Skills",
      "Development: Athleticism",
      "Goal: Skillful and Confident",
    ],
    img: "/kids710.JPG",
  },
  {
    label: "Teen Jiu-Jitsu Class (Ages 11-15)",
    sentence:
      "Teens learn advanced techniques and self-defense, gaining confidence and discipline for personal growth",
    list: [
      "Focus: Advanced Techniques",
      "Skills: Self-Defense and Discipline",
      "Benefits: Confidence and Growth",
      "Training: Adolescent Development",
    ],
    img: "/kids1115.JPG",
  },
  {
    label: "White Belt Intro Class",
    sentence:
      "Free class for beginners 11+, covering basics and safety to help transition to regular classes",
    list: [
      "Focus: Basic Techniques",
      "Audience: Beginners 11+",
      "Purpose: Smooth Transition",
      "Introduction: Free Class",
    ],
    img: "/whiteBelt.JPG",
  },
  {
    label: "Beginners Jiu-Jitsu Class",
    sentence:
      "Build a solid foundation with core techniques. For those transitioning from White Belt Intro",
    list: [
      "Focus: Core Principles",
      "Audience: Post-Intro Students",
      "Goal: Prepare for Advanced Training",
      "Progression: Build Foundation",
    ],
    img: "/whiteBelt.JPG",
  },
  {
    label: "Advanced Jiu-Jitsu Class",
    sentence:
      "For experienced practitioners, focusing on advanced techniques in an intense training environment",
    list: [
      "Focus: Advanced Techniques",
      "Environment: Intense",
      "Audience: Experienced Practitioners",
      "Goal: Skill Advancement",
    ],
    img: "/advanced.jpeg",
  },
  {
    label: "Competition Class",
    sentence:
      "Prepare for competitions with champion coaches. Valuable experience for all, enhancing competitive skills",
    list: [
      "Focus: Competition Prep",
      "Frequency: Twice a Week",
      "Coaches: Champion-Level",
      "Benefits: Enhanced Skills",
    ],
    img: "/competition.jpeg",
  },
];

export const AppContextProvider = ({ children }) => {
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
  const [curSlide, setCurSlide] = useState(0);

  const slides = [
    "/gallery/gallery1.JPG",
    "/gallery/gallery2.JPG",
    "/gallery/gallery3.JPG",
    "/gallery/gallery4.JPG",
    "/gallery/gallery5.JPG",
    "/gallery/gallery66.png",
    "/gallery/gallery7.JPG",
    "/gallery/gallery8.JPG",
    "/gallery/gallery99.jpg",
  ];

  const services = ["BJJ", "Grappling", "Boxing"];

  const packages = [
    {
      imgClass: "packageImg1",
      title: "Monthly Package",
      duration: "Ultimate Starter",
    },
    {
      imgClass: "packageImg2",
      title: "3-Month Package",
      duration: "Best Starter Deal",
    },
    {
      imgClass: "packageImg3",
      title: "Annual Package",
      duration: "Your Annual Savings",
    },
    {
      imgClass: "packageImg4",
      title: "Family Packages",
      duration: "Family Savings Plan",
    },
  ];

  const reviewsData = [
    {
      name: "Mike Schulz",
      stars: "⭐⭐⭐⭐⭐",
      text: "Both our boys attend jiu-jitsu at this gym. The coaches are professional and have a great way with the kids. Our boys enjoy going and have progressed quickly. The atmosphere is welcoming, and the training is top-notch",
    },
    {
      name: "Gordinho Da Br",
      stars: "⭐⭐⭐⭐⭐",
      text: "The best gym to train jiu-jitsu in Dubai, family and cozy atmosphere, good for beginners and many technical training for black belts",
    },
    {
      name: "Masoud Hesabian",
      stars: "⭐⭐⭐⭐⭐",
      text: "I had a great session! Learned so much in one hour but mostly the service was amazing. If you are a beginner and want to learn more about jiu-jitsu, I definitely recommend this gym",
    },
    {
      name: "Collab giorgiacapa",
      stars: "⭐⭐⭐⭐⭐",
      text: "I love this gym! Good vibes, great people, and top jiu-jitsu!",
    },
  ];

  const mentors = [
    {
      name: "Catriel Rodrigues",
      img: "/trainers/catriel.JPG",
      details: [
        "2x World Pro Champion ",
        "6x Grand Slam AJP",
        "European Champion",
        "3x Brazilian National",
        "Multiple Times Opens Champion",
        "IBJJF",
      ],
    },
    {
      name: "Ali Abualhaj",
      img: "/trainers/ali.JPG",
      details: [
        "2x World Pro Champion Youth",
        "Vice world pro champion 2021",
        "⁠Multiple AJP Open Champion",
      ],
    },
    {
      name: "Eduardo",
      img: "/trainers/eduardoo.JPG",
      details: [
        "Multiple Times Champion",
        "Experience In Fighting",
        "Boxing in Russian-Kazakhstan-Brazil",
      ],
    },
  ];

  const students = [
    { imgSrc: "/customers/customer-1.jpg", altText: "Customer photo 1" },
    { imgSrc: "/customers/customer-2.jpg", altText: "Customer photo 2" },
    { imgSrc: "/customers/customer-3.jpg", altText: "Customer photo 3" },
    { imgSrc: "/customers/customer-4.jpg", altText: "Customer photo 4" },
    { imgSrc: "/customers/customer-5.jpg", altText: "Customer photo 5" },
    { imgSrc: "/customers/customer-6.jpg", altText: "Customer photo 6" },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

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

    const whatsappMessage =
      "Name: " +
      formattedData.name.trim() +
      "\n" +
      "Email: " +
      formattedData.email.trim() +
      "\n" +
      "Phone: " +
      formattedData.phoneNumber.trim() +
      "\n" +
      "Age: " +
      formattedData.age.trim() +
      "\n" +
      "Gender: " +
      formattedData.gender.trim();

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
        students,
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
        slides,
        services,
        packages,
        reviewsData,
        curSlide,
        setCurSlide,
        mentors,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
