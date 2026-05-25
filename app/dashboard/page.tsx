 "use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Video,
  Trophy,
  Clock,
  Target,
  Flame,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white flex">
      
      {/* SIDEBAR */}
      <div className="w-64 bg-[#030b1d] border-r border-white/10 p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-10 text-cyan-400">
          PrepWise AI
        </h1>

        <div className="space-y-5 text-gray-300">

          <Link href="/dashboard" className="flex items-center gap-3 text-cyan-400">
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link href="/application" className="flex items-center gap-3 hover:text-cyan-400">
            <Video size={20} />
            Start Interview
          </Link>

          <Link href="/history" className="flex items-center gap-3 hover:text-cyan-400">
            <Clock size={20} />
            History
          </Link>

          <Link href="/leaderboard" className="flex items-center gap-3 hover:text-cyan-400">
            <Trophy size={20} />
            Leaderboard
          </Link>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-2">
          Welcome Back 👋
        </h1>

        <p className="text-gray-400 mb-10">
          Track your interview performance and coding growth.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-[#081225] p-6 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between">
              <h2 className="text-gray-400">Total Interviews</h2>
              <Video className="text-cyan-400" />
            </div>

            <p className="text-4xl font-bold mt-5">12</p>
          </div>

          <div className="bg-[#081225] p-6 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between">
              <h2 className="text-gray-400">Average Score</h2>
              <Target className="text-green-400" />
            </div>

            <p className="text-4xl font-bold mt-5">87%</p>
          </div>

          <div className="bg-[#081225] p-6 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between">
              <h2 className="text-gray-400">Current Streak</h2>
              <Flame className="text-orange-400" />
            </div>

            <p className="text-4xl font-bold mt-5">7 Days</p>
          </div>

        </div>

        {/* RECENT */}
        <div className="mt-12 bg-[#081225] rounded-2xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">
            Recent Interviews
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between bg-[#0d172d] p-4 rounded-xl">
              <div>
                <h3 className="font-semibold">DSA Round</h3>
                <p className="text-gray-400 text-sm">Completed Yesterday</p>
              </div>

              <div className="text-green-400 font-bold">
                92%
              </div>
            </div>

            <div className="flex justify-between bg-[#0d172d] p-4 rounded-xl">
              <div>
                <h3 className="font-semibold">HR Interview</h3>
                <p className="text-gray-400 text-sm">Completed 2 Days Ago</p>
              </div>

              <div className="text-yellow-400 font-bold">
                81%
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}