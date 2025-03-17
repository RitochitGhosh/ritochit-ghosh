"use client";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";
import { CodeBlock } from "@/components/CodeBlock";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto font-sans flex flex-col mt-12 sm:mt-24">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:text-gray-900">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/posts" className="hover:text-gray-900">Posts</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Demarking Markdown</span>
      </nav>

      {/* Header Image */}
      <Image
        src="/images/posts/markdown.png"
        alt="Markdown Guide"
        width={800}
        height={400}
        className="w-full h-48 sm:h-[400px] object-contain rounded-lg mb-8"
        priority
      />

      {/* Title */}
      <h1 className="title text-4xl font-bold mb-4">Demarking Markdown : Simplifying Text Formatting for the Web</h1>
      <div className="flex flex-wrap gap-x-2 gap-y-1 justify-start items-center py-4 sm:py-8">
        <Avatar>
          <AvatarImage src="/images/authors/ritochit.jpeg" />
          <AvatarFallback>RG</AvatarFallback>
        </Avatar>
        <span className="text-gray-500 font-semibold"> Ritochit Ghosh </span>
        <Calendar className="size-4" /> March 10, 2025
      </div>

      <h1 className="text-3xl font-bold tracking-tighter mt-8">Introduction</h1>

      {/* Introduction */}
      <p className="mt-3 text-gray-700 leading-relaxed">
        
        Markdown is now one of the world&#39;s most popular markup languages. Created by <strong className="bg-green-300 px-1 rounded dark:bg-green-900">John Gruber in 2004 </strong>, it is a lightweight markup language that can be used to format a plain text document.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8">What is Markdown?</h2>
      <p className="mt-3 text-gray-700 leading-relaxed">
      Markdown is a lightweight markup language. It is different than that of all the other text editors. For example, in MS Word, there are several buttons available to format an article but markdown contains special syntaxes for editing your text, which you have to add inline while writing your text. A markdown formatted file is created using markdown. Markdown formatting elements can be added to a plaintext file using a text editor application. There are also various applications & websites for markdown, Dillinger, is one of those. Markdown is commonly used for formatting text on the web, especially in documentation, README files, forums, and messaging platforms as it offers key features like simplicity, readability, and portability.
      </p>
      
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
        Markdown syntax is designed to be readable and unobtrusive, so the text in Markdown files can be read even if it isn&#39;t rendered.<br />— Gruber
      </blockquote>

      <Image 
        src="/images/posts/markdown-1.png" 
        alt="Markdown Guide" 
        width={800} 
        height={400} 
        className="w-full h-48 sm:h-[400px] object-contain rounded-lg my-8" 
        priority 
      />

      <h1 className="text-3xl font-bold tracking-tighter mt-8">How does Markdown work?</h1>
      <p className="mt-3 text-gray-700 leading-relaxed">
      When you write a markdown formatted file the text is stored as a plaintext file having .md or .markdown extension. The markdown processor then takes the .md file as an input and outputs it to HTML format. Thus, a markdown processor (referred to as a &#39;parser&#39;) is capable of converting Markdown-formatted text to HTML so it can be displayed in web browsers.
      </p>

      <p className="mt-3 text-gray-700 leading-relaxed"> Here is a detailed diagram explaining the process:</p>

      <Image 
        src="/images/posts/markdown-2.png" 
        alt="Markdown Guide" 
        width={800} 
        height={400} 
        className="w-full h-48 sm:h-[400px] object-contain rounded-lg my-8" 
        priority 
      />
      
      <h1 className="text-3xl font-bold tracking-tighter mt-8">Where to use?</h1>

      <p className="mt-3 text-gray-700 leading-relaxed">
        There are several use cases/ applications of markdown, viz.,
      </p>
      <ul className="list-disc list-inside text-gray-700 leading-relaxed">
        <li> <strong className="bg-green-300 px-1 rounded dark:bg-green-900">Websites </strong>- Markdown was designed specially, for the web, so it&#39;s usual to have plenty of applications specifically designed for creating website content.</li>
    
        <li> <strong className="bg-green-300 px-1 rounded dark:bg-green-900">Documents </strong>- Markdown is enough for creating basic documents like assignments and letters. Also markdown formatted files can be exported as PDF or HTML file format.</li>
    
        <li> <strong className="bg-green-300 px-1 rounded dark:bg-green-900">Notes </strong>- Markdown is a super effective way to take notes as you can edit your notes alongside writing it, you don&#39;t have to raise your hand from the keyboard once you get accustomed to it.</li>
    
        <li> <strong className="bg-green-300 px-1 rounded dark:bg-green-900">Books </strong>- Several websites where you can write in markdown and then export the file as PDF or any other file format.</li>
    
        <li> <strong className="bg-green-300 px-1 rounded dark:bg-green-900">Documentation </strong>- Markdown is a natural fit for technical documentation. It can be used in writing technical blogs in technical platforms like Hashnode, and Dev Society,(as I am writing it in markdown). And also be used to create official documentation of several products, Readme files.</li>
      </ul>


      <h1 className="text-3xl font-bold tracking-tighter mt-8">Basic Syntax</h1>
      <h2 className="text-2xl font-semibold mt-8">Basic Syntax</h2>
      <h3 className="text-xl font-medium mt-6">Headings</h3>
      <CodeBlock
        code={`# Heading 1\n## Heading 2\n### Heading 3`}
      />

      <h3 className="text-xl font-medium mt-6">Formatting</h3>
      <CodeBlock
        code={`**Bold Text**\n*Italic Text*\n***Bold and Italic***`}
      />

      <h3 className="text-xl font-medium mt-6">Lists</h3>
      <p>Ordered List:</p>
      <CodeBlock
        code={`1. First item\n2. Second item\n3. Third item`}
      />
      <p>Unordered List:</p>
      <CodeBlock
        code={`- First item\n- Second item\n- Third item`}
      />

      <h3 className="text-xl font-medium mt-6">Code Blocks</h3>
      <CodeBlock
        code={`function sayHello() {\n  console.log("Hello, World!");\n}`}
      />
      
      <h3 className="text-xl font-medium mt-6">Links & Images</h3>
      <CodeBlock
        code={`[Google](https://www.google.com)\n\n![Markdown Example](https://cdn.hashnode.com/res/hashnode/image/upload/v1714149671977/42b03342-07bf-4026-9330-31267e2c998b.png)`}
      />
      
      <h2 className="text-2xl font-semibold mt-8">Extended Syntax</h2>
      <h3 className="text-xl font-medium mt-6">Task List</h3>
      <CodeBlock
        code={`- [x] Completed\n- [ ] Pending`}
      />
      
      <h3 className="text-xl font-medium mt-6">Strikethrough</h3>
      <CodeBlock
        code={`~~Strikethrough~~`}
      />
      
      <h3 className="text-xl font-medium mt-6">Tables</h3>
      <CodeBlock
        code={`| Header | Column |\n|--------|--------|\n| Data1  | Data2  |`}
      />
      
      <h2 className="text-2xl font-semibold mt-8">Conclusion</h2>
      <p className="mt-3 text-gray-700 leading-relaxed">
        Markdown offers a simple yet powerful way to format your text for the web and various digital platforms. Its lightweight syntax allows users to focus on content without worrying about formatting tools. Hope you find this guide useful!
      </p>
    </div>
  );
}