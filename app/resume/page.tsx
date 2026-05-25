 "use client";

import { useState } from "react";

export default function ResumePage() {

  const [fileName, setFileName] =
    useState("");

  return (

    <div className="min-h-screen bg-black flex items-center justify-center p-10">

      <div className="bg-[#071028] border border-cyan-500 rounded-3xl p-10 w-full max-w-2xl">

        <h1 className="text-5xl font-bold text-cyan-400 text-center">

          Upload Resume

        </h1>

        <p className="text-gray-400 text-center mt-4">

          Upload your resume for AI-based interview questions

        </p>

        {/* FILE INPUT */}

        <div className="mt-10">

          <input
            type="file"

            accept=".pdf,.doc,.docx"

            onChange={(e) => {

              if (e.target.files?.[0]) {

                setFileName(
                  e.target.files[0].name
                );

              }

            }}

            className="w-full bg-black/40 border border-cyan-500 rounded-2xl p-5 text-white"
          />

        </div>

        {/* FILE NAME */}

        {fileName && (

          <div className="mt-6 bg-black/30 border border-white/10 rounded-2xl p-5">

            <p className="text-green-400 text-xl">

              ✅ Uploaded:
            </p>

            <p className="text-white mt-2">

              {fileName}

            </p>

          </div>

        )}

        {/* BUTTON */}

        <button

          className="w-full mt-10 bg-cyan-500 hover:bg-cyan-400 transition-all text-black font-bold py-4 rounded-2xl text-xl"

        >

          Start AI Resume Interview

        </button>

      </div>

    </div>
  );
}