import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)  

export default function Practice() {
  // const scrollRef = useRef();

  //  useGSAP(()=>{
  //  const boxes = gsap.utils.toArray(scrollRef.current.children)
  //  boxes.forEach((box)=>{
  //   gsap.to(box, {
  //     x : 150 * (boxes.indexOf(box) + 5),
  //     rotation : 360,
  //     borderRadius : '100%',
  //     scale : 1.5,    
  //     scrollTrigger : {
  //       trigger : box,
  //       start : 'bottom bottom',
  //       end : 'top 50%',
  //       scrub : true,
  //     },
  //     ease : 'power1.inOut'
  //   })
  //  })
  //  }, { scope: scrollRef})
  // gsap.to ka concept
  // useGSAP(()=>{
  // gsap.to('#blue-box', {
  //   x : 500,
  //   repeat : -1,
  //   yoyo : true,
  //   rotation : 360,
  //   duration : 2,
  //   ease : 'elastic'
  // })
  // },[])

  // gsap.from ka concept
  // useGSAP(() => {
  //   gsap.from("#blue-box", {
  //     x: 500,
  //     repeat: -1,
  //     yoyo: true,
  //     rotation: 360,
  //     duration: 2,
  //     ease: "power1.inOut",
  //   });
  // }, []);

  // gsap.fromto ka concept
  //   useGSAP(() => {
  //   gsap.fromTo("#blue-box", {

  //     x : 0,
  //     rotation : 0,
  //     borderRadius : '95% '
  //   },
  //   {
  //   x: 500,
  //     repeat: -1,
  //     yoyo: true,
  //     rotation: 360,
  //     duration: 2,
  //     ease: "bounce.inOut",
  //     borderRadius : 0
  //   }
  // );
  // }, []);

  // gsap.timeline ka concept
  // const timeLines = gsap.timeline({
  //   repeat : -1, repeatDelay : 1 , yoyo : true
  // })

  // useGSAP(()=>{
  //   timeLines.to(
  //     "#blue-box",
  //     {
  //       x: 600,
  //       duration: 2,
  //       borderRadius: "100%",
  //       ease: "back.inOut",
  //       rotation: 360,
  //     },
  //   );

  //   timeLines.to("#blue-box", {
  //     y: -150,
  //     borderRadius: "8px",
  //     scale: 1,
  //     duration: 2,
  //     ease: "back.inOut",
  //     rotation: 360,
  //   });

  //   timeLines.to("#blue-box", {
  //     y: 0,
  //     borderRadius: "8px",
  //     scale: 1,
  //     duration: 2,
  //     ease: "back.inOut",
  //     rotation: 360,
  //   });

  //   timeLines.to("#blue-box", {
  //     x: 1050,
  //     borderRadius: "8px",
  //     scale: 1,
  //     duration: 2,
  //     ease: "back.inOut",
  //     rotation: 360,
  //   });
  // })

  // useGSAP(() => {
  //   gsap.to("#blue-box", {
  //     y: -200,
  //     repeat: -1,
  //     yoyo: true,
  //     rotation: 360,
  //     stagger : {
  //       amount : 1.5,
  //       grid : [2,1],
  //       axis : 'y',
  //       from : 'center',
  //       ease : 'circ.inOut'
  //     }
  //   });
  // }, []);
  useGSAP(()=>{
    gsap.to('#text',{
      ease : 'power1.inOut',
      opacity : 1,
      y : 0
    })

    gsap.fromTo('#para',{
      opacity : 0,
      y : 20
    },
   {
    opacity : 1,
    y : 0,
    delay : 1,
    stagger : 0.1
   }
  )
  })

  return (
    <div className="w-screen flex items-center justify-center bg-black h-screen">
      <div className="flex flex-col-reverse items-center gap-5">
        <h1 id="para" className=" text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas fuga
          
        </h1>
        <h1 id="text" className="opacity-0 translate-y-20 text-white">
          Hello Work
        </h1>
        <div id="pink-box" className="bg-pink-500 rounded-md w-20 h-20"></div>
      </div>
    </div>
  );
}
