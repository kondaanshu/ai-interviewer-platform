"use client";

import { motion } from "framer-motion";


export default function PremiumDining() {


  const dining = [

    {
      icon: "🍽️",
      title: "Family Restaurant",
      desc:
        "Enjoy delicious cuisine with your loved ones in a premium family-friendly atmosphere.",
    },

    {
      icon: "✨",
      title: "Luxury Seating",
      desc:
        "Elegant interiors, spacious arrangements and comfortable premium seating experience.",
    },

    {
      icon: "👨‍🍳",
      title: "Quality Food Experience",
      desc:
        "Fresh ingredients, expert chefs and authentic flavours served with care.",
    },

    {
      icon: "🌟",
      title: "Comfortable Ambience",
      desc:
        "Beautiful lighting and relaxing environment perfect for memorable moments.",
    },

  ];



  return (

    <section
  id="dining"
  className="
  bg-black
  text-white

  w-full
  overflow-hidden

  px-5
  md:px-20

  pt-24
  md:pt-40

  pb-40
  md:pb-60
  "
>


      {/* BACKGROUND EFFECT */}
      <div
        className="
        absolute
        top-20
        left-1/2

        -translate-x-1/2

        w-[300px]
        md:w-[700px]

        h-[300px]
        md:h-[700px]

        bg-yellow-400/20

        blur-[120px]

        rounded-full
        "
      />





      {/* TITLE */}
      <motion.h1

        initial={{
          opacity: 0,
          y: 60,
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

        text-center

        text-5xl
        md:text-8xl

        font-black

        mb-6

        bg-gradient-to-r
        from-yellow-200
        via-yellow-500
        to-orange-500

        text-transparent
        bg-clip-text
        "
      >

        PREMIUM DINING

      </motion.h1>






      <motion.p

        initial={{
          opacity: 0,
        }}

        whileInView={{
          opacity: 1,
        }}

        transition={{
          delay: 0.3,
        }}

        className="
        relative

        text-center

        text-gray-300

        text-lg
        md:text-3xl

        mb-16
        "
      >

        Luxury Taste • Premium Service • Memorable Experience

      </motion.p>







      {/* CARDS */}
      <div
        className="
        relative

        grid

        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4

        gap-8
        "
      >


        {

          dining.map((item, index) => (


            <motion.div

              key={item.title}


              initial={{
                opacity: 0,
                y: 80,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{

                duration: 0.6,

                delay: index * 0.2,

              }}


              whileHover={{

                scale: 1.05,

                y: -10,

              }}


              className="
              bg-white/10

              backdrop-blur-xl

              border
              border-yellow-400/40

              rounded-[30px]

              p-8

              text-center

              shadow-xl
              shadow-yellow-500/20

              "
            >



              <motion.div

                animate={{
                  y: [0, -10, 0],
                }}

                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}

                className="
                text-6xl

                mb-6
                "
              >

                {item.icon}

              </motion.div>





              <h2
                className="
                text-2xl

                font-black

                text-yellow-400

                mb-4
                "
              >

                {item.title}

              </h2>





              <p
                className="
                text-gray-300

                text-base
                md:text-lg

                leading-relaxed
                "
              >

                {item.desc}

              </p>



            </motion.div>


          ))

        }


      </div>



    </section>

  );
}