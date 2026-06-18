export default function About() {
  return (
    <section
      id="about"
      className="
      bg-black
      min-h-[600px]

      flex
      flex-col
      justify-center
      items-center

      text-center

      px-10
      py-28
      "
    >

      <p
        className="
        text-yellow-400
        text-2xl
        font-black
        tracking-[10px]
        mb-8
        "
      >
        ABOUT US
      </p>


      <h2
        className="
        text-white
        text-7xl
        font-black
        uppercase
        "
      >

        WELCOME TO{" "}

        <span className="text-yellow-400">
          TVK
        </span>

        {" "}LUXURY DINING

      </h2>


      <p
        className="
        mt-12

        max-w-5xl

        text-white/80

        text-3xl

        leading-relaxed
        "
      >

        TVK Restaurant & Banquet Hall offers premium dining,
        luxury celebrations, wedding events, birthday parties,
        corporate meetings and unforgettable hospitality experience.

      </p>



      <button
        className="
        mt-14

        bg-yellow-400

        text-black

        px-20
        py-6

        rounded-full

        text-2xl
        font-black

        hover:scale-110

        duration-300
        "
      >

        EXPLORE MORE

      </button>


    </section>
  );
}