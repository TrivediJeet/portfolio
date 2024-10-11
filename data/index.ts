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
    thumbnail:
      "data:image/webp;base64,UklGRlYFAABXRUJQVlA4WAoAAAAQAAAAbwAAbwAAQUxQSLMAAAARX6CobRs4WArt7u21iAjwxnc83x1ubGtTkw+XyrWizRrwmiU4O6DPDkgV2nQ4TIlOZnn4fB0a0f8JwPlA6SwyuN6QWiknfaV4Upo7qQuxhdLe9JyNFaEBICYZHA/QV5QhYMLRROzE4XgaijRos0T3LCWXxVSsgubv/xdYIVmsPUvLZinUWUIxSeLBlqMFDDnCQEwyCA8Am8EAgNhRP8tzhrqrmwjg8sDVS2Rwvb7UaZTCOQBWUDggfAQAAFAXAJ0BKnAAcAA+jR6jUaUlJSUY0KARiUAYTw+C5DXCWIUPyRuEfQZ58vnq30Mv/TgDkY2HySv+o8Tn/P6Q8ct0cl1HqUN4yRVGJoUG7Q90nNvjNSM37vF0Hn/r//zDgqgaJ1L85lincmwUlfv/8c7amif8y5XA7W202p5PpbjudzJZPPBMnC2Gl2+q8ndnNqAGL9tc31jvS1QKP9ToNI0YfvGeKb//h8EfpFLfMi+iXFvh+lkpi97iwt59M8qUDBczQAD+rMLjza5q2++hnei3md/9yJepLQ/4I/y63+9IzXk9RnvWigfmDedDq0gKzG+kliU1MqWyrQB4SwBNy6YZFGFgPGWljI4JGBmcLbT3h+iaiY7DUt0AOSUcW3AjfBEr8uPfHT3/M7/LJD1xSUASf75BJgNqEB5OqOAFkcDNtvO1hp9fkMPcPa0pwRvjushg7wVufts6fpkOUX1QhVq3hE5y8VRjaZHr0lWrVO2q6W70dokmR3RtRDmT2No5bY3cuU9o17qKC1jAQkDB2JNgZ92rG2Yg8yWhprqAj/BkwvK4EysknOUtHjM8ixgI7g6Feuqn+Pi3XAyDjXzo8ul28cJ160bqUIXtP7WYrjPqg0e0crub5SoETly8STjYYt45IZmdAaG3FwEwiQaUwDVj+GeFtMb7BV5o2U91HO+SCMgSESnULCV+EjbKJrZdUbskf/+BIiNHooRditWAXWKFVbWniJHjyxnC4Ox7WvHwIqlrc/1Xaw5a+9YPHmhTZI9u2rW1pR1rLTBYiD9SQossaptmqa1A/LeaCL/AIz9X4Nt2QaivwYYZ4oNqrL+9HnXnVQFNUpn34vQv2qj+EJB/vBrlIYWfQbnRgxQAJ3yFPxXo5g+Rjrowi4Oh5mp+4cQhsAdGBAaDqhIcTkOr5AQjpWwtPgRyyUQV1I6g8VQ/RCFMYn3J2MCX6k+bENYnDqofMTykOTaauRYoHFRiP/fMMrCVQDQlZ9f/qNJAuneUz76XmFe4We3dQscFZ8O4bIVWryYQ/XBuKUbf/XnIVeFbRf7R7WVxh/FN+c6PiQ8aM9v8pTmBkY4G95okg5380B0QPVRhodmeMKFjRyYpB8CzUzsk7quMTEB07A0XWKdb7yMwb+7cpbyYE/RjPww7SxWziPbdoITA/9Zg+V+CCEeDzQoGxkLCU8GGiYRrIiS19S0yQcO13PgaH68JJlQHjHJ+nrLWw4+ku7cHXS1baZ1yD4Pde10hFGzjQh8fxLb3IQ7RUGFJepsYtq2FC174DlumzAicJJ6IafMkLL8hy71K4EHB0lDkCYe4HH4IeUXWUiXrfIKqoYkbW3bYyjREfR+/VdLNOQW7iLvHKZg/XvoGW5shD4GumLgmDnwtddiZvJyV7yacR3lKz8x4fWiwEwoPp7bCe+/y2ol8218xf1pYgjtcPEiLDE23AwTKHX1vznLRfDc359j5VxCqJOceA1kawlbOojAnd72eM5qGVph2PubWtgDCvM5ngPu32+IW/S53OdCcoN4LFAAA",
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

export const techStackLanguagesIconUrls: { [key: string]: string } = {
  Javascript:
    "https://img.shields.io/badge/-javascript-black?style=for-the-badge&logoColor=white&logo=javascript&color=06B6D4",
  Typescript:
    "https://img.shields.io/badge/-typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=06B6D4",
  HTML: "https://img.shields.io/badge/-html-black?style=for-the-badge&logoColor=white&logo=html5&color=06B6D4",
  CSS: "https://img.shields.io/badge/-css-black?style=for-the-badge&logoColor=white&logo=css3&color=06B6D4",
  "SASS/SCSS":
    "https://img.shields.io/badge/-sass-black?style=for-the-badge&logoColor=white&logo=sass&color=06B6D4",
  "C#": "https://img.shields.io/badge/-C_Sharp-black?style=for-the-badge&logoColor=white&logo=.NET&color=06B6D4",
  SQL: "https://img.shields.io/badge/-SQL-black?style=for-the-badge&logoColor=white&logo=postgresql&color=06B6D4",
  Python:
    "https://img.shields.io/badge/-python-black?style=for-the-badge&logoColor=white&logo=python&color=06B6D4",
};

export const techStackFrameworksIconUrls: { [key: string]: string } = {
  Angular:
    "https://img.shields.io/badge/-Angular-black?style=for-the-badge&logoColor=white&logo=Angular&color=06B6D4",
  React:
    "https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=React&color=06B6D4",
  Redux:
    "https://img.shields.io/badge/-Redux-black?style=for-the-badge&logoColor=white&logo=Redux&color=06B6D4",
  "Next.js":
    "https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=06B6D4",
  "React Native":
    "https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logoColor=white&logo=nativescript&color=06B6D4",
  Expo: "https://img.shields.io/badge/-Expo-black?style=for-the-badge&logoColor=white&logo=expo&color=06B6D4",
  RxJS: "https://img.shields.io/badge/-RxJS-black?style=for-the-badge&logoColor=white&logo=reactivex&color=06B6D4",
  GraphQL:
    "https://img.shields.io/badge/-GraphQL-black?style=for-the-badge&logoColor=white&logo=graphql&color=06B6D4",
  Tailwind:
    "https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4",
  Webpack:
    "https://img.shields.io/badge/-Webpack-black?style=for-the-badge&logoColor=white&logo=webpack&color=06B6D4",
  Vite: "https://img.shields.io/badge/-Vite-black?style=for-the-badge&logoColor=white&logo=vite&color=06B6D4",
  "Node.js":
    "https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logoColor=white&logo=nodedotjs&color=06B6D4",
  "Express.js":
    "https://img.shields.io/badge/-Express.js-black?style=for-the-badge&logoColor=white&logo=express&color=06B6D4",
  ".NETCore":
    "https://img.shields.io/badge/-.NETCore-black?style=for-the-badge&logoColor=white&logo=.NET&color=06B6D4",
  Docker:
    "https://img.shields.io/badge/-Docker-black?style=for-the-badge&logoColor=white&logo=docker&color=06B6D4",
  Kubernetes:
    "https://img.shields.io/badge/-Kubernetes-black?style=for-the-badge&logoColor=white&logo=kubernetes&color=06B6D4",
  GCP: "https://img.shields.io/badge/-Google_Cloud-black?style=for-the-badge&logoColor=white&logo=googlecloud&color=06B6D4",
  AWS: "https://img.shields.io/badge/-AWS-black?style=for-the-badge&logoColor=white&logo=amazonwebservices&color=06B6D4",
};

export const techStackTestingIconUrls: { [key: string]: string } = {
  Jest: "https://img.shields.io/badge/-Jest-black?style=for-the-badge&logoColor=white&logo=jest&color=06B6D4",
  TestingLibrary:
    "https://img.shields.io/badge/-Testing_Library-black?style=for-the-badge&logoColor=white&logo=testinglibrary&color=06B6D4",
  Cypress:
    "https://img.shields.io/badge/-Cypress-black?style=for-the-badge&logoColor=white&logo=cypress&color=06B6D4",
  Storybook:
    "https://img.shields.io/badge/-Storybook-black?style=for-the-badge&logoColor=white&logo=storybook&color=06B6D4",
  Vitest:
    "https://img.shields.io/badge/-Vitest-black?style=for-the-badge&logoColor=white&logo=vitest&color=06B6D4",
  Protractor:
    "https://img.shields.io/badge/-Protractor-black?style=for-the-badge&logoColor=white&logo=protractor&color=06B6D4",
  Chai: "https://img.shields.io/badge/-Chai-black?style=for-the-badge&logoColor=white&logo=chai&color=06B6D4",
  Sinon:
    "https://img.shields.io/badge/-Sinon-black?style=for-the-badge&logoColor=white&logo=sanity&color=06B6D4",
  Karma:
    "https://img.shields.io/badge/-Karma-black?style=for-the-badge&logoColor=white&logo=keenetic&color=06B6D4",
};
