export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      left-0
      z-50

      w-full
      h-32

      bg-black/50
      backdrop-blur-xl

      flex
      items-center
      justify-between

      px-20
      "
    >

      {/* LOGO */}
      <h1
        className="
        text-yellow-400
        text-7xl
        font-black
        tracking-widest
        "
      >
        TVK
      </h1>



      {/* LINKS */}
      <div
        className="
        flex
        gap-20
        "
      >

        {[
          "HOME",
          "MENU",
          "BANQUET",
          "GALLERY",
          "CONTACT",
        ].map((item) => (

          <a
            key={item}
            href={`#${item.toLowerCase()}`}

            className="
            text-white

            text-4xl

            font-black

            tracking-[5px]

            hover:text-yellow-400

            duration-300
            "
          >

            {item}

          </a>

        ))}

      </div>




      {/* BUTTON */}
      <a
        href="#contact"

        className="
        bg-yellow-400

        text-black

        px-16
        py-6

        rounded-full

        text-3xl

        font-black

        hover:scale-110
        duration-300
        "
      >

        Reserve Now

      </a>


    </nav>
  );
}