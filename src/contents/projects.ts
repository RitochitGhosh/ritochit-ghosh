export interface Project {
  title: string;
  description: string;
  technologies: {
    icon: string;
    name: string;
  }[];
  sourceCode?: string;
  deployedUrl?: string;
  thumbnail?: string;
  completedAt: string;
}

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description: "A modern portfolio website built with Next.js and Tailwind CSS",
    technologies: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        name: "Next.js"
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        name: "TypeScript"
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        name: "Tailwind CSS"
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        name: "React"
      }
    ],
    sourceCode: "https://github.com/RitochitGhosh/ritochit-ghosh",
    deployedUrl: "https://ritochit-ghosh-hna6.vercel.app/",
    completedAt: "2025-03"
  },
  {
    title: "Travelia",
    description: "A tour package management-based e-commerce application built in Next.js.",
    technologies: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        name: "Next.js"
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        name: "TypeScript"
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        name: "Tailwind CSS"
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        name: "Zustand"
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
        name: "Vercel"
      }
    ],
    sourceCode: "https://github.com/RitochitGhosh/travelia-server-admin-",
    deployedUrl: "https://vimeo.com/1037069305?share=copy",
    completedAt: "2024-11"
  },
  {
    title: "Games Terminal",
    description: "An interactive terminal-based gaming console with various games available to play.",
    technologies: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        name: "JavaScript"
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        name: "Node.js"
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        name: "NPM"
      }
    ],
    sourceCode: "https://github.com/RitochitGhosh/games_terminal",
    deployedUrl: "https://drive.google.com/file/d/1dWOMZ-eVUgdZBLWV2xJS3Ky5-b34L4P8/view?usp=drive_link",
    completedAt: "2024-04"
  },
  {
    title: "Minimalistic To-Do Application",
    description: "A simple yet effective To-Do application built with React to organize workflow.",
    technologies: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        name: "React"
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        name: "Context API"
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        name: "Local Storage"
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
        name: "Netlify"
      }
    ],
    sourceCode: "https://github.com/RitochitGhosh/Task_manager-PersonalProject-",
    deployedUrl: "https://task-manager-personal-project.vercel.app/",
    completedAt: "2024-06"
  },
  {
    title: "CV Builder",
    description: "A simple UI-based CV generator that asks for necessary details and prepares an online CV.",
    technologies: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        name: "React"
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
        name: "Vercel"
      }
    ],
    sourceCode: "https://github.com/RitochitGhosh/Projects_Web",
    deployedUrl: "https://projects-eyvyzivqa-ritochit-ghoshs-projects.vercel.app/",
    completedAt: "2024-05"
  },
  {
    title: "whispr",
    description: "An anonymous message sharing platform",
    technologies: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        name: "Next.js"
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        name: "TypeScript"
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        name: "Tailwind CSS"
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
        name: "Vercel"
      }
    ],
    sourceCode: "https://github.com/RitochitGhosh/whispr",
    deployedUrl: "https://whispr-cyan.vercel.app/",
    completedAt: "2024-12"
  }
  
  // Add more projects here
]; 