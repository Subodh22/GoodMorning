"use client"
import React, { useEffect, useState } from 'react'

function getRandomElement(array:string[]){
    const randomIndex =Math.floor(Math.random()*array.length)
    return array[randomIndex]
}

export default function YtPlayer(){
    const randomVids = ["qM_mNRTIF-8",
        "ALaPaVBpYwQ",
        "JoxbrCg7S7k",
        "yYojmPD-GwI",
        "3CTFcoE9NmY",
    "8cMO9zzCVGM",
    "dxOuqAsYUJ0",
    "K-VAAhtdFq0",
    "b1ACU-ajNDE"

]   
    const [url,setUrl] = useState(() => getRandomElement(randomVids));
    
   

     function onclick (){
        setUrl(getRandomElement(randomVids))
    }
 

    return(<div>
           <button onClick={onclick}>
            Clickme 
           </button>
           <iframe width="772" height="434" src={`https://www.youtube.com/embed/${url}`}
            title="Vivisection (Full Video)" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write;
             encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}