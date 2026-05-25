"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Video,
  Trophy,
  History,
  User,
  Settings,
} from "lucide-react";

export default function HistoryPage() {
  return (
    <div className="min-h-screen flex bg-[#020817] text-white">

      {/* SIDEBAR */}
      <div className="w-64 bg-[#030b1d] border-r border-white/10 p-6">

        <h1 className="text-2xl font-bold text-cyan-400 mb-10">
          PrepWise AI
        </h1>

        <div className="space-y-5">

          <Link href="/dashboard" className="flex items-center gap-3 hover:text-cyan-400">
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link href="/application" className="flex items-center gap-3 hover:text-cyan-400">
            <Video size={20} />
            Interviews
          </Link>

          <Link href="/history" className="flex items-center gap-3 text-cyan-400">
            <History size={20} />
            History
          </Link>

          <Link href="/leaderboard" className="flex items-center gap-3 hover:text-cyan-400">
            <Trophy size={20} />
            Leaderboard
          </Link>

          <Link href="/profile" className="flex items-center gap-3 hover:text-cyan-400">
            <User size={20} />
            Profile
          </Link>

          <Link href="/settings" className="flex items-center gap-3 hover:text-cyan-400">
            <Settings size={20} />
            Settings
          </Link>

        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-8">
          Interview History
        </h1>

        <div className="space-y-6">

          <div className="bg-[#081225] p-6 rounded-2xl border border-white/10">
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  DSA Round
                </h2>

                <p className="text-gray-400 mt-2">
                  Completed on May 20
                </p>
              </div>

              <div className="text-green-400 text-3xl font-bold">
                92%
              </div>
            </div>
          </div>

          <div className="bg-[#081225] p-6 rounded-2xl border border-white/10">
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  HR Interview
                </h2>

                <p className="text-gray-400 mt-2">
                  Completed on May 18
                </p>
              </div>

              <div className="text-yellow-400 text-3xl font-bold">
                81%
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}