"use client";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";
import { CodeBlock } from "@/components/CodeBlock";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

export default function Page() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto font-sans flex flex-col mt-12 sm:mt-24">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/posts">Posts</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Header Image */}
      <Image
        src="/images/posts/dissecting_js_2.webp"
        alt="JavaScript Functions Guide"
        width={800}
        height={400}
        className="w-full h-48 sm:h-[400px] object-contain rounded-lg mb-8"
        priority
      />

      {/* Title */}
      <h1 className="title text-4xl font-bold mb-4">
        Dissecting JavaScript II
      </h1>
      <div className="flex flex-wrap gap-x-2 gap-y-1 justify-start items-center py-4 sm:py-8">
        <Avatar>
          <AvatarImage src="/images/authors/ritochit.jpeg" />
          <AvatarFallback>RG</AvatarFallback>
        </Avatar>
        <span className="text-gray-500 font-semibold"> Ritochit Ghosh </span>
        <Calendar className="size-4" /> March 10, 2025
      </div>

      <h1 className="text-3xl font-bold tracking-tighter mt-8">Introduction</h1>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        In the last part, we have discussed about the internal workings of
        JavaScript & some deeper concepts of JavaScript in a much simpler way.
        If you haven&#39;t checked it yet, here is the{" "}
        <a
          href="https://ritochit.hashnode.dev/dissecting-javascript-i"
          className="text-blue-500 underline"
        >
          link to that
        </a>
        . If you are a beginner trying to learn from this blog, I would rather
        suggest you to go through that article once before starting it. This
        blog contains all about functions in JavaScript, different array
        methods, and some related topics along with terminologies.
      </p>

      <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-500 dark:text-gray-400 my-4">
        💡 This blog contains several code examples try to run them in your
        browser compiler. If you are using your laptop or PC, right-click
        anywhere on this page, then navigate to the &quot;console&quot; tab. Or
        simply, press <code>ctrl + Shift + I</code> (For Windows){" "}
        <code> Cmd + Option + I </ code>(For Mac) to open the console tab.
      </blockquote>

      <h2 className="text-2xl font-semibold mt-8">Functions</h2>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        Functions are reusable blocks of code, designed to perform a specific
        task. They allow us programmers to follow the DRY(don&apos;t Repeat
        Yourself!) principle of coding. Functions make our code modulated,
        organized & maintainable. Typically, a function takes input(Parameters),
        run some predefined logic on them, and returns an output.
      </p>

      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        Take a look at a basic greeting function in JavaScript:
      </p>
      <CodeBlock
        code={`function greet(user) {\n  console.log(\`Hello, \${user}\`);\n}\ngreet("Ritochit");\n// Output: Hello, Ritochit`}
      />

      <h3 className="text-xl font-medium mt-6">Function Statement</h3>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        A function statement in JavaScript is a named function with specified
        parameters and a block of code to execute whenever the function is
        called. The above greeting function is an example of a simple function
        Statement. It is also referred to as Function Declaration.
      </p>

      <h3 className="text-xl font-medium mt-6">Function Expression</h3>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        A function, which is assigned to a variable is a Function Expression. In
        function expression, functions can be used as values. If a function
        expression is hoisted it will give a Reference error i.e. in the memory
        creation phase the function expression will be treated as a variable.
      </p>
      <CodeBlock
        code={`let func = function() {\n    console.log("func function is called");\n}\nfunc();\n// Output: func function is called`}
      />

      <h3 className="text-xl font-medium mt-6">Arrow Functions</h3>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        The arrow function is another way of writing concise function
        expressions in JavaScript. It was not a part of JavaScript initially but
        was introduced later in ES6. The main feature is implicit returns for
        single expressions. Arrow functions do not have their own `this` context
        but they can inherit it lexically from their parents. Thus, though arrow
        functions are ideal for short functions and callbacks, but they cannot
        be used as constructors.
      </p>
      <CodeBlock
        code={`const greet = (user) => {\n    console.log(\`Hello, \${user}\`);\n}\ngreet("Ritochit");\n// Output: Hello, Ritochit`}
      />

      <h3 className="text-xl font-medium mt-6">
        IIFE (Immediately Invoked Function Expression)
      </h3>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        An Immediately Invoked Function Expression (IIFE) is a JavaScript
        function that runs as soon as it is defined. It is generally used to
        create a block scope, avoiding variable collisions in the global
        namespace. The syntax is a normal function statement that is followed by
        () which executes the function immediately while running the code.
      </p>
      <CodeBlock
        code={`(function() {\n    console.log("Hello Reader, this is IIFE");\n})();\n// output: Hello Reader, this is IIFE`}
      />

      <h2 className="text-2xl font-semibold mt-8">Higher-Order Functions</h2>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        A higher-order function is just another JS function but the key is it
        either accepts another function as an argument or returns another
        function as an output or maybe both simultaneously. This concept is
        crucial for functional programming as it enables operations like
        mapping, filtering, & reduction. These functions help in code
        reusability and modularity.
      </p>
      <CodeBlock
        code={`function operation(num1, num2, logic) {\n    let first = logic(num1);\n    let second = logic(num2);\n    return first + second;\n}\n\nconst cube = (n) => {\n    return n*n*n;\n}\nconst square = (n) => {\n    return n*n;\n}\n\nconst ans = operation(2, 3, square);\nconsole.log(\`Answer: \${ans}\`);\n// Output: Answer: 13`}
      />

      <h3 className="text-xl font-medium mt-6">String Interpolation</h3>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        Some of you who are learning JavaScript might be wondering about the
        `console.log(&#96;Answer: &#36;ans);&#96;` in the last line of the
        previous example. It is called string interpolation. It allows us to
        embed expressions within a string. In this method, literals are enclosed
        by backticks (`) and preceded by a dollar sign($). This type of literals
        is called Template literals it&apos;s also another feature included in
        ES6, which is a way to create strings in JavaScript that allows for
        easier inclusion of variables and expressions within the string.
      </p>
      <CodeBlock
        code={`const person = "Ritochit Ghosh";\nlet age = "19";\nconsole.log(\`\${person} is \${age} years old\`);\n// Output: Ritochit Ghosh is 19 years old`}
      />

      <h2 className="text-2xl font-semibold mt-8">
        Array Methods: Map, Filter, and Reduce
      </h2>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        Now, let&#39;s discuss the three most used array methods in JavaScript:
        map, filter, and reduce. These methods are essential for processing and
        transforming arrays efficiently.
      </p>

      <h3 className="text-xl font-medium mt-6">Map</h3>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        The map function is generally used to transform elements of an array
        following certain logic. The map method creates a new array by applying
        a function to each element of the original array.
      </p>
      <CodeBlock
        code={`const numbers = [1, 2, 3, 4, 5];\nconst squareOfNumbers = numbers.map(function(num) {\n    return num * num;\n});\nconsole.log(squareOfNumbers);\n// Output: [1, 4, 9, 16, 25]`}
      />

      <h3 className="text-xl font-medium mt-6">Filter</h3>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        The filter function is preferably used to filter out some of the
        elements of an existing array based on a given condition. The filter
        method creates a new array with all elements that fulfill a test
        implemented by the provided function.
      </p>
      <CodeBlock
        code={`const numbers = [1, 2, 3, 4, 5];\nconst evenNumbers = numbers.filter(function(num) {\n    return num % 2 === 0;\n});\nconsole.log(evenNumbers);\n// Output: [2, 4]`}
      />

      <h3 className="text-xl font-medium mt-6">Reduce</h3>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        The reduce function is used when you need to calculate a single value
        from an array of values. The reduce method applies a function against an
        accumulator and each element in the array to reduce it to a single
        value.
      </p>
      <CodeBlock
        code={`const numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce(function(accumulator, currentValue) {\n    return accumulator + currentValue;\n}, 0);\nconsole.log(sum);\n// Output: 15`}
      />

      <h3 className="text-xl font-medium mt-6">Spread Operator</h3>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        The spread operator (...) in JavaScript is one of the versatile syntaxes
        provided by JS which simplifies array manipulation & parameter handling.
        It is used to expand elements of an array (or iterable) into places
        where multiple elements are expected.
      </p>
      <CodeBlock
        code={`const batters = ["Rohit", "Gill", "Virat", "Shreyas", "Pant"];\nconst allRounders = ["Hardik", "Jadeja"];\nconst bowlers = ["Bumrah", "Shami", "Kuldeep", "Chahal"];\n\nconst team = [...batters, ...allRounders, ...bowlers];\nconsole.log(team);\n// Output: ["Rohit", "Gill", "Virat", "Shreyas", "Pant", "Hardik", "Jadeja", "Bumrah", "Shami", "Kuldeep", "Chahal"]`}
      />

      <h2 className="text-2xl font-semibold mt-8">Conclusion</h2>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        In the next part will discuss the remaining topics i.e. callback
        functions, Callback hell, the need for Promises, async - await syntax, &
        lastly Browser features and JS engine in detail.
      </p>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        Hope you enjoyed this blog and liked it. Do share your valuable feedback
        if possible, this will help me to improve myself.
      </p>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        Stay tuned for the last part of the Dissecting JavaScript Series, where
        we&#39;ll conclude our journey of JavaScript programming to mark the
        start of another journey.
      </p>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        Happy Coding & Stay Safe!
      </p>
    </div>
  );
}
