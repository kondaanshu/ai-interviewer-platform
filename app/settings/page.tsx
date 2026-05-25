 "use client";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white flex items-center justify-center">

      <div className="bg-[#081225] p-10 rounded-2xl w-[500px]">

        <h1 className="text-4xl font-bold mb-8">
          Settings
        </h1>

        <div className="space-y-5">

          <button className="w-full bg-cyan-500 p-4 rounded-xl font-bold">
            Change Theme
          </button>

          <button className="w-full bg-blue-500 p-4 rounded-xl font-bold">
            Update Profile
          </button>

          <button className="w-full bg-red-500 p-4 rounded-xl font-bold">
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}