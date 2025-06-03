import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import ModelView from "./ModelView";
import { yellowImg } from "../utlis";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { View } from "@react-three/drei";
import { models, sizes } from "../constant";
import ContextHandler from "./ContextHandler";
import { transform } from "framer-motion";
import { animationWithGsapTimeline } from "../utlis/animation";

export default function Model() {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  const [smallRotation, setSmallRotaion] = useState(0);
  const [largeRotation, setLargeRotaion] = useState(0);

  const controlCameraSmall = useRef();
  const controlCameraLarge = useRef();
  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      y: 0,
    });
  },[]);

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const tl = gsap.timeline()

  useEffect(()=>{
    if (size === 'large') {
      animationWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2",{
        transform : `translateX(-100%)`,
        duration : 2
      })
    }
    if (size === "small") {
      animationWithGsapTimeline(tl, large, smallRotation, "#view1", "#view2", {
        transform: `translateX(0)`,
        duration: 2,
      });
    }
    
  },[size])
  return (
    <>
      <section className="common-padding">
        <div className="screen-max-width">
          <h1 id="heading" className="section-heading text-gray-400">
            Take a closer look
          </h1>
        </div>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              gsapControl={controlCameraSmall}
              setRotation={setSmallRotaion}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              gsapControl={controlCameraLarge}
              setRotation={setLargeRotaion}
              item={model}
              size={size}
            />
            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
                <ContextHandler />
              <View.Port />
            </Canvas>
          </div>
          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>
            <div className="flex-center">
              <ul className="color-container">
                {models.map((color) => (
                  <li
                    key={color.id}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: color.color[0] }}
                    onClick={() => setModel(color)}
                  />
                ))}
              </ul>
              <button className="size-btn-container">
                {sizes.map(({ label, value})=> (
                <span className="size-btn"
                style={{ backgroundColor: size === value ? 'white' : 'transparent', color : size === value ? 'black' : 'white' }}
                key={label} 
                onClick={()=> setSize(value)}
                >
                 {label}
                </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
