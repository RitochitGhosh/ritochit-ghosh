import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";

export default function Intro() {
  return (
    <div className="flex flex-col gap-8 mb-12">
      <section className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 md:gap-16 pb-12 border-b border-muted-foreground/20">
        <ContentSection />
        <ProfileImage />
      </section>
      <section className="flex flex-col lg:flex-row gap-8">
        <TechStack />
        <LeetCodeStats />
      </section>
    </div>
  );
}

function ContentSection() {
  return (
    <div className="flex-1 mt-6 md:mt-0 space-y-8">
      <div>
        <h1 className="title">
          Hey, I&#39;m <span className="text-primary">Ritochit.</span>
        </h1>
        <div className="text-muted-foreground text-sm mt-4 sm:text-base font-light leading-relaxed dark:text-gray-300">
          I&#39;m a{" "}
          <span className="bg-green-300 dark:bg-green-900 px-2 py-0.5 rounded">
            second-year BTech student
          </span>{" "}
          at
          <span className="font-semibold">
            {" "}
            Maulana Abul Kalam Azad University of Technology
          </span>
          , passionate about learning and exploring new technologies. I enjoy
          diving deep into my core subjects, writing technical blogs on{" "}
          <div className="inline-block">
            <LinkPreview url="https://hashnode.com/">
             {" "}
              Hashnode
            </LinkPreview>{" "}
          </div>{" "}
          and solving problems on{" "}
          <div className="inline-block">
            {" "}
            <LinkPreview url="https://leetcode.com/u/ghosh_ritochit/">
              LeetCode
            </LinkPreview>{" "}
          </div>
          .
          <br />
        </div>
      </div>
    </div>
  );
}

function ProfileImage() {
  return (
    <div className="relative w-[175px] h-[175px] md:w-[200px] md:h-[200px]">
      <Image
        className="rounded-xl grayscale transition-all duration-300 hover:grayscale-0 hover:shadow-xl dark:shadow-primary/25"
        src="/images/authors/ritochit.jpeg"
        alt="Ritochit Ghosh"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

function TechStack() {
  const techCategories = [
    {
      title: "Web Development",
      technologies: [
        {
          name: "ReactJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "NextJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Prisma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "TailwindCSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Framer Motion",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
        },
        {
          name: "Markdown",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
        },
        
      ],
    },
    {
      title: "Languages",
      technologies: [
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "C",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        },
        {
          name: "C++",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "OCaml",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
      ],
    },
  ];

  // Add this helper function to determine which icons need inversion in dark mode
  const shouldInvertInDark = (techName: string) => {
    return ["Express", "Framer Motion", "NextJS", "Prisma"].includes(techName);
  };

  return (
    <div className="space-y-4 lg:w-1/2 w-full">
      <h2 className="text-xl font-semibold text-foreground bg-green-300 dark:bg-green-900 px-2 py-0.5 rounded">
        Tech Stack
      </h2>
      {techCategories.map((category) => (
        <div key={category.title} className="space-y-2">
          <h3 className="text-lg font-medium text-primary">{category.title}</h3>
          <div className="grid grid-cols-4 gap-3">
            {category.technologies.map((tech) => (
              <Tooltip key={tech.name}>
                <TooltipTrigger>
                  <div className="flex items-center justify-center p-2 rounded-lg bg-secondary/50 dark:bg-secondary/25 hover:bg-secondary/75 dark:hover:bg-secondary/50 transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={25}
                      height={25}
                      className={`transition-transform duration-300 c ${
                        shouldInvertInDark(tech.name) ? "dark:invert" : ""
                      }`}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>{tech.name}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function LeetCodeStats() {
  return (
    <div className="lg:w-1/2 w-full h-full flex flex-col">
      <h2 className="text-xl font-semibold text-foreground mb-4 bg-green-300 dark:bg-green-900 px-2 py-0.5 rounded">
        LeetCode Stats
      </h2>
      <Image
        src="https://leetcard.jacoblin.cool/ghosh_ritochit?ext=heatmap&theme=light"
        alt="Ritochit's LeetCode Stats"
        className="w-full h-full object-contain rounded-lg dark:hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
        width={800}
        height={400}
        priority
      />
      <Image
        src="https://leetcard.jacoblin.cool/ghosh_ritochit?ext=heatmap&theme=dark"
        alt="Ritochit's LeetCode Stats"
        className="w-full h-full object-contain rounded-lg hidden dark:block transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
        width={800}
        height={400}
        priority
      />
    </div>
  );
}
