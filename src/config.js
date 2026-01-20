// Site config - fill in your personal information here
// Note: text content (titles, descriptions, etc.) is managed in the language files under src/locales/
// Edit both src/locales/en.js and src/locales/zh.js to add multilingual content

export const siteConfig = {
  // Basic info (static and not language-specific)
  name: "Guameezia", // your name
  title: "Personal Website", // site title
  description: "This is my personal website, welcome!", // site description
  
  // Contacts (links are language-agnostic)
  contact: {
    gmail: "guameezia@gmail.com", // Gmail address
    eduEmail: "Haohan.Lin24@student.xjtlu.edu.cn", // School email (.edu) — replace with your actual address
    github: "https://github.com/guameezia",
    linkedin: "https://www.linkedin.com/in/haohan-lin-a861aa359/",
    instagram: "https://www.instagram.com/guameezia/",
    // You can add more social links
  },
  
  // About - skills list (tech terms usually need no translation)
  about: {
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "CSS",
      "HTML",
      "Python",
      "Java",
      "C/C++",
      "SQL",
      "LaTeX",
      "Matlab",


      // Add your skills here
    ],
  },
  
  // Projects - base data (image, links, tags)
  // Note: project titles/descriptions live in src/locales/en.js and src/locales/zh.js
  // Project IDs must match project1, project2, project3 in locale files
  projects: [
    {
      id: 1, // matches project1 in locales
      image: "https://raw.githubusercontent.com/Guameezia/2025_SURF_Poster/35d713459323f9db14ea6cba9d27d08233685906/Images/SVD.jpg", // replace with your project image URL
      link: "https://github.com/Guameezia/2025_SURF_Poster",
      tags: ["LaTeX", "Python", "PyTorch"], // tech tags
    },
    // {
    //   id: 2, // matches project2 in locales
    //   image: "https://via.placeholder.com/400x300", // replace with your project image URL
    //   link: "https://github.com/yourusername/project2",
    //   tags: ["Vue", "TypeScript"],
    // },
    // {
    //   id: 3, // matches project3 in locales
    //   image: "https://via.placeholder.com/400x300", // replace with your project image URL
    //   link: "https://github.com/yourusername/project3",
    //   tags: ["Node.js", "Express"],
    // },
    // Add more projects here
    // When adding a project, also add matching translations in src/locales/en.js and src/locales/zh.js
  ],
};
