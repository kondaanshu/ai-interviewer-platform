export default function Contact() {
  return (
    <section
      id="contact"
      className="
      min-h-screen
      bg-black
      flex
      items-center
      justify-center
      px-20
      py-32
      overflow-hidden
      "
    >

      <div
        className="
        max-w-[1500px]
        w-full
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-24
        items-center
        "
      >


        {/* CONTACT BOX */}

        <div
          className="
          bg-black/80
          border-2
          border-yellow-400

          rounded-[40px]

          p-16

          shadow-[0_0_80px_rgba(250,204,21,0.5)]

          hover:scale-105
          hover:shadow-[0_0_120px_rgba(250,204,21,0.8)]

          transition-all
          duration-700

          animate-pulse
          "
        >


          <p
            className="
            text-yellow-400
            text-2xl
            tracking-[15px]
            font-bold
            mb-8
            "
          >
            CONTACT US
          </p>


          <h1
            className="
            text-white
            text-7xl
            font-black
            leading-tight
            mb-12
            "
          >

            TVK <br/>

            <span className="text-yellow-400">
              RESTAURANT
            </span>

            <br/>

            & BANQUET HALL

          </h1>



          <div
            className="
            text-white
            space-y-10
            "
          >


            <div>

              <h2 className="text-yellow-400 text-4xl font-bold">
                📍 Location
              </h2>

              <p className="text-3xl mt-4 leading-relaxed">

                Opposite to Integrated Collector Office,
                <br/>
                Karimnagar Road,
                <br/>
                Jagtial

              </p>

            </div>



            <div>

              <h2 className="text-yellow-400 text-4xl font-bold">
                📞 Phone
              </h2>

              <p className="text-4xl font-black mt-4">

                +91 99639 99352

              </p>

            </div>



            <div>

              <h2 className="text-yellow-400 text-4xl font-bold">
                🍽 Services
              </h2>

              <p className="text-3xl mt-4">

                Restaurant • Banquet Hall • Luxury Events

              </p>

            </div>


          </div>




          {/* BUTTONS */}

          <div className="flex gap-10 mt-14">


            <a
              href="tel:+919963999352"
              className="
              bg-yellow-400
              text-black

              text-2xl
              font-black

              px-14
              py-5

              rounded-full

              hover:bg-white
              hover:scale-110

              duration-500
              "
            >

              Call Now

            </a>




            <a

              href="https://wa.me/919963999352"

              target="_blank"

              className="
              border-2
              border-yellow-400

              text-white

              text-2xl
              font-black

              px-14
              py-5

              rounded-full

              hover:bg-yellow-400
              hover:text-black
              hover:scale-110

              duration-500
              "
            >

              WhatsApp Booking

            </a>


          </div>


        </div>





        {/* RIGHT SIDE */}

        <div
          className="
          text-center
          animate-bounce
          "
        >

          <h1
            className="
            text-yellow-400
            text-[150px]
            font-black
            "
          >
            TVK
          </h1>


          <p
            className="
            text-white
            text-5xl
            tracking-[15px]
            "
          >

            LUXURY DINING
            <br/>
            EXPERIENCE

          </p>


          <p
            className="
            text-white
            text-4xl
            mt-16
            leading-relaxed
            "
          >

            Fine Dining <br/>
            Royal Weddings <br/>
            Birthday Events <br/>
            Premium Hospitality

          </p>


        </div>


      </div>


    </section>
  );
}