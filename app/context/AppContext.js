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
      "Introduce toddlers to balance and agility through fun, engaging activities that build motor skills and confidence.",
    list: [
      "Focus: Balance and Mobility",
      "Activities: Playful Games",
      "Skills: Motor Development",
      "Environment: Supportive and Fun",
    ],
  },
  {
    label: "Kids Jiu-Jitsu Class (Ages 4-6)",
    sentence:
      "Build strength and confidence with fun jiu-jitsu activities. Prepares kids for bullying and future training.",
    list: [
      "Focus: Strength and Confidence",
      "Activities: Fun Drills",
      "Skills: Bullying Prevention",
      "Progression: Ready for Advanced Classes",
    ],
  },
  {
    label: "Kids Jiu-Jitsu Class (Ages 7-10)",
    sentence:
      "Enhance self-confidence and skills with advanced techniques. Prepares kids for future growth in jiu-jitsu.",
    list: [
      "Focus: Confidence and Control",
      "Techniques: Advanced Skills",
      "Development: Athleticism",
      "Goal: Skillful and Confident",
    ],
  },
  {
    label: "Teen Jiu-Jitsu Class (Ages 11-15)",
    sentence:
      "Teens learn advanced techniques and self-defense, gaining confidence and discipline for personal growth.",
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
      "Free class for beginners 11+, covering basics and safety to help transition to regular classes.",
    list: [
      "Focus: Basic Techniques",
      "Audience: Beginners 11+",
      "Purpose: Smooth Transition",
      "Introduction: Free Class",
    ],
  },
  {
    label: "Beginners Jiu-Jitsu Class",
    sentence:
      "Build a solid foundation with core techniques. For those transitioning from White Belt Intro.",
    list: [
      "Focus: Core Principles",
      "Audience: Post-Intro Students",
      "Goal: Prepare for Advanced Training",
      "Progression: Build Foundation",
    ],
  },
  {
    label: "Advanced Jiu-Jitsu Class",
    sentence:
      "For experienced practitioners, focusing on advanced techniques in an intense training environment.",
    list: [
      "Focus: Advanced Techniques",
      "Environment: Intense",
      "Audience: Experienced Practitioners",
      "Goal: Skill Advancement",
    ],
  },
  {
    label: "Competition Class",
    sentence:
      "Prepare for competitions with champion coaches. Valuable experience for all, enhancing competitive skills.",
    list: [
      "Focus: Competition Prep",
      "Frequency: Twice a Week",
      "Coaches: Champion-Level",
      "Benefits: Enhanced Skills",
    ],
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
    "/img1.jpeg",
    "/img2.jpeg",
    "/img3.jpeg",
    "/img1.jpeg",
    "/img2.jpeg",
    "/img3.jpeg",
  ];

  const services = ["BJJ", "Grappling", "Boxing"];

  const packages = [
    {
      imgClass: "packageImg1",
      title: "Monthly Package",
      duration: "1 Month",
    },
    {
      imgClass: "packageImg2",
      title: "3-Month Package",
      duration: "3 Months",
    },
    {
      imgClass: "packageImg3",
      title: "Annual Package",
      duration: "1 Year",
    },
  ];

  const reviewsData = [
    {
      name: "Mike Schulz",
      stars: "⭐⭐⭐⭐⭐",
      text: "Both our boys attend jiu-jitsu at this gym. The coaches are professional and have a great way with the kids. Our boys enjoy going and have progressed quickly. The atmosphere is welcoming, and the training is top-notch.",
    },
    {
      name: "Gordinho Da Br",
      stars: "⭐⭐⭐⭐⭐",
      text: "The best gym to train jiu-jitsu in Dubai, family and cozy atmosphere, good for beginners and many technical training for black belts.",
    },
    {
      name: "Masoud Hesabian",
      stars: "⭐⭐⭐⭐⭐",
      text: "I had a great session! Learned so much in one hour but mostly the service was amazing. If you are a beginner and want to learn more about jiu-jitsu, I definitely recommend this gym.",
    },
    {
      name: "Collab giorgiacapa",
      stars: "⭐⭐⭐⭐⭐",
      text: "I love this gym! Good vibes, great people, and top jiu-jitsu!",
    },
  ];

  const mentors = [
    {
      name: "Zelim",
      img: "/martial1.png",
      details: [
        "BJJ Black belt",
        "ACB JJ World Champ",
        "AJP Grand Slam World Cup Winner",
      ],
    },
    {
      name: "Max",
      img: "/martial2.png",
      details: [
        "BJJ Black belt",
        "ACB JJ World Champ",
        "AJP Europe Continental Pro medalist",
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
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const slideWidth = isMobile ? 100 : 50; // 100% width for mobile, 50% width for desktop

    // Set the translation for each mentor card based on the current slide
    mentorRef.current.forEach((s, i) => {
      const offset = slideWidth * (i - curSlide);
      s.style.transform = `translateX(${offset}%)`;
      s.style.display =
        i >= curSlide && i < curSlide + (isMobile ? 1 : 2) ? "block" : "none";
    });
  }, [curSlide, mentors.length]);

  const nextSlideMentors = useCallback(() => {
    const isMobile = window.innerWidth <= 768;
    setCurSlide(
      (prevSlide) => (prevSlide + 1) % (mentors.length - (isMobile ? 0 : 1))
    );
  }, [mentors.length]);

  const prevSlideMentors = useCallback(() => {
    const isMobile = window.innerWidth <= 768;
    setCurSlide(
      (prevSlide) =>
        (prevSlide - 1 + mentors.length) % (mentors.length - (isMobile ? 0 : 1))
    );
  }, [mentors.length]);

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
        services,
        packages,
        reviewsData,
        curSlide,
        setCurSlide,
        nextSlideMentors,
        prevSlideMentors,
        mentors,
        mentorRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
