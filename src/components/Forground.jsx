import React, { useRef } from 'react'
import Card from './Card'


function Forground() {


    const ref = useRef(null);
    const data = [
        {
            desc: "Hello! I'm Abhay Pratap Singh UI/UX Designer.",
            filesize: "Portfolio",
            close: false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"},

        },
        {
            desc: "Hey there! I'm Sparshi Singh Software Engineer.",
            filesize: "Resume",
            close: false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "purple"},

        },
        {
            desc: "Hello! LOL i'm Nothing! just joking bro?",
            filesize: "Website",
            close: true,
            tag: {isOpen: false, tagTitle: "Not Available", tagColor: "blue"},

        },
    ]
  return (
    <div ref={ref} className='fixed  top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
    {data.map((item, index) => (
        <Card data={item} reference={ref} />
    ))} 
   </div>
  )
}

export default Forground
