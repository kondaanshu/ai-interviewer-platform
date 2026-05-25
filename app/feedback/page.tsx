 "use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Brain,
  Trophy,
  Mic,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  AlertTriangle,
  CheckCircle2,
  Home,
  TrendingUp
} from "lucide-react";

export default function FeedbackPage() {
  const router = useRouter();

  const [feedback, setFeedback] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem(
      "interview-feedback"
    );

    if (saved) {
      setFeedback(JSON.parse(saved));
    }
  }, []);

  if (!feedback) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white text-5xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#00e5ff20,transparent_25%),radial-gradient(circle_at_bottom_right,#00e5ff10,transparent_30%)]" />

      {/* GRID */}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* GLOW */}

      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px]" />

      {/* SPARKLES */}

      <div className="absolute top-24 left-32 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_30px_#00ffff]" />
      <div className="absolute top-52 right-40 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_25px_#00ffff]" />
      <div className="absolute bottom-40 left-52 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_30px_#00ffff]" />
      <div className="absolute bottom-24 right-32 w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_35px_#00ffff]" />

      {/* MAIN */}

      <div className="relative z-10 px-12 py-10">

        {/* HEADER */}

        <div className="flex items-center justify-between mb-16">

          <div>

            <div className="flex items-center gap-4 mb-5">

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-[0_0_40px_rgba(0,255,255,0.35)]">
                <Sparkles
                  size={34}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <h1 className="text-7xl font-black tracking-tight">
                  AI Interview{" "}
                  <span className="text-cyan-400">
                    Feedback
                  </span>
                </h1>

                <p className="text-gray-400 text-2xl mt-3">
                  AI generated performance analysis
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => router.push("/")}
            className="px-10 py-5 rounded-3xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_50px_rgba(0,255,255,0.55)] text-2xl font-bold flex items-center gap-4"
          >
            <Home size={28} />
            Dashboard
          </button>
        </div>

        {/* HERO SECTION */}

        <div className="grid lg:grid-cols-2 gap-12 mb-14">

          {/* LEFT BIG SCORE */}

          <div className="relative overflow-hidden rounded-[45px] border border-cyan-400/20 bg-[#07182c]/70 backdrop-blur-2xl p-14 shadow-[0_0_80px_rgba(0,255,255,0.12)]">

            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-cyan-500/10 blur-[100px]" />

            <div className="relative z-10">

              <div className="flex items-center gap-4 mb-10">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400/20">
                  <Trophy
                    className="text-cyan-400"
                    size={34}
                  />
                </div>

                <div>
                  <h2 className="text-4xl font-bold">
                    Overall Performance
                  </h2>

                  <p className="text-gray-400 text-xl mt-2">
                    AI analyzed interview results
                  </p>
                </div>
              </div>

              <div className="flex items-end gap-5 mt-10">

                <h1 className="text-[180px] leading-none font-black text-cyan-400 drop-shadow-[0_0_40px_rgba(0,255,255,0.7)]">
                  {feedback.overall}
                </h1>

                <span className="text-5xl text-gray-300 mb-8">
                  /10
                </span>
              </div>

              <div className="mt-10 flex items-center gap-4">

                <div className="px-6 py-3 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 text-xl font-semibold">
                  Excellent Performance
                </div>

                <div className="flex items-center gap-2 text-cyan-300 text-lg">
                  <ArrowUpRight size={22} />
                  Strong Interview Flow
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT METRICS */}

          <div className="grid grid-cols-2 gap-8">

            {/* CARD */}

            <div className="rounded-[35px] bg-[#07182c]/70 backdrop-blur-2xl border border-cyan-400/20 p-10 shadow-[0_0_60px_rgba(0,255,255,0.08)]">

              <div className="flex items-center justify-between mb-10">

                <h3 className="text-2xl font-bold text-gray-300">
                  Communication
                </h3>

                <MessageSquare
                  className="text-cyan-400"
                  size={32}
                />
              </div>

              <div className="text-7xl font-black">
                {feedback.communication}
                <span className="text-3xl text-gray-400">
                  /10
                </span>
              </div>
            </div>

            {/* CARD */}

            <div className="rounded-[35px] bg-[#07182c]/70 backdrop-blur-2xl border border-cyan-400/20 p-10 shadow-[0_0_60px_rgba(0,255,255,0.08)]">

              <div className="flex items-center justify-between mb-10">

                <h3 className="text-2xl font-bold text-gray-300">
                  Technical
                </h3>

                <Brain
                  className="text-cyan-400"
                  size={32}
                />
              </div>

              <div className="text-7xl font-black">
                {feedback.technical}
                <span className="text-3xl text-gray-400">
                  /10
                </span>
              </div>
            </div>

            {/* CARD */}

            <div className="rounded-[35px] bg-[#07182c]/70 backdrop-blur-2xl border border-cyan-400/20 p-10 shadow-[0_0_60px_rgba(0,255,255,0.08)]">

              <div className="flex items-center justify-between mb-10">

                <h3 className="text-2xl font-bold text-gray-300">
                  Confidence
                </h3>

                <Mic
                  className="text-cyan-400"
                  size={32}
                />
              </div>

              <div className="text-7xl font-black">
                {feedback.confidence}
                <span className="text-3xl text-gray-400">
                  /10
                </span>
              </div>
            </div>

            {/* CARD */}

            <div className="rounded-[35px] bg-[#07182c]/70 backdrop-blur-2xl border border-cyan-400/20 p-10 shadow-[0_0_60px_rgba(0,255,255,0.08)] flex flex-col justify-center">

              <div className="text-cyan-400 text-xl mb-4">
                AI Verdict
              </div>

              <h2 className="text-4xl font-black leading-tight">
                Highly Recommended Candidate
              </h2>
            </div>
          </div>
        </div>

        {/* LOWER SECTION */}

        <div className="grid lg:grid-cols-2 gap-10 mb-14">

          {/* STRENGTHS */}

          <div className="rounded-[40px] p-10 bg-[#07182c]/70 border border-cyan-400/20 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,255,255,0.08)]">

            <div className="flex items-center gap-4 mb-10">

              <TrendingUp
                className="text-cyan-400"
                size={38}
              />

              <h2 className="text-5xl font-black">
                Strengths
              </h2>
            </div>

            <div className="space-y-6">

              {feedback.strengths.map(
                (item: string, index: number) => (
                  <div
                    key={index}
                    className="rounded-3xl p-6 bg-cyan-500/5 border border-cyan-500/10 flex items-center gap-5"
                  >
                    <CheckCircle2
                      className="text-green-400"
                      size={28}
                    />

                    <p className="text-2xl text-gray-200">
                      {item}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* IMPROVEMENTS */}

          <div className="rounded-[40px] p-10 bg-[#07182c]/70 border border-cyan-400/20 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,255,255,0.08)]">

            <div className="flex items-center gap-4 mb-10">

              <AlertTriangle
                className="text-yellow-400"
                size={38}
              />

              <h2 className="text-5xl font-black">
                Improvements
              </h2>
            </div>

            <div className="space-y-6">

              {feedback.improvements.map(
                (item: string, index: number) => (
                  <div
                    key={index}
                    className="rounded-3xl p-6 bg-yellow-500/5 border border-yellow-500/10 flex items-center gap-5"
                  >
                    <AlertTriangle
                      className="text-yellow-400"
                      size={26}
                    />

                    <p className="text-2xl text-gray-200">
                      {item}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* SUMMARY */}

        <div className="rounded-[45px] p-14 bg-[#07182c]/70 border border-cyan-400/20 backdrop-blur-2xl shadow-[0_0_90px_rgba(0,255,255,0.1)]">

          <div className="flex items-center gap-5 mb-8">

            <Sparkles
              className="text-cyan-400"
              size={42}
            />

            <h2 className="text-6xl font-black">
              AI Summary
            </h2>
          </div>

          <p className="text-3xl text-gray-300 leading-[60px]">
            {feedback.summary}
          </p>
        </div>
      </div>
    </div>
  );
}