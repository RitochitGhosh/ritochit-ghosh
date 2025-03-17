"use client";
import { CodeBlock } from "@/components/ui/code-block";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto font-sans flex flex-col mt-12 sm:mt-24">
      {/* Post Image */}
      <nav className="flex mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/posts" className="hover:text-gray-900">
          Posts
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">dissecting-js-one</span>
      </nav>

      <Image
        src="/images/posts/dissecting_js_1.webp"
        alt="dissecting-js-one"
        width={800}
        height={400}
        className="w-full h-32 sm:h-48 md:h-[400px] object-cover rounded-lg px-2 sm:px-0"
        priority
      />

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-6">
        Dissecting JavaScript Series - Part 1
      </h1>
      <div className="flex flex-wrap gap-x-2 gap-y-1 justify-start items-center py-4 sm:py-8">
        <Avatar>
          <AvatarImage src="/images/authors/ritochit.jpeg" />
          <AvatarFallback>RG</AvatarFallback>
        </Avatar>
        <span className="text-gray-500 font-semibold"> Ritochit Ghosh </span>
        <Calendar className="size-4" /> May 11, 2024
      </div>

      {/* Introduction */}
      <h2 className="text-xl sm:text-2xl font-semibold mt-8">Introduction</h2>
      <p className="mt-3 text-gray-700 leading-relaxed">
        JavaScript is an interpreted programming language used to create
        interactive and dynamic websites. JavaScript was created by Brendan Eich
        in May 1995, within 10 days. Eich worked at Netscape and implemented
        JavaScript for their web browser, Netscape Navigator.
      </p>
      <p className="mt-3 text-gray-700 leading-relaxed">
        Let&#39;s now understand the workings of JavaScript first...
      </p>

      {/* Workings of JavaScript */}
      <h2 className="text-xl sm:text-2xl font-semibold mt-8">
        Workings of JavaScript
      </h2>

      <h3 className="text-xl font-medium mt-4">Execution Context</h3>
      <p className="mt-3 text-gray-700 leading-relaxed">
        Everything in JavaScript works inside an execution context. It is the
        environment where the JS code gets executed.
      </p>
      <p className="mt-3 text-gray-700 leading-relaxed">An execution context consists of two parts:</p>
      <CodeBlock

        language="javascript"
        filename="script.js"
        code={`var n = 2;
function square(num){
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);`}
      />

      {/* Call Stack */}
      <h3 className="text-xl font-medium mt-6">Call Stack</h3>
      <p className="mt-3 text-gray-700 leading-relaxed">
        The call stack is used to manage the flow of function calls and their
        execution in a program. It keeps track of the active function calls in a
        program and their execution context.
      </p>
      <p className="mt-3 text-gray-700 leading-relaxed">
        In JavaScript, the call stack operates on a Last In, First Out (LIFO)
        basis.
      </p>

      {/* Hoisting */}
      <h3 className="text-xl font-medium mt-6">Hoisting</h3>
      <p className="mt-3 text-gray-700 leading-relaxed">
        Hoisting is a phenomenon in JavaScript by which you can access the
        variables & functions even before you have initialized them in the
        program.
      </p>
      <p className="mt-3 text-gray-700 leading-relaxed">
        Arrow functions are not hoisted in JS as they are treated as normal
        variables.
      </p>

      {/* Window Object */}
      <h3 className="text-xl font-medium mt-6">Window Object</h3>
      <p className="mt-3 text-gray-700 leading-relaxed">
        The window is a global object, which is created along with the Global
        execution context in a browser environment.
      </p>

      <CodeBlock
        language="javascript"
        filename="script.js"
        code={`var x = 10;
function myFunction() {
  console.log("Hello, world!");
}
console.log(window.x); // 10
window.myFunction(); // Hello, world!`}
      />

      {/* Scope */}
      <h3 className="text-xl font-medium mt-6">Scope</h3>
      <p className="mt-3 text-gray-700 leading-relaxed">
        Scope refers to the context in which variables, functions, and objects
        are accessible within the JS program.
      </p>

      {/* Lexical Environment */}
      <h3 className="text-xl font-medium mt-6">Lexical Environment</h3>
      <p className="mt-3 text-gray-700 leading-relaxed">
        Whenever an execution context is created, a lexical environment is also
        created along with it.
      </p>

      {/* Temporal Dead Zone */}
      <h3 className="text-xl font-medium mt-6">Temporal Dead Zone</h3>
      <p className="mt-3 text-gray-700 leading-relaxed">
        In JavaScript, the Temporal Dead Zone refers to the period between
        entering into a scope and the actual declaration of a variable.
      </p>
    
        <CodeBlock
            language="javascript"
            filename="script.js"
            code={`console.log(num);
let num = 18;`}
          />
      

      {/* Types of Errors */}
      <h3 className="text-xl font-medium mt-6">Types of Errors in JS</h3>
      <p className="mt-3 text-gray-700 leading-relaxed">There are mainly 3 types of errors in JavaScript:</p>
      <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
        <li>
          <strong>Reference Error</strong>: This occurs when you try to access a
          variable or object before it is declared.
        </li>
        <li>
          <strong>Syntax Error</strong>: The error obtained when the basic
          syntax of JavaScript is violated.
        </li>
        <li>
          <strong>Type Error</strong>: Happens when you try to use a value in a
          way that is not supported by its data type.
        </li>
      </ul>

      {/* Closure */}
      <h3 className="text-xl font-medium mt-6">Closure</h3>
      <p className="mt-3 text-gray-700 leading-relaxed">
        A closure is the combination of a function bundled together (enclosed)
        with references to its surrounding state.
      </p>
      
          <CodeBlock
            language="javascript"
            filename="script.js"
            code={`function x(){
  var a = 12;
  function y(){
    console.log(a);
  }
  return y;
}
var z = x();
z();`}
          />
        

      {/* Conclusion */}
      <h2 className="text-xl sm:text-2xl font-semibold mt-8">Conclusion</h2>
      <p className="mt-3 text-gray-700 leading-relaxed">
        JavaScript is a versatile programming language that plays a crucial role
        in creating interactive and dynamic websites.
      </p>
      <p className="mt-3 text-gray-700 leading-relaxed">
        As we continue in this JavaScript series, we&#39;ll discuss topics like
        functions, callback functions, event listeners, browser features, and
        more.
      </p>
      <p className="mt-3 text-gray-700 leading-relaxed">Hope you enjoyed this blog. Do share your valuable feedback!</p>
    </div>
  );
}
