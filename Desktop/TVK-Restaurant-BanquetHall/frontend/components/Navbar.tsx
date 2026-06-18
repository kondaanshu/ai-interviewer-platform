  "use client";

import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);


  const links = [
    {
      name: "HOME",
      href: "#home",
    },
    {
      name: "MENU",
      href: "#menu",
    },
    {
      name: "BANQUET",
      href: "#banquet",
    },
    {
      name: "GALLERY",
      href: "#gallery",
    },
    {
      name: "CONTACT",
      href: "#contact",
    },
  ];


  return (

    <nav
      className="
        fixed
        top-0
        left-0

        w-full

        z-50

        bg-black/80
        backdrop-blur-xl

        border-b
        border-yellow-400/30

        overflow-hidden
      "
    >


      <div
        className="
          w-full

          flex
          items-center
          justify-between

          px-5
          md:px-20

          py-5
        "
      >



        {/* LOGO */}
        <a
          href="#home"

          className="
            text-yellow-400

            text-3xl
            md:text-5xl

            font-black

            tracking-[4px]

            whitespace-nowrap
          "
        >

          TVK

        </a>





        {/* DESKTOP MENU */}
        <div
          className="
            hidden
            md:flex

            items-center

            gap-16
          "
        >

          {
            links.map((item) => (

              <a

                key={item.name}

                href={item.href}

                className="
                  text-white

                  text-xl

                  tracking-[8px]

                  font-bold

                  hover:text-yellow-400

                  transition
                "
              >

                {item.name}

              </a>

            ))
          }

        </div>






        {/* MOBILE BUTTON */}
        <button

          onClick={() => setOpen(!open)}

          className="
            md:hidden

            text-yellow-400

            text-4xl

            font-black
          "
        >

          ☰

        </button>



      </div>





      {/* MOBILE MENU */}
      {
        open && (

          <div
            className="
              md:hidden

              flex
              flex-col

              items-center

              gap-6

              py-8

              bg-black

              border-t
              border-yellow-400/30
            "
          >

            {
              links.map((item) => (

                <a

                  key={item.name}

                  href={item.href}

                  onClick={() => setOpen(false)}

                  className="
                    text-white

                    text-xl

                    tracking-[5px]

                    font-bold

                    hover:text-yellow-400
                  "
                >

                  {item.name}

                </a>


              ))
            }


          </div>

        )
      }


    </nav>

  );
}