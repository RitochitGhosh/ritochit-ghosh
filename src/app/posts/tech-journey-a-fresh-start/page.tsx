"use client";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Page() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto font-sans flex flex-col mt-12 sm:mt-24">
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
        <span className="text-gray-900">My Tech Journey</span>
      </nav>

      {/* Header Image */}
      <Image
        src="/images/posts/tech-journey.png"
        alt="Tech Journey"
        width={800}
        height={400}
        className="w-full h-48 sm:h-[400px] object-contain rounded-lg mb-8"
        priority
      />

      {/* Title */}
      <h1 className="title text-4xl font-bold mb-4">
        My Tech Journey: From NEET to Computer Science
      </h1>
      <div className="flex flex-wrap gap-x-2 gap-y-1 justify-start items-center py-4 sm:py-8">
        <Avatar>
          <AvatarImage src="/images/authors/ritochit.jpeg" />
          <AvatarFallback>RG</AvatarFallback>
        </Avatar>
        <span className="text-gray-500 font-semibold">Ritochit Ghosh</span>
        <Calendar className="size-4" /> December 15, 2023
      </div>

      {/* Introduction */}
      <p className="mt-3 text-gray-700 leading-relaxed">
        Hello to everyone reading my post! This marks my first Hashnode article
        of my Tech Journey Series, and through this piece, I want to share not
        only my journey in the tech world but also the academic path that led me
        to pursue a BTech in Computer Science at Maulana Abul Kalam Azad
        University of Technology, West Bengal.
      </p>

      <h2 className="text-2xl font-semibold mt-8">
        Academic Journey: A Twist of Fate
      </h2>
      <p className="mt-3 text-gray-700 leading-relaxed">
        I am Ritochit Ghosh, currently in the first year of my four-year BTech
        course in Computer Science and Engineering. My academic journey took an
        unexpected turn. Initially, I was a NEET aspirant with little prior
        knowledge about computer science. Despite dedicating two years to NEET
        preparation and performing well in mock tests, the actual NEET paper
        proved to be a significant challenge. I found myself under immense
        pressure and nervousness, resulting in a rank of something around
        108,000 with a score of 500 out of 720. Interestingly, I had not planned
        on taking JEE Mains or any other engineering entrance exams. However, my
        father, perhaps foreseeing an opportunity, filled out the WBJEE
        examination form for me. At that time, I had no familiarity with
        engineering entrance exams or their structure. I remember solving a few
        Physics and Chemistry PYQs for the JEE main paper. My exposure to
        mathematics was limited to the higher secondary examination, where I
        secured 92% from the WBCHSE board. I approached the WBJEE examination on
        July 1 with a positive mindset, treating it as a mock test before the
        NEET. The physics and chemistry sections were manageable, as they were
        based on concepts that were already clear to me. However, in the
        mathematics section, I faced challenges, having solved only a few
        questions due to a lack of practice since my higher secondary
        examination. Until the release of the results, engineering had not
        crossed my mind as a career option. I was prepared to reattempt the NEET
        paper, feeling demotivated and disheartened after what I considered the
        worst exam of my life. However, when I realized my performance in WBJEE
        would assure me a place in a government engineering college, I
        participated in the counseling process. Though I was initially against
        it, after several discussions with my relatives and friends, I
        considered shifting my focus from medical, as that would be a too-long
        path for establishing a career.
        <br />
        <br />
        Thus, this is how I got into my present college...
      </p>

      {/* Weekly Journey Section */}
      <h2 className="text-2xl font-semibold mt-8">My 12-Week Journey</h2>

      {/* Week sections */}
      <div className="space-y-6 mt-4">
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="text-xl font-medium">
            Week 1: Excitement and Beginning
          </h3>
          <div className="mt-2 text-gray-700">
            In the first week, I was excited to start my exciting new journey in
            college. Before diving into college life, all I knew was the C and
            C++ languages, HTML, and some basic CSS. I started to revise the C
            language by solving some problems, and then I started DSA in the C
            language. In the first week itself, I made some wonderful friends at
            the college who are on the same path, share similar objectives, and
            have a similar mindset of excelling in academics.
          </div>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-medium">
            Week 2: Senior Guidance and Roadmap
          </h3>
          <div className="mt-2 text-gray-700">
            One of the best things in this journey happened in the second week
            itself, which, in turn, played a major role in speeding up the
            journey. I and my classmates got introduced to our seniors{" "}
            <LinkPreview url="https://www.arindammajumder.com/">
              Arindam Majumder
            </LinkPreview>{" "}
            &{" "}
            <LinkPreview url="https://swapnoneel.vercel.app/">
              Swapnoneel Saha
            </LinkPreview>
            , who are currently in their 2nd year of college. Unlike other
            colleges, where freshmen introduce themselves to the seniors, our
            seniors introduced themselves to us first and provided a roadmap
            about how to look forward in the first year. They also guided us in
            many ways.
          </div>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="text-xl font-medium">
            Week 3: MAKATHON & Google Cloud Computing
          </h3>
          <div className="mt-2 text-gray-700">
            In the 3rd week, we attended the MAKATHON (the in-house hackathon)
            competition, where we were astonished by the innovative ideas and
            their solutions. Attending such competitions inspires us to think
            more clearly and technically about implementing our knowledge
            practically to solve some real-world problems. In the same week, our
            Google Developer&apos;s Student Club presented us with a chance to
            upskill ourselves in Google Cloud Computing through a course made by
            Google. I, along with my friends, grabbed that opportunity and
            completed that course within the next 3 weeks.
          </div>
        </div>

        <div className="border-l-4 border-yellow-500 pl-4">
          <h3 className="text-xl font-medium">
            Week 4: Community Building and Learning Sessions
          </h3>
          <div className="mt-2 text-gray-700">
            In the fourth week, I along with my friends, under the guidance of
            our seniors, started to work as a community, where they taught us
            various technical things in great detail and simple language via
            online sessions.
          </div>
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-xl font-medium">
            Week 5: Introduction to Open Source
          </h3>
          <div className="mt-2 text-gray-700">
            In the first session of our community, we were introduced to open
            source. I came to know about what open source is, what the benefits
            of contributing to it are, and most importantly, how to contribute
            to open source. I also learned about Git and GitHub in this very
            week.
          </div>
        </div>

        <div className="border-l-4 border-pink-500 pl-4">
          <h3 className="text-xl font-medium">
            Week 6: Contribution to open-source projects
          </h3>
          <div className="mt-2 text-gray-700">
            After understanding how to contribute to open source, we started to
            work as a team on a project started by our seniors. That means,
            within 2 months of our college life, we are contributing to an
            open-source project ourselves.
          </div>
        </div>

        <div className="border-l-4 border-orange-500 pl-4">
          <h3 className="text-xl font-medium">
            Week 7: GitHub Exploration, Problem Solving, and Project Development
          </h3>
          <div className="mt-2 text-gray-700">
            As we got introduced and became a little familiar with working at
            GitHub, our seniors encouraged us to build a project ourselves so
            after a few group discussions we started to work on a project, which
            primarily will be made with HTML & CSS. I initially made the draft
            or structure of the project which aims to guide the student to find
            their career path themselves.
          </div>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="text-xl font-medium">Week 8: Problem Solving</h3>
          <div className="mt-2 text-gray-700">
            By this time I had almost completed the data structure & algorithms
            in C language. I under the guidance of my seniors have started to
            solve leetcode problems. As I was out of the station during this
            week due to the Diwali festival couldn&apos;t make much progress and
            just solved 3 leetcode problems. While solving leetcode problems
            initially with C language I found it very lengthy and difficult. But
            when that same problem was being solved very easily in Java, with
            the recommendation of our senior Swapnoneel Saha I decided to switch
            to Java.
          </div>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-medium">
            Week 10: Socializing & Learning in Public
          </h3>
          <div className="mt-2 text-gray-700">
            This week our senior Arindam Majumder explained to us the importance
            of socializing to build connections with the concerned so we
            customized our social account. Here are my social accounts:{" "}
            <LinkPreview
              url="https://twitter.com/18Ritochit"
              className="text-blue-600 hover:underline"
            >
              Twitter
            </LinkPreview>{" "}
            and{" "}
            <LinkPreview
              url="https://www.linkedin.com/in/ritochit-ghosh-3861372a0/"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </LinkPreview>
          </div>
        </div>

        <div className="border-l-4 border-yellow-500 pl-4">
          <h3 className="text-xl font-medium">
            Week 11: Learned the basics of Java
          </h3>
          <div className="mt-2 text-gray-700">
            This week I consistently learned the basics of Java and solved a lot
            of leetcode problems. I am following Kunal Kushwaha&apos;s playlist
            to learn Java. He explained the concepts so clearly that if one
            follows his lectures hardly he/she will have any doubts. I also find
            solving the leetcode problems became quite easy after following his
            simple approach i.e., breaking the problem into simple parts.
          </div>
        </div>

        <div className="border-l-4 border-orange-500 pl-4">
          <h3 className="text-xl font-medium">Week 12: Exploring a New Way</h3>
          <div className="mt-2 text-gray-700">
            I continued to follow Kunal Kushwaha&apos;s lectures along with
            solving leetcode problems. Here&apos;s my{" "}
            <LinkPreview
              url="https://leetcode.com/ghosh_ritochit/"
              className="text-blue-600 hover:underline"
            >
              LeetCode profile
            </LinkPreview>
            . This week I talked to one of my relatives to get some more
            insights and he along with many other recommendations advised me to
            start following any particular domain from now. I also got a lot of
            useful tips from him.
            <br />
            <br />
            That&apos;s it.
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="mt-8 mb-12">
        <div className="text-gray-700 leading-relaxed">
          This is the tech journey I have covered so far in these 3 months since
          I came to college. My college life started on 11th September and now
          it&apos;s 15th December. I will continue to share my journey along the
          process of traveling on this tech path so that whenever I get tired, I
          will get immense energy, as it will work as a mirror showing my
          journey in a brief article. Thank you for dedicating your precious
          time to reading this post. I hope this seems valuable or adds some new
          insight to the readers. Stay safe until next time. Again, Thank you.
          😊
        </div>
      </div>
    </div>
  );
}
