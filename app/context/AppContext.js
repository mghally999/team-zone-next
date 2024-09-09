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
  const mentorRef = useRef([]);

  const slides = [
    "/gallery/gallery1.JPG",
    "/gallery/gallery2.JPG",
    "/gallery/gallery3.JPG",
    "/gallery/gallery4.JPG",
    "/gallery/gallery5.JPG",
    "/gallery/gallery6.JPG",
    "/gallery/gallery7.JPG",
    "/gallery/gallery8.JPG",
    "/gallery/gallery9.JPG",
  ];

  const services = ["BJJ", "Grappling", "Boxing"];

  const packages = [
    {
      imgClass: "packageImg1",
      title: "Monthly Package",
      duration: "Quick Gains",
    },
    {
      imgClass: "packageImg2",
      title: "3-Month Package",
      duration: "Best Starter Deal",
    },
    {
      imgClass: "packageImg3",
      title: "Annual Package",
      duration: "Save 25% Annually",
    },
    {
      imgClass: "packageImg3",
      title: "Family Packages",
      duration: "Limited Slots",
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
      img: "/catriel.JPG",
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
      img: "/ali.JPG",
      details: [
        "2x World Pro Champion Youth",
        "Vice world pro champion 2021",
        "⁠Multiple AJP Open Champion",
      ],
    },
    {
      name: "Muslim",
      img: "/martial2.png",
      details: [
        "BJJ Black belt",
        "ACB JJ World Champ",
        "AJP Europe Continental Pro medalist",
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

  useEffect(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
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

  // useEffect(() => {
  //   const isMobile = window.innerWidth <= 768;
  //   const slideWidth = isMobile ? 100 : 50; // 100% width for mobile, 50% width for desktop

  //   // Set the translation for each mentor card based on the current slide
  //   mentorRef.current.forEach((s, i) => {
  //     const offset = slideWidth * (i - curSlide);
  //     s.style.transform = `translateX(${offset}%)`;
  //     s.style.display =
  //       i >= curSlide && i < curSlide + (isMobile ? 1 : 2) ? "block" : "none";
  //   });
  // }, [curSlide, mentors.length]);

  // const nextSlideMentors = useCallback(() => {
  //   const isMobile = window.innerWidth <= 768;
  //   setCurSlide(
  //     (prevSlide) => (prevSlide + 1) % (mentors.length - (isMobile ? 0 : 1))
  //   );
  // }, [mentors.length]);

  // const prevSlideMentors = useCallback(() => {
  //   const isMobile = window.innerWidth <= 768;
  //   setCurSlide(
  //     (prevSlide) =>
  //       (prevSlide - 1 + mentors.length) % (mentors.length - (isMobile ? 0 : 1))
  //   );
  // }, [mentors.length]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

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
        students,
        content,
        currentTab,
        setCurrentTab,
        formData,
        handleSubmit,
        isPopupVisible,
        openPopup,
        closePopup,
        currentSlide,
        nextSlide,
        prevSlide,
        goToSlide,
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
