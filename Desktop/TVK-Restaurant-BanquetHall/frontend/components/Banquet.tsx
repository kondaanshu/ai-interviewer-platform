 "use client";

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



// EVENT CLICK BOOKING

const eventBooking = (eventName:string)=>{

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
icon:"💍",
name:"Luxury Wedding"
},

{
icon:"🎂",
name:"Birthday Party"
},

{
icon:"💐",
name:"Engagement Ceremony"
},

{
icon:"🏢",
name:"Corporate Event"
},

{
icon:"🍽️",
name:"Premium Dining"
},

{
icon:"🌸",
name:"Royal Decoration"
},

];






return (

<section

id="banquet"

className="
min-h-screen
bg-black
text-white
overflow-hidden
"

>



{/* HERO SECTION */}


<div

className="
relative

h-screen

bg-cover

bg-center

flex

items-center

px-20

"

style={{

backgroundImage:

"url('/images/banquet-hero.jpg')"

}}

>


{/* OVERLAY */}


<div

className="
absolute
inset-0
bg-black/60
"

/>





{/* TEXT */}

<div

className="
relative

z-10

animate-pulse

"

>



<p

className="
text-yellow-400

text-2xl

tracking-[12px]

font-black

mb-8
"

>

ROYAL CELEBRATIONS

</p>




<h1

className="
text-8xl

font-black

leading-tight

drop-shadow-2xl
"

>

TVK Luxury

<br/>

Banquet Hall


</h1>




<p

className="
text-3xl

mt-8

text-gray-200
"

>

Weddings • Birthdays • Corporate Events

</p>






<button

onClick={bookBanquet}

className="
mt-12

bg-yellow-400

text-black

px-16

py-5

rounded-full

text-2xl

font-black

hover:scale-110

transition-all

duration-500

shadow-2xl

shadow-yellow-500/50
"

>

BOOK BANQUET NOW


</button>



</div>


</div>









{/* EVENTS SECTION */}



<div

className="
px-20

py-28

"

>



<h2

className="
text-center

text-7xl

font-black

tracking-[8px]

bg-gradient-to-r

from-yellow-200

via-yellow-500

to-orange-500

text-transparent

bg-clip-text

mb-20
"

>

OUR PREMIUM EVENTS

</h2>





<div

className="
grid

md:grid-cols-3

gap-10
"

>


{


events.map((item,index)=>(


<div

key={index}

onClick={()=>eventBooking(item.name)}


className="

h-52

rounded-[40px]

border

border-yellow-500/40


bg-white/10

backdrop-blur-xl


flex

items-center

justify-center


text-3xl

font-bold


cursor-pointer


hover:scale-110

hover:-translate-y-4


hover:bg-yellow-400

hover:text-black


transition-all

duration-500


shadow-xl

shadow-yellow-500/20

"


>


{item.icon} &nbsp; {item.name}


</div>



))


}



</div>


</div>









{/* CAPACITY SECTION */}


<div

className="
text-center

py-28
"

>


<h1

className="
text-9xl

font-black

text-yellow-400

animate-bounce
"

>

500+

</h1>




<p

className="
text-5xl

font-bold

mt-8
"

>

Guests Luxury Capacity Hall

</p>



<p

className="
text-2xl

text-gray-400

mt-5
"

>

Premium ambience • Royal service • Luxury celebrations

</p>




</div>




</section>


);

}