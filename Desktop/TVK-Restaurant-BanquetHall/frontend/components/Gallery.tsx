"use client";

import Image from "next/image";
import { useState } from "react";


type Item = {
  title: string;
  type: string;
  img: string;
};


export default function Gallery() {


  const [active, setActive] = useState("All");


  const images: Item[] = [

    {
      title: "Luxury Restaurant",
      type: "Restaurant",
      img: "/images/gallery/restaurant-1.jpg",
    },

    {
      title: "Fine Dining Experience",
      type: "Restaurant",
      img: "/images/gallery/restaurant-2.jpg",
    },

    {
      title: "Royal Banquet Hall",
      type: "Banquet",
      img: "/images/gallery/banquet-1.jpg",
    },

    {
      title: "Wedding Hall",
      type: "Banquet",
      img: "/images/gallery/banquet-2.jpg",
    },

    {
      title: "Grand Celebration",
      type: "Banquet",
      img: "/images/gallery/banquet-3.jpg",
    },

    {
      title: "Chef Cooking",
      type: "Kitchen",
      img: "/images/gallery/chef-cooking.jpg",
    },

    {
      title: "Modern Kitchen",
      type: "Kitchen",
      img: "/images/gallery/kitchen.jpg",
    },

    {
      title: "Birthday Event",
      type: "Events",
      img: "/images/gallery/birthday-event.jpg",
    },

    {
      title: "Royal Buffet",
      type: "Events",
      img: "/images/gallery/buffet.jpg",
    },

  ];



  const filtered =
    active === "All"
      ? images
      : images.filter((i) => i.type === active);



  return (

    <section
  id="gallery"
  className="
  bg-black
  min-h-screen
  text-white

  px-5
  md:px-20

  pt-40
  md:pt-60

  pb-24
  md:pb-40

  overflow-hidden
  "
  >



      {/* TITLE */}

      <h1
        className="
        text-center

        text-5xl
        md:text-[110px]

        leading-tight

        font-black

        mb-5
        md:mb-8

        bg-gradient-to-r
        from-yellow-200
        via-yellow-500
        to-orange-500

        text-transparent
        bg-clip-text
        "
      >

        TVK GALLERY

      </h1>





      <p
        className="
        text-center

        text-lg
        md:text-4xl

        text-gray-300

        mb-14
        md:mb-24
        "
      >

        Luxury Restaurant & Banquet Experience

      </p>







      {/* FILTER BUTTONS */}

      <div
        className="
        flex

        flex-wrap

        justify-center

        gap-4
        md:gap-10

        mb-14
        md:mb-24
        "
      >


        {
          [
            "All",
            "Restaurant",
            "Banquet",
            "Kitchen",
            "Events"

          ].map((cat) => (

            <button

              key={cat}

              onClick={() => setActive(cat)}

              className={`

              text-sm
              md:text-3xl

              px-5
              md:px-14

              py-3
              md:py-5

              rounded-full

              font-bold

              transition


              ${

                active === cat

                  ?

                  "bg-yellow-400 text-black"

                  :

                  "bg-white/10 text-white"

                }

              `}

            >

              {cat}

            </button>


          ))
        }


      </div>








      {/* IMAGES */}

      <div
        className="
        space-y-10
        md:space-y-24
        "
      >


        {

          filtered.map((item, index) => (


            <div

              key={index}


              className="
              relative

              w-full

              h-[350px]
              md:h-[750px]

              rounded-3xl
              md:rounded-[60px]

              overflow-hidden

              border
              border-yellow-500/40

              shadow-xl
              shadow-yellow-500/20

              group
              "

            >



              <Image

                src={item.img}

                alt={item.title}

                fill

                className="
                object-cover

                group-hover:scale-105

                duration-700
                "

              />





              <div
                className="
                absolute

                bottom-0

                w-full

                p-5
                md:p-20

                bg-gradient-to-t
                from-black
                to-transparent
                "
              >



                <p
                  className="
                  text-yellow-400

                  text-sm
                  md:text-4xl

                  font-black

                  tracking-[5px]
                  md:tracking-[10px]
                  "
                >

                  {item.type}

                </p>




                <h2
                  className="
                  text-3xl
                  md:text-8xl

                  font-black

                  mt-3
                  md:mt-5

                  leading-tight
                  "
                >

                  {item.title}

                </h2>




              </div>


            </div>


          ))

        }


      </div>


    </section>

  );

}