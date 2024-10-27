
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  adobe,
  autodesk,
  blender,
  c,
  cplusplus,
  Mathworks,
  nuke,
  nvidia,
  postgresql,
  python,
  sfx_logo,
  unity,
  unrealengine,
  USDLogo,
  hengine,
  TensorFlow,
} from '/public/icons'




export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at Pfx',
    img: 'assets/review1.png',
    review:
      'Working with Vishal was a fantastic experience. He fabricated our outdated Fx pipeline into a modern, user-friendly UI. His attention to detail and commitment to quality are unmatched. Highly recommend him for productions that are in search of smooth and efficient data flow',
  },
  // {
  //   id: 2,
  //   name: 'Mark Rogers',
  //   position: 'Founder of TechGear Shop',
  //   img: 'assets/review2.png',
  //   review:
  //     'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  // },
  // {
  //   id: 3,
  //   name: 'John Dohsas',
  //   position: 'Project Manager at UrbanTech ',
  //   img: 'assets/review3.png',
  //   review:
  //     'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  // },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of Visual Homes',
    img: 'assets/review4.png',
    review:
      'Vishal was a pleasure to work with. He understood our requirements perfectly and delivered assets that exceeded our expectations. His skills in both scripting and simulation are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'LuminAI - Automated Lighting Setup for Houdini Solaris',
    desc: 'LuminAI is an advanced AI-powered lighting tool designed to streamline the creation of light setups in Houdini’s Solaris context. Leveraging TensorFlow, Python, PDG, and USD, LuminAI intelligently generates optimized lighting environments, enhancing scene depth and atmosphere automatically.',
    subdesc: "Developed for high-demand studio environments, LuminAI integrates seamlessly with Houdini's procedural workflows, allowing artists to automate complex lighting tasks while maintaining creative control and precision.",
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/TSH_converted.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'PDG',
        path: hengine ,
      },
      {
        id: 2,
        name: 'Pyhton',
        path: python,
      },
      {
        id: 3,
        name: 'USD',
        path: USDLogo,
      },
      {
        id: 4,
        name: 'TensorFlow',
        path: TensorFlow,
      },
    ],
  },
  {
    title: 'LiveDoc - Real-Time Google Docs Clone',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  // {
  //   title: 'CarePulse - Health Management System',
  //   desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
  //   subdesc:
  //     'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
  //   href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
  //   texture: '/textures/project/project3.mp4',
  //   logo: '/assets/project-logo3.png',
  //   logoStyle: {
  //     backgroundColor: '#60f5a1',
  //     background:
  //       'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
  //     border: '0.2px solid rgba(208, 213, 221, 1)',
  //     boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
  //   },
  //   spotlight: '/assets/spotlight3.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Horizon - Online Banking Platform',
  //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
  //   subdesc:
  //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
  //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
  //   texture: '/textures/project/project4.mp4',
  //   logo: '/assets/project-logo4.png',
  //   logoStyle: {
  //     backgroundColor: '#0E1F38',
  //     border: '0.2px solid #0E2D58',
  //     boxShadow: '0px 0px 60px 0px #2F67B64D',
  //   },
  //   spotlight: '/assets/spotlight4.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const calculatePrismSizes = (isSmall, isMobile, isTablet) => {
  return {
    prismScale: isSmall ? 0.65 : isMobile ? 0.875 : 1,
    // prismPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    captionScale: isSmall ? 0.3 : isMobile ? .55 : .9,
    captionPosition: isSmall ? [6.3, .2, 0] : isMobile ? [5.2, 1.0, 0] : [1.0, -0.0, 0],
    boxGroupScale : isSmall ? 0.7 : isMobile ? 0.85 : 1.1,
    // boxGroupPosition: isSmall ? [0, -.15, 0] : isMobile ? [5.2, 1.0, 0] : [1.0, -0.0, 0],

  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];

export const experiences = [
  {
      title: "Senior Software Engineer",
      company_name: "Vayvaya Labs",
      // icon: '/assets/framer.svg',
      animation: 'victory',
      iconBg: "#accbe1",
      date: "2023-Present",
      points: [
          "Led a cross-functional team of engineers and VFX specialists to develop cutting-edge procedural city generation for autonomous vehicle simulations, resulting in a 20% improvement in ADAS Level 3 system accuracy.",
          "Generated ₹150 crore in new revenue by establishing strategic partnerships with industry leaders such as NVIDIA and Foretellix, driving business growth and securing long-term contracts.",
          "Pioneered the development of Houdini Digital Assets (HDAs) for synthetic data generation, optimizing asset throughput by 30% and significantly improving project delivery timelines.",
      ],
  },
  {
      title: "VFX Lead",
      company_name: "Double Barrel Films",
      icon: '/assets/figma.svg',
      animation: 'clapping',
      iconBg: "#fbc3bc",
      date: "2022-2023",
      points: [
          "Directed a team of 10 VFX artists, implementing a USD pipeline that reduced render times by 25% and improved visual quality for high-profile VFX productions.",
          "Engineered advanced mathematical solvers for dynamic simulations, driving product quality and increasing client satisfaction, resulting in repeat business worth ₹50 crore.",
          "Partnered with the C-suite to realign project goals with the company's strategic direction, directly contributing to a 15% increase in operational efficiency."
      ],
  },
  {
      title: "Houdini FX Artist",
      company_name: "Sky Dreamers Club",
      icon: '/assets/notion.svg',
      animation: 'salute',
      iconBg: "#a2d2ff",
      date: "2021-2022",
      points: [
          "Collaborated with the creative and technical departments to deliver high-impact VFX solutions for global clients, leading to a 25% increase in customer satisfaction.",
          "Designed and executed advanced simulations (FLIP fluids, PYRO, RBD), leading to a 30% increase in project delivery efficiency while maintaining photorealistic accuracy for commercial campaigns.",
          "Enhanced client relationships by delivering innovative solutions that increased project budgets by 20%."
      ],
  },
  {
      title: "Junior FX Artist",
      company_name: "Starshield Technologies",
      // icon: shopify,
      iconBg: "#b7e4c7",
      date: "2019-2021",
      points: [
          "Led the development of procedural asset models, reducing production costs by 15% through automated workflows and custom toolsets.",
          "Developed custom shaders using VEX and GLSL, enhancing the visual fidelity of interactive content and winning high-profile commercial contracts.",
      ],
  },
];

export const skills = [
  {
      imageUrl: adobe,
      name: "Adobe",
      type: "Design",
  },
  {
      imageUrl: autodesk,
      name: "Autodesk",
      type: "Design",
  },
  {
      imageUrl: blender,
      name: "Blender",
      type: "Design",
  },
  {
      imageUrl: c,
      name: "C",
      type: "Script",
  },
  {
      imageUrl: cplusplus,
      name: "C++",
      type: "Script",
  },
  {
      imageUrl: css,
      name: "CSS",
      type: "Frontend",
  },
  {
      imageUrl: git,
      name: "Git",
      type: "Version Control",
  },
  {
      imageUrl: github,
      name: "GitHub",
      type: "Version Control",
  },
  {
      imageUrl: html,
      name: "HTML",
      type: "Frontend",
  },
  {
      imageUrl: javascript,
      name: "JavaScript",
      type: "Frontend",
  },
  {
      imageUrl: Mathworks,
      name: "Mathworks",
      type: "Tech",
  },
  {
      imageUrl: mongodb,
      name: "MongoDB",
      type: "Database",
  },
  {
      imageUrl: motion,
      name: "Motion",
      type: "Animation",
  },
  {
      imageUrl: mui,
      name: "Material-UI",
      type: "Frontend",
  },
  {
      imageUrl: nextjs,
      name: "Next.js",
      type: "Frontend",
  },
  {
      imageUrl: nodejs,
      name: "Node.js",
      type: "Backend",
  },
  {
      imageUrl: nuke,
      name: "Nuke",
      type: "Composition",
  },
  {
      imageUrl: nvidia,
      name: "Nvidia",
      type: "Tech",
  },
  {
      imageUrl: postgresql,
      name: "Sql",
      type: "Script",
  },
  {
      imageUrl: python,
      name: "Python",
      type: "Script",
  },
  {
      imageUrl: react,
      name: "React",
      type: "Frontend",
  },
  {
      imageUrl: redux,
      name: "Redux",
      type: "State Management",
  },
  {
      imageUrl: sass,
      name: "Sass",
      type: "Frontend",
  },
  {
      imageUrl: sfx_logo,
      name: "SideFX",
      type: "Tech",
  },
  {
      imageUrl: tailwindcss,
      name: "Tailwind CSS",
      type: "Frontend",
  },
  {
      imageUrl: typescript,
      name: "TypeScript",
      type: "Frontend",
  },
  {
      imageUrl: unity,
      name: "Unity",
      type: "Tech",
  },
  {
      imageUrl: unrealengine,
      name: "UE",
      type: "Tech",
  },
  {
      imageUrl: USDLogo,
      name: "USD",
      type: "Script",
  }
];