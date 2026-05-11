import React from "react";
import { motion, useScroll } from "motion/react";
import Btn from "../components/Btn";

const SheriyansMotion = () => {
  const scrollYProgress = useScroll().scrollYProgress;
  // const {scrollYProgress} = useScroll();
  console.log(scrollYProgress);

  return (
    <>
      {/* Hero Section Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          // repeat: Infinity,
          ease: "anticipate",
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f0f0f0",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1 style={{ color: "#333" }}>Welcome to My App</h1>
        <p style={{ color: "#666", fontSize: "18px" }}>
          This is a simple React application with motion animations.
        </p>
      </motion.div>

      {/* Box Automation Path Based Animation */}
      <motion.div
        animate={{
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300, 300, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 4,
          delay: 1,
          ease: "anticipate",
          repeat: Infinity,
        }}
        style={{ height: "100px", width: "100px", backgroundColor: "#ccc" }}
      ></motion.div>

      {/* Button Component using Motion by Mannu Paaji */}
      <Btn />

      {/* Drag example using Motion */}
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
        whileDrag={{ scale: 1.5 }}
        dragElastic={0.5}
        // dragDirectionLock="true"
        className="h-25 w-25 bg-red-500"
      ></motion.div>

      {/* Scroll Based Animation */}
      <div className="h-screen w-[100vw] bg-black p-20 text-center text-white font-mono">
        {/* Scroll down to see the progress bar in action */}
        <motion.div
          className="bg-red-500 w-full h-3 fixed top-0 left-0"
          // origin left will start the red progress bar from left in Tailwind CLass
          style={{ scaleX: scrollYProgress }}
        ></motion.div>
        <h1 className="text-5xl pb-8">Nikhil Training School</h1>
        <p>
          lorem lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptas, doloremque. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas, doloremque. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptas, doloremque. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Voluptas, doloremque. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          doloremque.
          <br /> <br />
          Motion[dot]dev (prev. Framer Motion) fully done through Sheriyans on
          10th May 2026. Time: 11:51PM. On 12th is my Viva for Mini Project
          <br /> <br />
          More to learn Motion from Manu Paaji
        </p>
      </div>
    </>
  );
};

export default SheriyansMotion;

/*
Why the red colored scrollbar, when that code snippet put above the btn component, why it doesn't show only when btn component is there? and why writing it below makes it work?

Short answer: Btn uses 3D transforms/perspective (e.g. perspective, transform-style, translateZ) which create a new stacking context and change paint order — that stacking context (and elements rendered after it) can paint above your position: fixed progress bar. Placing the bar below Btn makes it render later so it appears on top.

How to fix:

Give the bar a higher z-index (recommended): add z-50 (Tailwind) or style={{ zIndex: 9999 }}.
Or move the progress bar JSX to render after Btn.
Or remove/avoid the transforms on Btn if you don't need them.
Example (Tailwind):
<motion.div className="bg-red-500 w-full h-3 fixed top-0 left-0 origin-left z-50" style={{ scaleX: scrollYProgress }} />
*/
