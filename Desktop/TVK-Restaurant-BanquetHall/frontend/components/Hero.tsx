export default function Hero() {
  return (
    <>

      {/* HERO SECTION */}
      <section
        id="home"
        className="
        relative
        min-h-screen

        bg-cover
        bg-center

        flex
        items-center

        overflow-hidden
        "
        style={{
          backgroundImage:
            "url('/images/gallery/home.jpg')",
        }}
      >


        {/* DARK EFFECT */}
        <div
          className="
          absolute
          inset-0

          bg-gradient-to-r
          from-black
          via-black/60
          to-black/20
          "
        />



        {/* TEXT BOX */}
        <div
          className="
          relative
          z-10

          ml-20

          w-[850px]

          bg-black/60
          backdrop-blur-xl

          border
          border-yellow-400

          rounded-2xl

          p-14

          shadow-[0_0_60px_rgba(250,204,21,0.5)]

          transition-all
          duration-700

          hover:scale-105
          "
        >


          {/* SMALL TITLE */}
          <p
            className="
            text-yellow-400

            tracking-[12px]

            text-xl

            font-black

            mb-8
            "
          >

            PREMIUM LUXURY EXPERIENCE

          </p>





          {/* MAIN TITLE */}
          <h1
            className="
            text-white

            text-7xl

            font-black

            leading-tight

            tracking-wide
            "
          >


            TVK

            <br />


            RESTAURANT

            <br />


            &{" "}

            <span
              className="
              text-yellow-400
              "
            >

              BANQUET

            </span>


            <br />


            HALL


          </h1>





          {/* DESCRIPTION */}
          <p
            className="
            mt-8

            text-white

            text-2xl

            font-semibold
            "
          >

            Fine Dining • Royal Weddings • Birthday Events

            <br />

            Corporate Celebrations • Premium Hospitality

          </p>





          {/* BUTTONS */}
          <div
            className="
            flex
            gap-10

            mt-12
            "
          >



            <a
              href="#contact"

              className="
              bg-yellow-400

              text-black

              px-16
              py-5

              rounded-full

              text-xl

              font-black

              hover:scale-110

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

              px-16

              py-5

              rounded-full

              text-xl

              font-black


              hover:bg-yellow-400

              hover:text-black

              hover:scale-110


              transition
              "
            >

              EXPLORE VENUE

            </a>



          </div>



        </div>


      </section>


    </>
  );
}