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

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen flex bg-[#020817] text-white">

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

          <Link href="/history" className="flex items-center gap-3 hover:text-cyan-400">
            <History size={20} />
            History
          </Link>

          <Link href="/leaderboard" className="flex items-center gap-3 text-cyan-400">
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

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-10">
          Top Candidates
        </h1>

        <div className="space-y-5">

          <div className="bg-[#081225] p-6 rounded-2xl flex justify-between">
            <h2 className="text-2xl font-bold">
              🥇 Anshu
            </h2>

            <p className="text-green-400 text-2xl font-bold">
              98%
            </p>
          </div>

          <div className="bg-[#081225] p-6 rounded-2xl flex justify-between">
            <h2 className="text-2xl font-bold">
              🥈 Rahul
            </h2>

            <p className="text-cyan-400 text-2xl font-bold">
              94%
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}