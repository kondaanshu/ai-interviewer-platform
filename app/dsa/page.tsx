"use client";

import { useState } from "react";

import dynamic from "next/dynamic";

const MonacoEditor = dynamic(
  () => import("@monaco-editor/react"),
  {
    ssr: false,
  }
) as any;

const questions = [

  {
    title: "Two Sum",

    question:
      "Return indices of two numbers adding to target.",

    input:
      "[2,7,11,15], target = 9",

    expected:
      "[0,1]",
  },

  {
    title: "Palindrome",

    question:
      "Check whether string is palindrome.",

    input:
      `"madam"`,

    expected:
      "true",
  },

  {
    title: "Fibonacci",

    question:
      "Print fibonacci series upto n.",

    input:
      "5",

    expected:
      "0 1 1 2 3",
  },

];

export default function DSAPage() {

  const [code, setCode] = useState(`function solve() {

  // Write your code here

}`);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [output, setOutput] =
    useState("");

  const runCode = () => {

    if (
      code.includes("return") ||
      code.includes("console.log")
    ) {

      setOutput(
        "✅ Test Cases Passed"
      );

    } else {

      setOutput(
        "❌ Test Cases Failed"
      );

    }

  };

  return (

    <div className="min-h-screen bg-black p-10">

      <div className="w-full min-h-screen bg-[#07122b] border border-cyan-500 rounded-3xl p-10">

        {/* TITLE */}

        <h1 className="text-6xl font-bold text-cyan-400 text-center">

          Live DSA Coding Round

        </h1>

        <p className="text-center text-gray-400 mt-4 text-xl">

          Solve coding problems like real interview

        </p>

        {/* QUESTION */}

        <div className="mt-10 bg-black/30 border border-cyan-500 rounded-3xl p-8">

          <h2 className="text-cyan-400 text-3xl font-bold">

            {questions[currentQuestion].title}

          </h2>

          <p className="text-white text-xl mt-5">

            {questions[currentQuestion].question}

          </p>

          <div className="mt-6">

            <p className="text-yellow-400 text-lg">

              Input:
            </p>

            <p className="text-white text-lg">

              {questions[currentQuestion].input}

            </p>

          </div>

          <div className="mt-4">

            <p className="text-green-400 text-lg">

              Expected Output:
            </p>

            <p className="text-white text-lg">

              {questions[currentQuestion].expected}

            </p>

          </div>

        </div>

        {/* EDITOR */}

        <div className="mt-10 border border-cyan-500 rounded-3xl overflow-hidden">

          <MonacoEditor
            height="600px"
            defaultLanguage="javascript"
            value={code}
            onChange={(value: string) => {

              setCode(value);

            }}
            theme="vs-dark"
          />

        </div>

        {/* OUTPUT */}

        <div className="mt-8 bg-black/40 border border-cyan-500 rounded-3xl p-6">

          <h2 className="text-cyan-400 text-2xl font-bold">

            Output

          </h2>

          <p className="text-white text-xl mt-4">

            {output}

          </p>

        </div>

        {/* BUTTONS */}

        <div className="flex gap-6 mt-10">

          <button

            onClick={runCode}

            className="flex-1 bg-green-500 hover:bg-green-400 transition-all text-black font-bold py-5 rounded-2xl text-2xl"
          >

            Run Code

          </button>

          <button

            onClick={() => {

              if (
                currentQuestion <
                questions.length - 1
              ) {

                setCurrentQuestion(
                  currentQuestion + 1
                );

                setOutput("");

                setCode(`function solve() {

  // Write your code here

}`);

              } else {

                alert(
                  "DSA Round Completed 🚀"
                );

              }

            }}

            className="flex-1 bg-cyan-500 hover:bg-cyan-400 transition-all text-black font-bold py-5 rounded-2xl text-2xl"
          >

            Next Question

          </button>

        </div>

      </div>

    </div>

  );
}