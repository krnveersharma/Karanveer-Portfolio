export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      " I prioritize delivering innovative solutions and fostering open communication.",
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
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a SaaS based Project",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
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
    title: "InformedInbox",
    des: "Send reminders in a minute.",
    img: "/reminders.png",
    iconLists: [
      "/golang.svg",
      "/tail.svg",
      "/ts.svg",
      "/prisma.svg",
      "/postgre.svg",
    ],
    link: "https://github.com/krnveersharma/reminders",
  },
  {
    id: 1,
    title: "SmartSaver AI",
    des: "Control your expense by expense tracking and getting personalized AI recommendations.",
    img: "/SmartSaverAI.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/postgre.svg"],
    link: "https://smart-saver-ai.vercel.app/",
  },
  {
    id: 2,
    title: "GoCart",
    des: "Buy and list your items and sell it to people",
    img: "/Ecom.svg",
    iconLists: ["/golang.svg", "/tail.svg", "/js.svg", "/postgre.svg"],
    link: "https://github.com/krnveersharma/GoCart",
  },
  {
    id: 3,
    title: "Mern_Service",
    des: "WEbsite where you can connect with me forthe web development service",
    img: "/Mern_service.png",
    iconLists: [
      "/re.svg",
      "/express.svg",
      "/tail.svg",
      "/js.svg",
      "/mongo.svg",
    ],
    link: "https://github.com/krnveersharma/mern_service",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "LambdaTest(Software Engineer Intern)",

    desc: "Optimized application performance by migrating heavy client-side logic from React to Golang, reducing page load times by 25%. Cut infrastructure costs by $5,000 through a geolocation-based proxy assignment system. Led end-to-end development of an internal asset management tool using Next.js, Django, and Docker, collaborating with cross-functional teams for successful deployment.",

    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Moreshop Solutions(Software Engineer Intern)",
    desc: `Worked on Multivendor website. Reduced API calls by a significant amount by handling the state efficiently.Using Recoil.js on the front end and sending relevant state changes to the DB thus decreasingoverall server cost.   Used Nextjs, ChakraUI and Typescript for the whole project.`,
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/krnveersharma",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/krnveersharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 3,
    img: "/lc.svg",
    link: "https://leetcode.com/u/Karanvsharma/",
  },
];
