import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AboutMePage() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-8 mt-8" >
    
      <h1 className="text-xl w-fit mb-4 font-semibold text-foreground bg-green-300 dark:bg-green-900 px-2 py-0.5 rounded">About Me</h1>
      <Accordion type="single" collapsible className="mb-8">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-base cursor-pointer">What are my main areas of interest?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground transition-all duration-300 ease-in-out">
          I&#39;m deeply interested in backend development, particularly with Java and Spring Boot. I also explore full-stack development using the MERN stack, and I&#39;m keen on learning DevOps and AI/ML implementation in the future. Additionally, I love solving problems and improving my DSA skills.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-base cursor-pointer">What technologies do you work with?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground transition-all duration-300 ease-in-out">
          I work with a variety of technologies, including Java, React, Next.js, Node.js, TypeScript, and databases like MongoDB and PostgreSQL. I also explore functional programming with OCaml and constantly try to improve my skills across different domains.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-base cursor-pointer">Where do I share my knowledge?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground transition-all duration-300 ease-in-out">
          I write technical blogs on Hashnode, focusing on topics like web development, backend engineering, and software best practices. I also contribute to open-source projects and engage with developer communities to learn and grow together.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-base cursor-pointer">What are my future goals?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground transition-all duration-300 ease-in-out">
          I aspire to become a skilled backend developer, mastering Java and Spring Boot while also exploring Go. My long-term goal is to secure a position at a top tech company and contribute meaningfully to the software industry. I also want to grow my presence in open source and technical blogging.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
            <AccordionTrigger className="text-base cursor-pointer">What is my academic performance?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground transition-all duration-300 ease-in-out">
            I have a strong academic record, maintaining a CGPA of 9.81. I believe in a balanced approach—understanding concepts deeply while also applying them in real-world projects.
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
            <AccordionTrigger className="text-base cursor-pointer">What&apos;s unique about me?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground transition-all duration-300 ease-in-out">
            I was actually a medical aspirant! I gave WBJEE just for fun without preparation or even knowing the exam pattern. Due to some misfortune, I performed a bit lower than expected in NEET, but surprisingly, I secured an impressive WBJEE rank of 2871. That&apos;s how a medico turned into an engineer—and I&apos;ve been amazed by this world ever since!
            </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );
}