"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import {
  Brain,
  Mail,
  Lock,
  Briefcase,
  FileText,
  BarChart3,
  Target,
} from "lucide-react";

export default function HomePage() {

  const [selectedType, setSelectedType] = useState("");

  const [resume, setResume] = useState<File | null>(null);

  const interviewTypes = [
    "HR Interview",
    "React Interview",
    "Node.js Interview",
    "Java Interview",
    "System Design",
    "DSA Round",
  ];

  return (

    <main className="min-h-screen bg-[#020617] overflow-hidden relative flex items-center justify-center px-10">

      {/* BACKGROUND */}

      <div className="absolute inset-0">

        {/* GLOW LEFT */}
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full" />

        {/* GLOW RIGHT */}
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-500/10 blur-[180px] rounded-full" />

        {/* PARTICLES */}
        <div className="absolute inset-0 opacity-40">

          <div className="absolute top-20 left-40 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee]" />
          <div className="absolute top-40 left-[30%] w-3 h-3 bg-cyan-300 rounded-full shadow-[0_0_25px_#22d3ee]" />
          <div className="absolute top-[70%] left-[20%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_25px_#22d3ee]" />
          <div className="absolute top-[30%] right-[20%] w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_25px_#22d3ee]" />
          <div className="absolute bottom-32 right-32 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_30px_#22d3ee]" />

        </div>

        {/* BOTTOM WAVES */}

        <div className="absolute bottom-0 left-0 right-0 h-72">

          <svg
            viewBox="0 0 1440 320"
            className="w-full h-full"
            preserveAspectRatio="none"
          >

            <path
              fill="rgba(34,211,238,0.12)"
              d="M0,224L60,202.7C120,181,240,139,360,144C480,149,600,203,720,202.7C840,203,960,149,1080,138.7C1200,128,1320,160,1380,176L1440,192L1440,320L0,320Z"
            />

          </svg>

        </div>

      </div>

      {/* CONTENT */}

      <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <div>

          {/* LOGO */}

          <div className="flex items-center gap-5 mb-16">

            <div className="w-24 h-24 rounded-3xl border border-cyan-400/70 bg-cyan-500/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.6)]">

              <Brain className="w-12 h-12 text-cyan-400" />

            </div>

            <div>

              <h1 className="text-6xl font-black text-white">
                Prep<span className="text-cyan-400">Wise</span>
              </h1>

              <p className="text-gray-400 tracking-[8px] text-lg mt-1">
                AI INTERVIEWER
              </p>

            </div>

          </div>

          {/* HERO */}

          <h1 className="text-7xl font-black leading-tight text-white">

            Your AI-Powered

            <br />

            <span className="text-cyan-400">
              Interview Partner
            </span>

          </h1>

          <p className="text-gray-300 text-3xl mt-8 leading-relaxed max-w-2xl">

            Practice smarter.
            Improve faster.
            Get hired.

          </p>

          {/* FEATURES */}

          <div className="space-y-10 mt-20">

            <div className="flex gap-6 items-center">

              <div className="w-20 h-20 rounded-3xl border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-xl flex items-center justify-center">

                <Brain className="w-10 h-10 text-cyan-400" />

              </div>

              <div>

                <h3 className="text-cyan-400 text-3xl font-bold">
                  AI-Powered Interviews
                </h3>

                <p className="text-gray-400 text-xl mt-2">
                  Real-time conversations with AI
                </p>

              </div>

            </div>

            <div className="flex gap-6 items-center">

              <div className="w-20 h-20 rounded-3xl border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-xl flex items-center justify-center">

                <BarChart3 className="w-10 h-10 text-cyan-400" />

              </div>

              <div>

                <h3 className="text-cyan-400 text-3xl font-bold">
                  Instant Feedback
                </h3>

                <p className="text-gray-400 text-xl mt-2">
                  Detailed AI analysis & improvement tips
                </p>

              </div>

            </div>

            <div className="flex gap-6 items-center">

              <div className="w-20 h-20 rounded-3xl border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-xl flex items-center justify-center">

                <Target className="w-10 h-10 text-cyan-400" />

              </div>

              <div>

                <h3 className="text-cyan-400 text-3xl font-bold">
                  Multiple Domains
                </h3>

                <p className="text-gray-400 text-xl mt-2">
                  HR, DSA, System Design & more
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT CARD */}

        <div className="relative">

          {/* OUTER GLOW */}

          <div className="absolute inset-0 bg-cyan-400/20 blur-[120px] rounded-[50px]" />

          {/* CARD */}

          <div className="relative bg-white/5 backdrop-blur-3xl border border-cyan-400/40 rounded-[40px] p-14 shadow-[0_0_80px_rgba(34,211,238,0.25)]">

            <h2 className="text-6xl font-black text-white text-center">
              Welcome Back
            </h2>

            <p className="text-gray-400 text-2xl text-center mt-5">
              Login to continue your interview journey
            </p>

            {/* LINE */}

            <div className="w-72 h-[2px] bg-cyan-400 mx-auto mt-10 relative">

              <div className="absolute left-1/2 -translate-x-1/2 -top-[7px] w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_30px_#22d3ee]" />

            </div>

            {/* FORM */}

            <div className="space-y-9 mt-14">

              {/* EMAIL */}

              <div>

                <label className="text-white text-2xl">
                  Email Address
                </label>

                <div className="mt-4 flex items-center gap-5 bg-[#020817]/90 border border-cyan-400/50 rounded-2xl px-6 py-5">

                  <Mail className="w-7 h-7 text-gray-400" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent outline-none text-white text-2xl w-full placeholder:text-gray-500"
                  />

                </div>

              </div>

              {/* PASSWORD */}

              <div>

                <label className="text-white text-2xl">
                  Password
                </label>

                <div className="mt-4 flex items-center gap-5 bg-[#020817]/90 border border-cyan-400/50 rounded-2xl px-6 py-5">

                  <Lock className="w-7 h-7 text-gray-400" />

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="bg-transparent outline-none text-white text-2xl w-full placeholder:text-gray-500"
                  />

                </div>

              </div>

              {/* INTERVIEW TYPE */}

              <div>

                <label className="text-white text-2xl flex items-center gap-3">

                  <Briefcase className="w-6 h-6 text-cyan-400" />

                  Select Interview Type

                </label>

                <select
                  value={selectedType}
                  onChange={(e) =>
                    setSelectedType(e.target.value)
                  }
                  className="w-full mt-4 bg-[#020817]/90 border border-cyan-400/50 rounded-2xl px-6 py-5 text-white text-2xl outline-none"
                >

                  <option value="">
                    Choose Interview Type
                  </option>

                  {interviewTypes.map((type) => (

                    <option
                      key={type}
                      value={type}
                    >

                      {type}

                    </option>

                  ))}

                </select>

              </div>

              {/* RESUME */}

              <div>

                <label className="text-white text-2xl flex items-center gap-3">

                  <FileText className="w-6 h-6 text-cyan-400" />

                  Upload Resume

                </label>

                <div className="mt-4 border border-cyan-400/50 rounded-2xl bg-[#020817]/90 p-5">

                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {

                      if (e.target.files?.[0]) {

                        setResume(e.target.files[0]);

                      }

                    }}
                    className="text-white text-lg w-full"
                  />

                </div>

                {resume && (

                  <div className="mt-5 border border-green-500/40 bg-green-500/10 rounded-2xl p-5">

                    <p className="text-green-400 text-xl font-bold">
                      ✅ Resume Uploaded
                    </p>

                    <p className="text-white text-lg mt-2">
                      {resume.name}
                    </p>

                  </div>

                )}

              </div>

              {/* LOGIN */}

              <button
                className="w-full py-6 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-black text-3xl font-bold transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.8)] hover:scale-[1.02]"
              >
                Login
              </button>

              {/* DIVIDER */}

              <div className="flex items-center gap-5">

                <div className="flex-1 h-[1px] bg-gray-700" />

                <p className="text-gray-400 text-xl">
                  or continue with
                </p>

                <div className="flex-1 h-[1px] bg-gray-700" />

              </div>

              {/* GOOGLE */}

              <button
                onClick={() => {

                  if (!selectedType) {

                    alert("Please select interview type");
                    return;

                  }

                  if (!resume) {

                    alert("Please upload resume");
                    return;

                  }

                  signIn("google", {
                    callbackUrl:
`/application?type=${encodeURIComponent(selectedType)}`,
                  });

                }}
                className="w-full bg-white hover:bg-gray-100 text-black text-2xl font-bold py-5 rounded-2xl transition-all duration-300"
              >

                Continue with Google

              </button>

            </div>

          </div>

        </div>

      </div>

    </main>

  );

}