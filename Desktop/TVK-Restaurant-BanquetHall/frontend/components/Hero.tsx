export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        w-full

        bg-cover
        bg-center

        flex
        items-center
        justify-center

        px-4
        md:px-20

        overflow-hidden
      "
      style={{
        backgroundImage: "url('/images/gallery/home.jpg')",
      }}
    >

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black
          via-black/70
          to-black/30
        "
      />



      {/* CONTENT BOX */}
      <div
        className="
          relative
          z-10

          w-full
          max-w-[850px]

          bg-black/60
          backdrop-blur-xl

          border
          border-yellow-400

          rounded-2xl

          p-6
          sm:p-8
          md:p-14

          shadow-[0_0_60px_rgba(250,204,21,0.4)]

          transition-all
          duration-700

          md:hover:scale-105
        "
      >


        {/* SMALL TITLE */}
        <p
          className="
            text-yellow-400

            tracking-[5px]
            md:tracking-[12px]

            text-sm
            md:text-xl

            font-black

            mb-5
            md:mb-8

            text-center
            md:text-left
          "
        >
          PREMIUM LUXURY EXPERIENCE
        </p>




        {/* MAIN HEADING */}
        <h1
          className="
            text-white

            text-4xl
            sm:text-5xl
            md:text-7xl

            font-black

            leading-tight

            tracking-wide

            text-center
            md:text-left
          "
        >

          TVK

          <br />

          RESTAURANT

          <br />


          &{" "}

          <span className="text-yellow-400">
            BANQUET
          </span>


          <br />

          HALL

        </h1>




        {/* DESCRIPTION */}
        <p
          className="
            mt-6
            md:mt-8

            text-white

            text-base
            md:text-2xl

            font-semibold

            text-center
            md:text-left

            leading-relaxed
          "
        >

          Fine Dining • Royal Weddings • Birthday Events

          <br className="hidden md:block" />

          Corporate Celebrations • Premium Hospitality

        </p>





        {/* BUTTONS */}
        <div
          className="
            flex

            flex-col
            md:flex-row

            gap-5
            md:gap-10

            mt-8
            md:mt-12
          "
        >


          <a
            href="#contact"

            className="
              bg-yellow-400

              text-black

              w-full
              md:w-auto

              text-center

              px-8
              md:px-16

              py-4
              md:py-5

              rounded-full

              text-lg
              md:text-xl

              font-black

              hover:scale-105

              transition
            "
          >

            RESERVE NOW

          </a>




          <a
            href="#banquet"

            className="
              border-2
              border-yellow-400

              text-white

              w-full
              md:w-auto

              text-center

              px-8
              md:px-16

              py-4
              md:py-5

              rounded-full

              text-lg
              md:text-xl

              font-black

              hover:bg-yellow-400
              hover:text-black

              hover:scale-105

              transition
            "
          >

            EXPLORE VENUE

          </a>


        </div>


      </div>


    </section>
  );
}