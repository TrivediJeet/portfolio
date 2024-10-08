export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Tech Stack", link: "#techstack" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I thrive in collaborative environments, working with cross-functional teams",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building out a web component library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to get in touch?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Algorthim Visualizer",
    des: "Visualize sorting algorithms with ease! Sortscape guides you through interactive demonstrations that reveal the inner workings of each method",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg"],
    link: "https://sortflix.jeettrivedi.io/",
  },
  {
    id: 2,
    title: "Uber Clone",
    des: "A full-stack Uber clone built with React Native, showcasing real-time location tracking, seamless booking, and secure payments",
    img: "/iP14PM_Mock-up_Maker_2-removebg-preview.png",
    iconLists: [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAWlBMVEUAABMAABQAAAoAAABGRkvT09To6OhxcXTi4uP8/P02NjwAAAePj5LFxcb///8NDRr29vampqiwsLK4uLoAABBBQUeenqBYWFwAAA4XFyHNzc7AwMKVlZeCgoUNhqjnAAAAnUlEQVR4Ac3SRQKEMAAEwWwad3f+/8x1I3ZmjlMQF+5crDkBSmlHPA8b4geBjxkJI4hCTCiIkzRNYoQByXLuyTN0FBQlVUVZIDSkbmjruqWpUbGTBV4McU+RdgrSDlQjjBVDyxGnuSBb7iVLRjFPB2S9d929m0RBtnLEimV7Vmw5lYJ7HLwbgnhHWVD/WWMne9R9yt+pyfO8IRVduQHSkAgQ6p7d2QAAAABJRU5ErkJggg==",
      "/tail.svg",
      "/three.svg",
      "/c.svg",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEVHcEwL4NIP484I4tIX5Mgi574s57Ms2qdi9lNi9VQL4dFi9lRi9lQL4tAh5r4x6a4s2qZC6pBj9lVi9VRi9VRi9lRi9lRi9lRi9lRi9lRi9lQ366Y77KFD7JVQ6HM36qdE7pZI54ZR53E97J8gbn7DAAAAJHRSTlMAX9b//////8xSof+d7NnZ2AfaF0cscIbwvX38ytjrXv///aErfwEpAAAAz0lEQVR4AZ3PBZLDMAxAUYXtMDPn/ndcKczb9g/7jW0JAARRGpMphVJVTWMcMH2S2UZF0wzDxHvbtfXehAYHEcUSKXvJcTFEBmQeXPNRCUV4RvlXlF8QF7BhKwijR4zxKHnAwKDiDRVlQz5iGj0j6oLKDRrZiuoRfdL84WZskoZsRPV0MwE6T8ebqqo6JwxSA3tACN8QkhWLK0I2LaQW6g0GqH6EWBTeBcELwwCgLLBqrkaMYatBa4sW67quRwxg10AyGWEOh5qSaLrJwr38AeQ6FpLPC98nAAAAAElFTkSuQmCC",
    ],
    link: "https://github.com/TrivediJeet/expo-uber-clone",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "STACK",
    timeline: "OCTOBER 2021 - PRESENT",
    desc: "Led the development of a component library, from initial concept to deployment",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "GEOTAB",
    timeline: "APRIL 2020 - OCTOBER 2021",
    desc: "Technical lead for front-end redesigns and migration from Angular.js to Angular",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Developer",
    company: "SOTI",
    timeline: "SEPTEMBER 2017 - APRIL 2020",
    desc: "Developer on a ticketing/help-desk system with best in class device remote control",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/TrivediJeet",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jeet-trivedi-thornhill/",
  },
];
