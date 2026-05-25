 "use client";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white flex items-center justify-center">
      <div className="bg-[#081225] p-10 rounded-2xl w-[500px]">
        <h1 className="text-4xl font-bold mb-8">
          User Profile
        </h1>

        <div className="space-y-5 text-xl">
          <p>Name: Konda Anshu</p>
          <p>Email: kondaanshu1@gmail.com</p>
          <p>College: Vardhaman College</p>
          <p>Skills: Python, Java, React</p>
        </div>
      </div>
    </div>
  );
}