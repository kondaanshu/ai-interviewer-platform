"use client";

import Image from "next/image";
import { useState } from "react";


type Item = {
  title:string;
  type:string;
  img:string;
};


export default function Gallery(){


const [active,setActive]=useState("All");


const images:Item[]=[

{
title:"Luxury Restaurant",
type:"Restaurant",
img:"/images/gallery/restaurant-1.jpg"
},

{
title:"Fine Dining Experience",
type:"Restaurant",
img:"/images/gallery/restaurant-2.jpg"
},

{
title:"Royal Banquet Hall",
type:"Banquet",
img:"/images/gallery/banquet-1.jpg"
},

{
title:"Wedding Hall",
type:"Banquet",
img:"/images/gallery/banquet-2.jpg"
},

{
title:"Grand Celebration",
type:"Banquet",
img:"/images/gallery/banquet-3.jpg"
},

{
title:"Chef Cooking",
type:"Kitchen",
img:"/images/gallery/chef-cooking.jpg"
},

{
title:"Modern Kitchen",
type:"Kitchen",
img:"/images/gallery/kitchen.jpg"
},

{
title:"Birthday Event",
type:"Events",
img:"/images/gallery/birthday-event.jpg"
},

{
title:"Royal Buffet",
type:"Events",
img:"/images/gallery/buffet.jpg"
},

];


const filtered =
active==="All"
?
images
:
images.filter(i=>i.type===active);



return(

<section
id="gallery"
className="
bg-black
min-h-screen
text-white
px-20
py-40
"
>
    
{/* TITLE */}


<h1
className="
text-center

text-[110px]

font-black

mb-8

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
text-4xl
text-gray-300
mb-24
"
>

Luxury Restaurant & Banquet Experience

</p>





{/* BUTTONS */}

<div
className="
flex
justify-center
gap-10
mb-24
"
>


{
[
"All",
"Restaurant",
"Banquet",
"Kitchen",
"Events"

].map(cat=>(

<button

onClick={()=>setActive(cat)}

key={cat}


className={`

text-3xl

px-14
py-5

rounded-full

font-bold

${

active===cat

?

"bg-yellow-400 text-black"

:

"bg-white/10"

}


`}

>

{cat}

</button>

))

}


</div>






{/* GALLERY */}


<div
className="
space-y-24
"
>


{

filtered.map((item,index)=>(


<div

key={index}


className="
relative

w-full

h-[750px]

rounded-[60px]

overflow-hidden

border

border-yellow-500/40

shadow-2xl

shadow-yellow-500/30

group

"


>



<Image

src={item.img}

alt={item.title}

fill


className="
object-contain

bg-black

group-hover:scale-105

duration-700

"


/>



<div
className="
absolute

bottom-0

w-full

p-20

bg-gradient-to-t

from-black

to-transparent
"
>


<p
className="
text-yellow-400

text-4xl

font-black

tracking-[10px]
"
>

{item.type}

</p>



<h2

className="
text-8xl

font-black

mt-5
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

)

}