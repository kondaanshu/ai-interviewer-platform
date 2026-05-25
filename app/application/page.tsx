"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import {
  LayoutDashboard,
  Video,
 History,
  Trophy,
  User,
  Settings,
  LogOut,
  Mail,
  Phone,
  GraduationCap,
  Code2,
} from "lucide-react";

export default function ApplicationPage() {

  const router = useRouter();

  // INTERVIEW TYPE

  const [type, setType] =
    useState("HR Interview");

  useEffect(() => {

    const params =
      new URLSearchParams(
        window.location.search
      );

    const selectedType =
      params.get("type") ||
      "HR Interview";

    setType(selectedType);

  }, []);

  // FORM DATA

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      college: "",
      skills: "",
    });

  // SUBMIT

  const handleSubmit = () => {

    localStorage.setItem(
      "candidateData",

      JSON.stringify({
        ...formData,
        interviewType: type,
      })
    );

    router.push(
      `/interview?type=${type}`
    );
  };

  return (

    <div className="min-h-screen bg-[#020817] text-white flex">

      {/* SIDEBAR */}

      <div className="w-[250px] bg-[#030b1d] border-r border-white/10 flex flex-col justify-between p-6">

        <div>

          {/* LOGO */}

          <div className="flex items-center gap-3 mb-14">

            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold">
              P
            </div>

            <h1 className="text-2xl font-bold">
              PrepWise AI
            </h1>

          </div>

          {/* MENU */}

          <div className="flex flex-col gap-5 text-gray-300">

            <button
              onClick={() => router.push("/dashboard")}
              className="flex items-center gap-3 hover:text-cyan-400 transition"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </button>

            <button
              onClick={() => router.push("/application")}
              className="flex items-center gap-3 text-cyan-400"
            >
              <Video size={18} />
              Interviews
            </button>

            <button
              onClick={() => router.push("/history")}
              className="flex items-center gap-3 hover:text-cyan-400 transition"
            >
              <History size={18} />
              History
            </button>

            <button
              onClick={() => router.push("/leaderboard")}
              className="flex items-center gap-3 hover:text-cyan-400 transition"
            >
              <Trophy size={18} />
              Leaderboard
            </button>

            <button
              onClick={() => router.push("/profile")}
              className="flex items-center gap-3 hover:text-cyan-400 transition"
            >
              <User size={18} />
              Profile
            </button>

            <button
              onClick={() => router.push("/settings")}
              className="flex items-center gap-3 hover:text-cyan-400 transition"
            >
              <Settings size={18} />
              Settings
            </button>

          </div>

        </div>

        {/* LOGOUT */}

        <button className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition">

          <LogOut size={18} />

          Logout

        </button>

      </div>

      {/* MAIN */}

      <div className="flex-1 p-10">

        {/* TOP */}

        <div className="flex justify-end mb-10">

          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">

            <div className="w-8 h-8 rounded-full bg-orange-500"></div>

            <span>Konda Anshu</span>

          </div>

        </div>

        {/* FORM CARD */}

        <div className="max-w-4xl mx-auto bg-[#081235] border border-cyan-400/20 rounded-3xl p-10 shadow-[0_0_80px_rgba(0,255,255,0.15)]">

          <h1 className="text-6xl font-bold text-center mb-4">
            AI Interview Application
          </h1>

          <p className="text-center text-gray-400 mb-12 text-lg">
            Fill your details to start your AI Interview
          </p>

          {/* INPUTS */}

          <div className="grid grid-cols-2 gap-6">

            {/* NAME */}

            <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-4">

              <User className="text-gray-400" size={20} />

              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="bg-transparent outline-none w-full"
              />

            </div>

            {/* EMAIL */}

            <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-4">

              <Mail className="text-gray-400" size={20} />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="bg-transparent outline-none w-full"
              />

            </div>

            {/* PHONE */}

            <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-4">

              <Phone className="text-gray-400" size={20} />

              <input
                type="text"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                className="bg-transparent outline-none w-full"
              />

            </div>

            {/* COLLEGE */}

            <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-4">

              <GraduationCap className="text-gray-400" size={20} />

              <input
                type="text"
                placeholder="College Name"
                value={formData.college}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    college: e.target.value,
                  })
                }
                className="bg-transparent outline-none w-full"
              />

            </div>

          </div>

          {/* SKILLS */}

          <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-5">

            <div className="flex items-center gap-3 mb-4 text-gray-400">

              <Code2 size={20} />

              <span>
                Skills (Python, Java, React, DSA...)
              </span>

            </div>

            <textarea
              placeholder="Enter your skills..."
              value={formData.skills}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  skills: e.target.value,
                })
              }
              className="w-full h-40 bg-transparent outline-none resize-none"
            />

          </div>

          {/* SELECT */}

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full mt-8 bg-white/5 border border-white/10 rounded-2xl p-5 outline-none"
          >

            <option>HR Interview</option>

            <option>Technical Interview</option>

            <option>DSA Round</option>

          </select>

          {/* BUTTON */}

          <button
            onClick={handleSubmit}
            className="w-full mt-10 bg-gradient-to-r from-cyan-400 to-blue-600 hover:scale-[1.02] transition-all duration-300 py-5 rounded-2xl text-xl font-bold shadow-[0_0_40px_rgba(0,255,255,0.4)]"
          >
            Start Interview →
          </button>

        </div>

      </div>

    </div>
  );
}