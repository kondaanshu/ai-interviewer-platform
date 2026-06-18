"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="
      bg-black
      text-white
      px-10
      py-28
      overflow-hidden
      relative
      border-t border-yellow-400/40
      "
    >

      {/* GOLD GLOW EFFECT */}
      <div
        className="
        absolute
        w-[500px]
        h-[500px]
        bg-yellow-400/10
        blur-[150px]
        rounded-full
        left-1/2
        -translate-x-1/2
        top-10
        "
      />


      <motion.div

        initial={{ opacity:0, y:100 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:1 }}

        className="
        relative
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-3
        gap-20
        text-center
        md:text-left
        "
      >


        {/* LOGO */}

        <motion.div
        whileHover={{scale:1.08}}
        >

          <h1
          className="
          text-8xl
          font-black
          text-yellow-400
          tracking-widest
          drop-shadow-[0_0_25px_gold]
          "
          >
            TVK
          </h1>


          <h2
          className="
          mt-4
          text-3xl
          tracking-[12px]
          font-bold
          "
          >
            LUXURY DINING
          </h2>


          <p
          className="
          mt-8
          text-xl
          text-gray-300
          leading-relaxed
          "
          >
            Premium Restaurant & Banquet Hall for royal weddings,
            birthday events and luxury celebrations.
          </p>


        </motion.div>




        {/* LINKS */}

        <div>

          <h3
          className="
          text-yellow-400
          text-4xl
          font-black
          mb-10
          "
          >
            QUICK LINKS
          </h3>


          <div
          className="
          flex
          flex-col
          gap-6
          text-2xl
          font-bold
          "
          >

          {[
            "Home",
            "Menu",
            "Banquet",
            "Gallery",
            "Contact"
          ].map((link)=>(

            <motion.a

            whileHover={{
              scale:1.2,
              color:"#facc15"
            }}

            href={`#${link.toLowerCase()}`}
            key={link}
            >
              {link}

            </motion.a>


          ))}


          </div>

        </div>





        {/* CONTACT */}


        <div>


          <h3
          className="
          text-yellow-400
          text-4xl
          font-black
          mb-10
          "
          >
            CONTACT
          </h3>



          <p
          className="
          text-xl
          leading-relaxed
          "
          >

          📍 Opposite to Integrated Collector Office,
          <br/>
          Karimnagar Road,
          <br/>
          Jagtial

          </p>


          <h2
          className="
          text-yellow-400
          text-4xl
          font-black
          mt-8
          "
          >
          📞 +91 99639 99352
          </h2>



          <div
          className="
          flex
          justify-center
          md:justify-start
          gap-5
          mt-10
          "
          >


          <motion.a

          whileHover={{scale:1.15}}

          href="tel:+919963999352"

          className="
          bg-yellow-400
          text-black
          px-10
          py-5
          rounded-full
          font-black
          text-xl
          "

          >
            CALL NOW

          </motion.a>




          <motion.a

          whileHover={{scale:1.15}}

          href="https://wa.me/919963999352"

          target="_blank"

          className="
          border
          border-yellow-400
          px-10
          py-5
          rounded-full
          font-black
          text-xl
          hover:bg-yellow-400
          hover:text-black
          duration-300
          "

          >

            WHATSAPP

          </motion.a>


          </div>


        </div>


      </motion.div>






      <motion.div

      initial={{opacity:0}}
      whileInView={{opacity:1}}

      className="
      relative
      mt-28
      text-center
      text-xl
      text-gray-400
      tracking-widest
      "

      >

      ✨ © 2026 TVK RESTAURANT & BANQUET HALL ✨

      </motion.div>



    </footer>
  );
}