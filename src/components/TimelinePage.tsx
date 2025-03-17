"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { LinkPreview } from "./ui/link-preview";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

const TechJourneyTimeline = () => {
  const data = [
    {
      title: "December 2023",
      subtitle: "Stepping into the Tech World",
      content: (
        <div className="w-full lg:max-w-4xl xl:max-w-6xl mx-auto">
          <div className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg leading-relaxed tracking-wide mb-8 space-y-4">
            <div>
              Stepped into the tech world with a passion for learning and
              building something new, under the guidance of seniors{" "}
              <span className="mx-1">
                <LinkPreview url="https://swapnoneel.vercel.app/">
                  Swapnoneel Saha
                </LinkPreview>
              </span>
              ,{" "}
              <span className="mx-1">
                <LinkPreview url="https://www.arindammajumder.com/">
                  Arindam Majumder
                </LinkPreview>
              </span>{" "}
              and{" "}
              <span className="mx-1">
                <LinkPreview url="https://itzarnabpal.vercel.app/">
                  Arnab Pal
                </LinkPreview>
              </span>{" "}
              and a supportive community.
            </div>

            <div>
              During this time, I transitioned from basic C/C++ knowledge to
              actively solving basic DSA problems on{" "}
              <span className="mx-1">
                <LinkPreview url="https://leetcode.com/u/ghosh_ritochit/">
                  LeetCode
                </LinkPreview>
              </span>{" "}
              and contributing to open source. With the guidance of seniors, I
              explored GitHub, participated in MAKATHON, and completed a Google
              Cloud Computing course.
            </div>

            <div>
              I built few minor projects with raw HTML, CSS. Switched from C to
              Java for efficiency. Socializing and learning in public became a
              priority as I customized my social accounts and began
              #100DaysOfCode.
            </div>

            <div>
              Following Kunal Kushwaha&apos;s Java tutorials helped me grasp
              concepts better, and advice from a relative pushed me to explore
              domain specialization for future growth.
            </div>
          </div>

          <div className="mb-8">
            <div className="flex gap-3 items-center text-muted-foreground text-sm md:text-base mb-2">
              <BadgeCheck className="size-6 text-blue-500" /> Started learning
              HTML, CSS, and JavaScript
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-sm md:text-base mb-2">
              <BadgeCheck className="size-6 text-blue-500" /> Joined the
              <LinkPreview url="https://www.linkedin.com/company/the-async-devs/?originalSubdomain=in">
                Async Devs
              </LinkPreview>
              community
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-sm md:text-base mb-2">
              <BadgeCheck className="size-6 text-blue-500" /> Attended weekly
              coding sessions
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
              width={100}
              height={100}
              className="rounded-xl h-24 md:h-40 lg:h-48 w-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg transition-transform hover:scale-105"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
              width={100}
              height={100}
              className="rounded-xl h-24 md:h-40 lg:h-48 w-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg transition-transform hover:scale-105"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              width={100}
              height={100}
              className="rounded-xl h-24 md:h-40 lg:h-48 w-full bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg transition-transform hover:scale-105"
            />
            <Image
              src="/images/tech/async-devs.jpeg"
              alt="Async Devs"
              width={100}
              height={100}
              className="rounded-xl h-24 md:h-40 lg:h-48 w-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg transition-transform hover:scale-105"
            />
          </div>
        </div>
      ),
    },
    {
      title: "March 2024",
      subtitle: "Focusing on DSA & Exploring Development",
      content: (
        <div className="w-full lg:max-w-4xl xl:max-w-6xl mx-auto">
          <div className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg leading-relaxed tracking-wide mb-8 space-y-4">
            <div>
              I started solving LeetCode problems daily on coding platforms like
              LeetCode and GFG, following Striver aka Raj Vikram Aditya&apos;s
              DSA course on{" "}
              <span className="mx-1">
                <LinkPreview url="https://takeuforward.org/">
                  Take U Forward
                </LinkPreview>
              </span>{" "}
              and completed 100+ problems on LeetCode. This practice helped me
              strengthen my problem-solving skills and gain confidence in DSA.
            </div>

            <div>
              First semester exams were around the corner, where I managed to
              secure a 9.89 GPA. During this time, I also built a few basic
              frontend projects using HTML, CSS, and JavaScript, and even
              published two npm packages, exploring the open-source ecosystem.
            </div>

            <div>
              Under the guidance of amazing seniors, I started learning backend
              development with Node.js and Express, expanding my development
              skills beyond frontend technologies. I also contributed to
              open-source projects, gaining hands-on experience with
              collaborative development.
            </div>
          </div>

          <div className="mb-8">
            <div className="flex gap-3 items-center text-muted-foreground text-sm md:text-base mb-2">
              <BadgeCheck className="size-6 text-blue-500" /> Focused on Data
              Structures & Algorithms
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-sm md:text-base mb-2">
              <BadgeCheck className="size-6 text-blue-500" /> Solved 100+
              problems on LeetCode
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-sm md:text-base mb-2">
              <BadgeCheck className="size-6 text-blue-500" /> Built basic
              frontend projects and npm packages
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            <Image
              src="/images/tech/dsa.jpg"
              alt="dsa"
              width={100}
              height={100}
              className="rounded-xl h-24 md:h-40 lg:h-48 w-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg transition-transform hover:scale-105"
            />
            <Image
              src="/images/tech/leetcode1.png"
              alt="leetcode"
              width={100}
              height={100}
              className="rounded-xl h-24 md:h-40 lg:h-48 w-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg transition-transform hover:scale-105"
            />
            <Image
              src="/images/tech/projects.jpeg"
              alt="projects"
              width={100}
              height={100}
              className="rounded-xl h-24 md:h-40 lg:h-48 w-full bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg transition-transform hover:scale-105"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              alt="npm packages"
              width={100}
              height={100}
              className="rounded-xl h-24 md:h-40 lg:h-48 w-full bg-accent flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg transition-transform hover:scale-105"
            />
          </div>
        </div>
      ),
    },
    {
      title: "June 2024",
      subtitle: "First Open Source Contribution & Backend Learning",
      content: (
        <div className="w-full lg:max-w-4xl xl:max-w-6xl mx-auto">
          <div className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg leading-relaxed tracking-wide mb-8 space-y-4">
            <div>
              This period marked my first meaningful open source contribution to
              the{" "}
              <span className="mx-1">
                <LinkPreview url="https://makaut-buddy.vercel.app/">
                  MAKAUT Buddy
                </LinkPreview>
              </span>{" "}
              project, where I helped build features that simplify university
              resources access for students. The positive feedback from users
              motivated me to deepen my involvement in open source.
            </div>

            <div>
              I expanded my skill set by diving into React and backend
              development with Node.js and Express. Building RESTful APIs and
              connecting them to frontend applications gave me a comprehensive
              understanding of full-stack development. I also began exploring
              database technologies like MongoDB and PostgreSQL.
            </div>

            <div>
              Academically, I maintained excellence with a 9.81 GPA in my first
              semester. I balanced coursework with personal projects, applying
              theoretical concepts to practical applications and reinforcing my
              learning through hands-on experience.
            </div>
          </div>

          <div className="mb-8">
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
              <BadgeCheck className="size-6 text-blue-500" /> Contributed to
              MAKAUT Buddy
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
              <BadgeCheck className="size-6 text-blue-500" /> Learned React &
              Backend Development
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
              <BadgeCheck className="size-6 text-blue-500" /> Achieved 9.89 GPA
              in 1st Semester
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
              <BadgeCheck className="size-6 text-blue-500" /> Explored database
              technologies
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              width={100}
              height={100}
              className="rounded-xl h-24 md:h-40 lg:h-48 w-full bg-black dark:bg-white flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg transition-transform hover:scale-105"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              width={100}
              height={100}
              className="rounded-xl h-24 md:h-40 lg:h-48 w-full  flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg transition-transform hover:scale-105"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              width={100}
              height={100}
              className="rounded-xl h-24 md:h-40 lg:h-48 w-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg transition-transform hover:scale-105"
            />
            <Image
              src="/images/tech/makaut-buddy.svg"
              alt="makaut-buddy"
              width={100}
              height={100}
              className="rounded-xl h-24 md:h-40 lg:h-48 w-full bg-accent flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg transition-transform hover:scale-105"
            />
          </div>
        </div>
      ),
    },
    {
      title: "September 2024",
      subtitle: "Freelancing & Competitive Coding",
      content: (
        <div className="w-full lg:max-w-4xl xl:max-w-6xl mx-auto">
          <div className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg leading-relaxed tracking-wide mb-8 space-y-4">
            <div>
              This month was a breakthrough in my journey as I secured my first
              freelance opportunity in technical blogging. Writing in-depth
              articles about web development and backend technologies not only
              improved my technical knowledge but also enhanced my ability to
              explain complex concepts clearly.
            </div>
            <div>
              In parallel, I dedicated time to mastering Next.js, pushing my
              frontend skills to a more advanced level. Within a week, I built a
              production-ready application that significantly strengthened my
              portfolio.
            </div>
            <div>
              Additionally, I actively participated in coding competitions.
              Competing with skilled programmers helped me refine my
              problem-solving abilities and improve my efficiency in writing
              optimized algorithms.
            </div>
          </div>
          <div className="mb-8">
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
              <BadgeCheck className="size-6 text-blue-500" /> Secured a
              freelance opportunity (technical blogging)
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
              <BadgeCheck className="size-6 text-blue-500" /> Learned Next.js
              within a week
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
              <BadgeCheck className="size-6 text-blue-500" /> Participated in
              coding contests
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              alt="Next.js"
              width={100}
              height={100}
              className="rounded-xl h-24 md:h-40 lg:h-48 w-full bg-black dark:bg-white shadow-lg transition-transform hover:scale-105"
            />
            <Image
              src="/images/tech/hashnode.webp"
              alt="hashnode"
              width={100}
              height={100}
              className="rounded-xl h-24 md:h-40 lg:h-48 w-full bg-accent flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg transition-transform hover:scale-105"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
              alt="Competitive Coding"
              width={100}
              height={100}
              className="rounded-xl h-24 md:h-40 lg:h-48 w-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg transition-transform hover:scale-105"
            />
            
          </div>
        </div>
      ),
    },
   
  ];

  return (
    <div className="w-full max-w-[95%] lg:max-w-[85%] mx-auto mt-12 ">
      <div className="flex flex-col justify-center items-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
          My Journey Through Tech
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-6">
          My tech journey so far in a nutshell, amid the context switching
          between Development, Academics and DSA, and in the chaos of an amazing
          college life with a lot of fun and memories along with some amazing
          friends.
        </p>
      </div>
      <Timeline data={data} />
    </div>
  );
};

export default TechJourneyTimeline;
