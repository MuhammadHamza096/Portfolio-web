// Navigation Bar SECTION

const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Muhammad",
  middleName: "",
  lastName: "Hamza",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/MuhammadHamza096",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/hamzaaslam08",
    },
    // {
    //   image: "fa-instagram",
    //   url: "",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/muhammad-hamza-8337361b2/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "",
    // },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profilePic.jpg"),
  imageSize: 375,
  message:
    "Hello, I'm Muhammad Hamza, a MERN Stack Developer with over 4 years of professional experience. My passion lies in building dynamic and interactive web applications that precisely meet the clients' requirements while delivering exceptional user experiences. I possess a wide range of skills including HTML, CSS, SCSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Material UI, Ant Design, Node.js, Express.js, MongoDB, and SQL. Keeping up with the latest industry trends, I thoroughly enjoy working with modern frameworks and libraries. Crafting clean, efficient, and maintainable code is my utmost priority. I thrive in team environments and am always open to feedback, constantly seeking to improve my skills. With a keen eye for design and user experience, I understand the significance of creating visually appealing interfaces that are intuitive and user-friendly. As an avid learner, I actively seek out new challenges. Thank you for visiting my website! Please feel free to explore my projects and reach out for collaboration or any inquiries. Let's bring your ideas to life!",
  // resume: Resume,
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "MuhammadHamza096", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
  reposData: [
    {
      name: "HR Management System",
      description:
        "An HR management system is a comprehensive software solution that integrates various features to efficiently manage human resources within an organization. This system encompasses employee management, project and task management, as well as an attendance and leave system, providing a holistic approach to HR operations.",
      myRole:
        "As the lead full stack developer in the HR management system, my responsibilities include guiding a team, reviewing PRs, and collaborating with the business team to gather requirements. I develop APIs, design responsive web pages, and create the SQL database schema.",
      repoLink: "",
      languages: ["React", "MaterialUI/Scss", "Node", "Express", "SQL"],
      link: "http://lucidhr.co/",
    },
    {
      name: "Science37",
      description:
        "US-based clinical health startup (valued $1bn) offering an end-to-end platform for clinical trials with 500k+ patients.",
      myRole:
        "As a Full Stack Developer, I developed UX/UI, pixel perfect, using JavaScript, TypeScript & React. Migrated patient portal to TypeScript, created reusable components, integrated Rest APIs, and optimized data transfer and image uploading. Led testing efforts and achieved 90% unit test coverage using Jest.",
      languages: ["React", "Node", "Nest", "SQL", "Typescript", "Jest"],
      link: "https://science37.com/",
    },
    {
      name: "Atlhas Tutor",
      description:
        "A learning management system (LMS) is a software platform designed to facilitate the management, delivery, and tracking of online learning and training programs. It serves as a centralized hub for organizations, educational institutions, and businesses to create, distribute, and monitor learning content for their learners",
      myRole: "As a freelance front-end developer, I created this website by developing new pages, integrating APIs, and resolving bugs. I focused on delivering a visually appealing and user-friendly experience while ensuring seamless functionality. Collaborating closely with the client, I incorporated their feedback to meet their vision and requirements.",
      languages: ["React", "Material Ui"],
      link: "https://atlhas-tutor-2022.web.app",
    },
    {
      name: "Dawaai.pk",
      description:
        "Online pharmacy startup with 100k+ clients in Pakistan.",
      myRole: "In an agile team of 10 developers (25 on the project), I redesigned and developed projects using JavaScript and React. Improved UI, boosting desktop load time by 92% and mobile load time by 60%. Enhanced customer login with twilio authentication, resulting in a 15% increase in registrations. Integrated 10+ Rest APIs, built reusable components, and resolved bugs using React. Created a brands page with filtering and marketing features, increasing sales for specific brands by up to 60%",
      languages: ["React", "Material Ui"],
      link: "https://dawaai.pk/",
    },

    {
      name: "Jay Group",
      description:
        "The Jay Group is one of the largest, privately held, wholesalers of discount footwear in the world. They purchase returns, closeouts, cancellations, factory defectives, stock-lots, liquidation, and all types of footwear from leading retailers, factories, and manufacturers on an international basis. They sell our product to international, value driven markets, around the world with distribution in over 36 countries.",
      myRole: "In an agile team of 5 developers (10 on the project), I resolved code quality issues and created 30+ reusable custom components in React. Developed and updated 10+ APIs using Node.js while optimizing code quality. Implementing new features and revamping existing ones are part of my responsibilities.",
      languages: ["Nuxt", "Node.js","SQL"],
      link: "https://www.linkedin.com/company/the-jay-group-ltd/",
    },

    // {
    //   name: "Web Development Agency Platform",
    //   description:
    //     "Built a full-stack web agency platform that empowers clients to manage projects easily and delivers top-notch web solutions with cutting-edge tools andtechnologies.",
    //   languages: ["Next", "Node", "Express", "MongoDB"],
    //   link: "https://alpha-web-shop-client.vercel.app/",
    // },
    // {
    //   name: "Crypto Whale Tracker",
    //   description:
    //     "The Crypto Whale Tracker is a web application that allows users to keep track of the latest movements and activities of cryptocurrency whales. Cryptocurrency whales are individuals or entities holding large amounts of cryptocurrencies, capable of influencing the market with their trading decisions. This project aims to provide real-time information about these influential players in the crypto market.",
    //   languages: ["HTML", "Css", "JavaScript"],
    //   link: "www.whalesontheblock.com",
    // },
    // {
    //   name: "Biznus Dotcms",
    //   description:
    //     "Biznus Dotcms is a content management system (CMS) project aimed at developing a robust and flexible platform for managing and publishing web content. The project focuses on building a CMS specifically tailored for businesses, providing them with a powerful tool to create, organize, and deliver engaging digital content.",
    //   languages: ["Next", "Scss", "Node", "Express"],
    //   link: "https://biznus-dotcms.vercel.app/",
    // },
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/profilePic.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/profilePic.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML/CSS/Scss", value: 95 },
    { name: "JavaScript", value: 90 },
    { name: "TypeScript", value: 80 },
    { name: "React.JS", value: 90 },
    { name: "Nest.Js", value: 50 },
    { name: "Node", value: 80 },
    { name: "Express", value: 80 },
    { name: "MongoDB", value: 90 },
    { name: "SQL", value: 90 },
    { name: "Material Ui", value: 90 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering  opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "mhamzaubit@gmail.com",
  github: "https://github.com/MuhammadHamza096",
  name: "Muhammad Hamza",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Frontend Developer",
      companylogo:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQIBxgSFRUVGRgVHBgZGRgVHBoZGBUcHRgaGRkmGBofJC4mHR4rIBkeJjgnKy80NTc1HyQ7Qkg0Py40NTEBDAwMEA8QHxISHzYsJCw/PT81OjUxNjQ/NDU3MTQ9NTc3ND02NDQ0NjExNz09NDQ/NDQ0NjU0NjQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQEDCAL/xAA+EAACAQMCAwUGAwcCBgMAAAABAgADBBEFEgYhMQcTQVFhFCIycYGhQnKRFSNSgpKisVOzNWJzssPSJMHC/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQACAgICAwEBAAAAAAAAAAECAxESITETQQQiUaFx/9oADAMBAAIRAxEAPwCARET33kEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBE3PCejDX9eS3ZmVGDlmXG5QqEjGQR8WB9ZNeIOzm20jRK1wK1cmmjMobZhmx7oOF6E4mOW/DDLrfbTHVlce0VjERNmZERAREQEREBERAREQEREBERAREQEREBERAREQEREBE7ra3e7rhKas7NyVVBZj8gJubjgzULa2aq9uyogLMxelyA5nI35+0plnjj4tWmFvqJD2PW3ecQVanglIr9XZcfZGkx7VLr2fhFl8ar00H0bvD9kM1HY9ZtQtrl2Uq29aZDAgqUUsQQeYOanSfHbPc7bS2pfxO7/ANChR/uGefl+/wCRHXP10qoiJxmek4nMREkIiICIiAiIgIiJARESQiIgIiIHfZWdS/ulpUlZ3bO1R1OAWP2BMnj9mr0+Hu/3VTX2K3cBV+I493OfDPP5GRPhrWTw/qguFRXZVZQrMVALcs5APhn9ZavEXaFb6fYhrdqddywUqGIwu1iWJx0yAPrOPfntmcmMdGrHC425KXr0Wtq7IwKspKsp6qwOCD6gidc7ru4N1dvUbq7O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klUVKhtwS7FS2xUKZLPliM5Kg7mPSdem3weo71DVoez16ly4pAAMXZQKZBZSH3JsXkcBnyAATMu33JF+Pq1G1r1GYAO5J5ABmySemINs/tHdlH35xsKnfnrjbjOZk6d3txqq9wNtR2YIEwAu4MDtJ+EBWPPwxnlibmrbXFXV0taQrKy0jS7yqjK7pvd6jgMN6pliqge9tAXqxWXyz63hWTmIy6FHKsCCORBGCD45B6TKudQuK9Lu6lauyjHuO7soI6e6xwCPlN1UppV1h3q4p9xTQU0u8o1wyIEpmqCOh272HkAvPOZreJl2cR3PNWzWqnKnI95i36jOD65iZTKycFlxnMrXUqZrVVRRlmIUDzJOB95lUr+40/dTStWpgMdyo7qu74WyFOCeWM+k+dJ/4tR/6lP/AL1nzqP/ABCp+ep/3mXvm8VWeJzGMBgRO61qrQuUdlDqrKWQ9GUH3h9RkTe3y2VnbMaTLUdMU13jIq7yKgqEcvhXfTI89pjLPreOEzHmc8tHa3VSzrb6bujD8SMyH9QenpM284hvL6lsqXFZlPIqWYKfzAdfrNlciwS2d05uqmoiE5DNXBVUP/QwrZ8SWE5pmwagKjAb8CuUGQu5FCdz48nfc+fBNszuWN83H/FpLPHKO07p6KYR3UeSswH6Azsv0qUrnZVZiwCn3mLYDKHXn8mEztLoqm8t3DVCitTFV0FPLMN4YkhQ4XOFYgDn44m5qNb19Udv/ivl6CuarEIKIoordyWYEkMGBxl+S46mMs5L4hMeZ7RGm7UqgZWKsvMMpIIPoRzBm2PFF8aOz2uvt6fG27+r4vvM23Syro6sVRi1SghHwgM5ejWbzVcFGA/CVM7NNa1r3YYJbLTNwA4uG2stuuwIUywyxActtyd2M+7IyyxvvFOMs9VG0uXpuWV3Bb4iGYFvzEHnOy5rVmAWo1Q5CsA5bmCMqQG8CDkHyM3FmlD9ljIt8dxXLl2xXFxtqbAi7skfBjA29c+9iavUqaudyMmEo25I3DJY0aYcKDzLBy2QOmD5S0yly9IsvHtzaXFxc3KUlq1NzsqKN7AZYhV8eQyRMMuajbiSSeZJ5k58zJjdJb2GvLkWyCleUu7NJssKa1D3vfDcdoXC/EAQc492RrVlpi4Bo7e7KrsA+MDGMVRnlUznd4HqPdxGGUt8Qyx4ntgxETZkREQEREBERATgjM5iBwRmcxEgDznGBjoJzEkcAYnMRA+kc03DAkEEEEciCOYIPgZw7F2JJJJ5knmST1zOIgIiICIiAiIgIiICDzERA7K9ZriuzsSzMSzMepJOSf1nXESAiIkhERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//Z",
      date: "Dec 2020 – July 2021",
    },
    {
      role: "Fullstack Developer",
      companylogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpy-4pUqxt2pYksxC24ztL899kvCZwOHuBOh8S7R1mw9GMUqV5lsRC4Pj_aF0dd6GWKs&usqp=CAU",
      date: "July 2021 – Present",
    },
  ],
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
