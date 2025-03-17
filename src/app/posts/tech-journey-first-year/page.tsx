"use client";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function TechJourneyFirstYear() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/posts" className="hover:text-gray-900">
          Posts
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Tech Journey: How I spent my First Year ? 🤔</span>
      </nav>

      <Image
        src="/images/posts/tech-journey-two.png"
        alt="Tech Journey First Year"
        width={800}
        height={400}
        className="w-full h-48 sm:h-[400px] object-contain rounded-lg mb-8"
        priority
      />

      {/* Title */}
      <h1 className="title text-4xl font-bold mb-4">
        Tech Journey: How I spent my First Year ? 🤔
      </h1>
      <div className="flex flex-wrap gap-x-2 gap-y-1 justify-start items-center py-4 sm:py-8">
        <Avatar>
          <AvatarImage src="/images/authors/ritochit.jpeg" />
          <AvatarFallback>RG</AvatarFallback>
        </Avatar>
        <span className="text-gray-500 font-semibold">Ritochit Ghosh</span>
        <Calendar className="size-4" /> October 22, 2024
      </div>

      {/* Introduction */}
      <div className="border-l-4 border-blue-500 pl-4 mb-8">
        <h3 className="text-xl font-medium">Introduction</h3>
        <p className="mt-2 text-gray-700">
          Hello everyone, I&apos;m Ritochit Ghosh, currently in the second year
          of my four-year BTech CS journey. In this blog, I&apos;ll reflect on
          how I spent my first year in college. This reflection will not only
          serve as a way for me to look back years from now, but it will also
          provide valuable insights for those looking to make the most of their
          first year.
        </p>
        <p className="mt-2 text-gray-700">
          Why should you listen to me? I believe I&apos;ve utilized my first
          year well, managing to acquire valuable skills while maintaining a
          solid SGPA of over 9.5. So, let&apos;s dive into my journey!
        </p>
        <p className="mt-2 text-gray-700">
          For simplicity and better understanding, I&apos;ve divided this
          journey into four quarters.
        </p>
      </div>

      {/* The Fresh Start */}
      <div className="border-l-4 border-green-500 pl-4 mb-8">
        <h3 className="text-xl font-medium">The Fresh Start</h3>
        <p className="mt-2 text-gray-700">
          My BTech journey began unexpectedly. I was initially a dedicated NEET
          aspirant, aiming to secure a spot in a prestigious government medical
          college. However, due to an off day during the NEET exam, things
          didn&apos;t go as planned, and I found myself enrolled in this course
          through WBJEE.
        </p>
        <p className="mt-2 text-gray-700">
          With little knowledge of the tech world, I started learning C language
          based on recommendations from relatives and online resources. This was
          followed by a basic introduction to data structures and algorithms in
          C. I wouldn&apos;t say I mastered DSA at this point, but I gained a
          general understanding of how real-life problems can be solved more
          effectively.
        </p>
        <p className="mt-2 text-gray-700">
          During this phase, I was fortunate to receive guidance and support
          from <span className="text-blue-600">@Swapnoneel Saha</span> and{" "}
          <span className="text-blue-600">@Arindam Majumder</span>, who
          conducted regular online sessions to make our learning journey
          smoother.
        </p>
      </div>

      {/* The Process */}
      <div className="border-l-4 border-yellow-500 pl-4 mb-8">
        <h3 className="text-xl font-medium">The Process</h3>
        <p className="mt-2 text-gray-700">
          After getting accustomed to the college academics and understanding
          that it is very different from regular school-level studies, I started
          focusing on skill development, except when internals were near 🙂
          (referred to as CAs in our university).
        </p>
        <p className="mt-2 text-gray-700">
          Within a few months, I gained a solid understanding of HTML, CSS,
          Tailwind CSS, and JS, and made a few front-end contributions to an
          open-source project maintained by our mentors. I was also actively
          practicing DSA with Java on LeetCode, where I had solved 100+ problems
          by this time.
        </p>
      </div>

      {/* The Slow Burn */}
      <div className="border-l-4 border-red-500 pl-4 mb-8">
        <h3 className="text-xl font-medium">The Slow Burn</h3>
        <p className="mt-2 text-gray-700">
          It is the most crucial phase of my one-year long journey. This is the
          phase where many of us tend to lose off track. As the initial
          motivation fades away by this time, the only driving force to keep us
          actively working on ourselves is our inner desire and dedication.
        </p>
        <p className="mt-2 text-gray-700">
          During this period, progress was a bit slow, I learned ReactJS, got
          introduced to backend using nodeJS, did some collaborative projects,
          built two npm packages and practised leetcode regularly. Although
          progress was slow, I remained consistent, making small improvements
          every day.
        </p>
      </div>

      {/* The Pay-off */}
      <div className="border-l-4 border-purple-500 pl-4 mb-8">
        <h3 className="text-xl font-medium">The Pay-off</h3>
        <p className="mt-2 text-gray-700">
          At that time, I didn&apos;t have a personal portfolio website, so with
          the knowledge I had, I decided to build one. I had solved 300+
          LeetCode problems, written a few blogs, and built several presentable
          projects.
        </p>
        <p className="mt-2 text-gray-700">
          Out of nowhere, at that very time, my friend{" "}
          <Link href="https://x.com/_SagarSingh___" className="text-blue-600">@Sagar Singh</Link> presented me with
          a freelance opportunity where I had to prepare a Next.js project
          outline, implementing RBAC policy using Permit.io.
        </p>
      </div>

      {/* Conclusion */}
      <div className="border-l-4 border-gray-500 pl-4 mb-8">
        <h3 className="text-xl font-medium">Conclusion</h3>
        <p className="mt-2 text-gray-700">
          That&apos;s how my year as a fresher in the tech world ended. It was a
          joyous experience with a lot of technical exposure, thanks to the
          constant guidance of{" "}
          <Link href="https://x.com/swapnoneel123" className="text-blue-600">@Swapnoneel Saha</Link>,{" "}
          <Link href="https://x.com/Arindam_1729" className="text-blue-600">@Arindam Majumder</Link>,{" "}
          <Link href="https://x.com/ddebajyati" className="text-blue-600">@Debajyati Dey</Link>, and{" "}
          <Link href="https://x.com/itzarnabpal2" className="text-blue-600">@Arnab Pal</Link>.
        </p>
        <p className="mt-2 text-gray-700">
          Lastly, I took a well-deserved two-week break and enjoyed a wonderful
          trip to Rajasthan, recharging myself for the exciting challenges
          ahead. With renewed energy and motivation, I&apos;m looking forward to
          what the next year holds, ready to explore every opportunity and help
          others along the way.
        </p>
        <p className="mt-4 text-gray-700">
          With this, this blog comes to an end. Thank you for dedicating your
          precious time to reading this post. I hope this seems valuable or adds
          some new insight to the readers. Stay safe until next time. Again,
          Thank you. 😊
        </p>
      </div>
    </div>
  );
}
