import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
  
  export const navLists = ['Home', 'Menu', 'About', 'Contact', 'Shop'];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Love at First Bite.",
        "Bite Into Happiness.",
        "One Smash Chubby at the time.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Not Your Average Burger.", "It’s Smash Time!."],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "Crisp Edges.",
        "Juicy Centers", 
        "Pure Satisfaction.",
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["Double the Fun, Double the Smash ", "Smash It with Someone Special."],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];