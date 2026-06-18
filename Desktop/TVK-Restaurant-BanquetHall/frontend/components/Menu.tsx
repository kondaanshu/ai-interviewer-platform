"use client";

import { useState } from "react";

export default function Menu() {
  // FIXED: safe state (no TS/undefined issue)
  const [selected, setSelected] = useState({
    name: "",
    price: 0,
  });

  const menu = [
    {
      title: "HOMELY THALI",
      items: [
        ["SOUTH INDIAN VEG THALI (ONLY LUNCH)", 160],
        ["SOUTH INDIAN NON VEG THALI (ONLY LUNCH)", 280],
      ],
    },
    {
      title: "VEG SOUPS",
      items: [
        ["VEG MANCHOW SOUP", 110],
        ["VEG HOT AND SOUR SOUP", 110],
        ["VEG SWEET CORN SOUP", 120],
        ["LEMON CORIENDER SOUP", 120],
        ["CREAM OF TOMATO SOUP", 130],
        ["CLEAR MUSHROOM SOUP", 130],
        ["VEG CLEAR SOUP", 100],
        ["TVK SPL SOUP", 140],
      ],
    },
    {
      title: "NON VEG SOUPS",
      items: [
        ["CHICKEN HOT AND SOUR SOUP", 130],
        ["CHICKEN MANCHOW SOUP", 140],
        ["CHICKEN GARLIC SOUP", 140],
        ["CHICKEN LEMON CORIENDER SOUP", 130],
        ["CHICKEN SWEET CORN SOUP", 120],
        ["CHICKEN CLEAR SOUP", 120],
        ["CHICKEN SCHEZWAN SOUP", 130],
        ["TVK SPL CHICKEN SOUP", 150],
      ],
    },
    {
      title: "VEG STARTERS",
      items: [
        ["VEG MANCHURIA", 200],
        ["CRISPY CORN", 200],
        ["VEG BANJARA", 230],
        ["CRISPY VEG (DRY)", 200],
        ["VEG PATIALA", 250],
        ["ODISSI VEG DRY", 250],
        ["GOLDEN VEG", 230],
        ["FINGER CHIPS (DRY)", 150],
        ["GOBI MANCHURIAN", 180],
        ["GOBI 65", 170],
        ["GOBI CHILLY", 230],
        ["VEG PLATTER", 999],
      ],
    },
    {
      title: "PANEER STARTERS",
      items: [
        ["PANEER MANCHURIAN", 280],
        ["CHILLI PANEER", 280],
        ["PANEER 65", 280],
        ["PANEER MAJESTIC", 290],
        ["PANEER PAKODA", 280],
        ["PANEER SWASTIK", 300],
        ["PANEER BIRYANI", 280],
        ["PANEER 100", 290],
      ],
    },
    {
      title: "CHICKEN STARTERS",
      items: [
        ["CHICKEN MANCHURIAN", 260],
        ["CHICKEN 65", 270],
        ["CHILLI CHICKEN", 260],
        ["SCHEZWAN CHICKEN", 280],
        ["CHICKEN MAJESTIC", 260],
        ["CHICKEN 555", 260],
        ["PEPPER CHICKEN", 250],
        ["CHICKEN LOLLIPOP", 280],
        ["DRAGON CHICKEN", 280],
        ["KOREAN FRIED CHICKEN", 300],
      ],
    },
    {
      title: "FISH STARTERS",
      items: [
        ["APOLO FISH", 360],
        ["CHILLI FISH", 350],
        ["FISH ROAST", 360],
        ["FISH 65", 350],
      ],
    },
    {
      title: "PRAWNS STARTERS",
      items: [
        ["PRAWNS MANCHURIAN", 310],
        ["PRAWNS CHILLI", 320],
        ["PRAWNS 65", 310],
        ["GARLIC PRAWNS", 350],
      ],
    },
    {
      title: "EGG STARTERS",
      items: [
        ["EGG MANCHURIAN", 200],
        ["EGG 65", 200],
        ["EGG CHILLI", 200],
        ["BOILED EGG (3 NOS)", 50],
      ],
    },
    {
      title: "ROTI / BREADS",
      items: [
        ["BUTTER NAAN", 50],
        ["GARLIC NAAN", 60],
        ["TANDOORI ROTI", 30],
        ["LACCHA PARATHA", 60],
      ],
    },
    {
      title: "CHICKEN BIRYANI",
      items: [
        ["CHICKEN DUM BIRYANI", 270],
        ["CHICKEN FRY PIECE BIRYANI", 290],
        ["CHICKEN FAMILY PACK", 550],
        ["CHICKEN JUMBO BIRYANI", 850],
      ],
    },
    {
      title: "VEG BIRYANI",
      items: [
        ["VEG BIRYANI", 200],
        ["PANEER BIRYANI", 260],
        ["MUSHROOM BIRYANI", 260],
        ["EGG BIRYANI", 220],
        ["KAJU BIRYANI", 300],
      ],
    },
    {
      title: "RICE ITEMS",
      items: [
        ["VEG FRIED RICE", 180],
        ["EGG FRIED RICE", 180],
        ["CHICKEN FRIED RICE", 200],
        ["SCHEZWAN FRIED RICE", 200],
        ["PANEER FRIED RICE", 200],
        ["KAJU FRIED RICE", 220],
        ["JEERA RICE", 180],
        ["CURD RICE", 110],
      ],
    },
    {
      title: "ROYAL RICE",
      items: [
        ["VEG PULAO", 250],
        ["KASHMIRI PULAO", 280],
        ["GREEN PEAS PULAO", 250],
        ["VEGETABLE KEEMA PULAO", 250],
        ["RAJWADI PANEER PULAO", 280],
        ["SAMBAR RICE", 190],
        ["SPL CURD RICE", 150],
      ],
    },
    {
      title: "DESSERTS",
      items: [
        ["GULAB JAMUN", 100],
        ["DOUBLE KA MEETHA", 100],
        ["FRUIT SALAD", 120],
        ["ICE CREAM", 100],
        ["GULAB JAMUN WITH ICE CREAM", 150],
      ],
    },
    {
      title: "DRINKS",
      items: [
        ["LEMON SODA", 60],
        ["MOJITO", 60],
        ["PEPSI", 30],
        ["SPRITE", 30],
        ["COCA COLA", 30],
        ["WATER BOTTLE", 20],
      ],
    },
  ];

   const handleOrder = () => {

  if (!selected.name) return;


  const message = `
🍽️ TVK HOTEL NEW ORDER

---------------------

🍴 Food Item:
${selected.name}

💰 Price:
₹${selected.price}

---------------------

Hello TVK Hotel,
I want to place this order.
`;


  const phoneNumber = "919963999352";


  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  window.open(whatsappURL, "_blank");

};
 return (
    <div
      id="menu"
      className="min-h-screen bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white px-10 md:px-20 py-14 pb-44"
    >

      {/* PREMIUM HEADER */}
      <div className="text-center mb-24">
        <h1 className="text-8xl md:text-9xl font-black tracking-[12px] bg-gradient-to-r from-yellow-200 via-orange-400 to-yellow-500 text-transparent bg-clip-text animate-pulse">
          TVK
        </h1>

        <p className="text-4xl md:text-5xl mt-4 font-light tracking-[8px] text-yellow-100">
          LUXURY DINING EXPERIENCE
        </p>

        <div className="w-72 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-6"></div>
      </div>

      {/* MENU */}
      {menu.map((section, i) => (
        <div key={i} className="mb-24">

          {/* CATEGORY */}
          <div className="mb-10">
            <h2 className="text-5xl md:text-6xl font-black text-yellow-300 uppercase tracking-[4px] border-l-[10px] border-yellow-500 pl-6">
              {section.title}
            </h2>
          </div>

          {/* ITEMS */}
          <div className="grid md:grid-cols-2 gap-10">

            {section.items.map((item, j) => (
              <div
                key={j}
                onClick={() =>
                  setSelected({
                    name: String(item[0]),
                    price: Number(item[1]),
                  })
                }

                className={`cursor-pointer rounded-[32px] p-10 transition-all duration-500 border-2 backdrop-blur-2xl shadow-2xl
                hover:scale-105 hover:-translate-y-2
                hover:shadow-yellow-500/40

                ${
                  selected.name === item[0]
                    ? "bg-gradient-to-r from-yellow-300 to-orange-500 text-black border-yellow-200"
                    : "bg-gradient-to-r from-[#181818] to-[#101010] border-yellow-700/30"
                }`}
              >

                <div className="flex justify-between items-center gap-6">

                  <span className="text-3xl md:text-4xl font-bold leading-relaxed tracking-wide">
                    {item[0]}
                  </span>

                  <span className="text-4xl md:text-5xl font-black text-yellow-300">
                    ₹{item[1]}
                  </span>

                </div>
              </div>
            ))}

          </div>
        </div>
      ))}

      {/* ORDER BAR */}
      {selected.name && (
        <div className="fixed bottom-0 left-0 w-full bg-black/95 backdrop-blur-2xl border-t-2 border-yellow-500 p-8 flex justify-between items-center shadow-2xl">

          <div>
            <p className="text-gray-400 text-lg">
              Selected Item
            </p>

            <p className="text-4xl font-black text-yellow-300 mt-1">
              {selected.name}
            </p>

            <p className="text-3xl font-bold text-white mt-1">
              ₹{selected.price}
            </p>
          </div>

          <button
            onClick={handleOrder}
            className="bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 text-black font-black px-16 py-6 rounded-3xl text-3xl transition-all duration-300 hover:scale-110 shadow-2xl"
          >
            ORDER NOW
          </button>

        </div>
      )}
    </div>
  );
}