import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utlis";

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSize = () =>{
    if(window.innerWidth < 760){
        setVideoSrc(smallHeroVideo)
    }
    else{
        setVideoSrc(heroVideo)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize', handleVideoSrcSize);
    return ()=>{
        window.removeEventListener('resize', handleVideoSrcSize)
    }
  },[])

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5,
    });
    gsap.to('#cta',{
        opacity : 1,
        y : -50 ,
        delay : 1.5
    })
  });

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <a
            href="#highlights"
            className="bg-blue-500 px-4 py-2 text-white rounded-3xl hover:underline cursor-pointer flex items-center text-xl opacity-1 translate-y-10"
          >
            Buy
          </a>
          <p className="font-normal text-xl translate-y-12">From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
}
