 "use client";

import { motion } from "framer-motion";


export default function Banquet() {


  const bookBanquet = () => {

    const message = `
✨ TVK BANQUET BOOKING

Hello TVK,
I want to book your luxury banquet hall.

Event:
Date:
Guests:

Please share availability and details.
`;

    window.open(
      `https://wa.me/919963999352?text=${encodeURIComponent(message)}`,
      "_blank"
    );

  };





  const eventBooking = (eventName: string) => {


    // PREMIUM DINING CLICK
    if (eventName === "Premium Dining") {

      document
        .getElementById("dining")
        ?.scrollIntoView({
          behavior: "smooth",
        });

      return;

    }




    const message = `
✨ TVK BANQUET RESERVATION

Event:
${eventName}

Date:
Guests:

Hello TVK,
I want to reserve this event.
`;

    window.open(
      `https://wa.me/919963999352?text=${encodeURIComponent(message)}`,
      "_blank"
    );

  };






  const events = [

    {
      icon: "💍",
      name: "Luxury Wedding",
    },

    {
      icon: "🎂",
      name: "Birthday Party",
    },

    {
      icon: "💐",
      name: "Engagement Ceremony",
    },

    {
      icon: "🏢",
      name: "Corporate Event",
    },

    {
      icon: "🍽️",
      name: "Premium Dining",
    },

    {
      icon: "🌸",
      name: "Royal Decoration",
    },

  ];







  return (

    <section
      id="banquet"

      className="
      bg-black
      text-white

      w-full

      overflow-hidden
      "
    >





      {/* HERO */}

      <div
        className="
        relative

        min-h-screen

        bg-cover
        bg-center

        flex

        items-center

        px-5
        md:px-20
        "

        style={{
          backgroundImage:
            "url('/images/banquet-hero.jpg')",
        }}
      >


        <div
          className="
          absolute
          inset-0
          bg-black/70
          "
        />






        <motion.div

          initial={{
            opacity: 0,
            y: 80,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}


          className="
          relative
          z-10

          w-full
          "
        >





          <p
            className="
            text-yellow-400

            text-sm
            md:text-2xl

            tracking-[5px]
            md:tracking-[12px]

            font-black

            mb-6
            "
          >

            ROYAL CELEBRATIONS

          </p>






          <h1
            className="
            text-5xl
            md:text-8xl

            font-black

            leading-tight
            "
          >

            TVK Luxury

            <br />

            Banquet Hall

          </h1>






          <p
            className="
            text-lg
            md:text-3xl

            mt-8

            text-gray-200
            "
          >

            Weddings • Birthdays • Corporate Events

          </p>








          <button

            onClick={bookBanquet}

            className="
            mt-10

            bg-yellow-400

            text-black

            px-8
            md:px-16

            py-4
            md:py-5

            rounded-full

            text-lg
            md:text-2xl

            font-black

            hover:scale-105

            transition

            shadow-xl
            shadow-yellow-500/40
            "
          >

            BOOK BANQUET NOW

          </button>



        </motion.div>


      </div>









      {/* EVENTS */}

      <div
        className="
        px-5
        md:px-20

        py-24
        "
      >





        <h2
          className="
          text-center

          text-4xl
          md:text-7xl

          font-black

          mb-16

          bg-gradient-to-r
          from-yellow-200
          via-yellow-500
          to-orange-500

          text-transparent
          bg-clip-text
          "
        >

          OUR PREMIUM EVENTS

        </h2>







        <div
          className="
          grid

          grid-cols-1
          md:grid-cols-3

          gap-8
          "
        >


          {


            events.map((item, index) => (


              <motion.div

                key={index}

                onClick={() => {

  if (item.name === "Premium Dining") {

    document
      .getElementById("dining")
      ?.scrollIntoView({
        behavior:"smooth"
      });

  } else {

    eventBooking(item.name);

  }

}}

                initial={{
                  opacity: 0,
                  y: 60,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}


                transition={{
                  delay: index * 0.1,
                }}



                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}



                className="
                h-48

                rounded-[35px]

                border
                border-yellow-500/40

                bg-white/10

                backdrop-blur-xl

                flex

                items-center
                justify-center

                text-xl
                md:text-3xl

                font-bold

                cursor-pointer

                hover:bg-yellow-400
                hover:text-black

                transition

                shadow-xl
                shadow-yellow-500/20
                "
              >


                {item.icon}
                &nbsp;
                {item.name}


              </motion.div>


            ))


          }


        </div>


      </div>









      {/* CAPACITY */}


      <motion.div

        initial={{
          opacity: 0,
          scale: 0.8,
        }}

        whileInView={{
          opacity: 1,
          scale: 1,
        }}

        className="
        text-center

        py-24

        px-5
        "
      >




        <h1
          className="
          text-7xl
          md:text-9xl

          font-black

          text-yellow-400
          "
        >

          250

        </h1>





        <p
          className="
          text-3xl
          md:text-5xl

          font-bold

          mt-8
          "
        >

          Guests Premium Banquet Capacity

        </p>





        <p
          className="
          text-lg
          md:text-2xl

          text-gray-400

          mt-5
          "
        >

          Premium ambience • Royal service • Luxury celebrations

        </p>



      </motion.div>





    </section>

  );

}