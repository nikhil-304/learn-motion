"use client";
import { React, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
// AnimatePresence enables "exit" animations for components that are
// conditionally removed from the React tree. It keeps leaving components
// mounted long enough for their `exit` animation to play before unmounting.
import { RxCross2 } from "react-icons/rx";
import { RiSlackFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { IoIosAdd } from "react-icons/io";
import { cn } from "@/lib/utils";

const Card = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {/* AnimatePresence lets child components run their `exit` animation
          when they are removed from the tree. Here it wraps a conditionally
          rendered `motion.div` using `{open && (...)}`. When `open` becomes
          false React would normally unmount the child immediately, but
          AnimatePresence keeps it mounted long enough to play the `exit`
          animation defined on the child. */}
      <AnimatePresence>
        {/* The motion.div below defines `initial`, `animate` and `exit` states.
            The `exit` animation will run on unmount only because
            AnimatePresence is present above. */}
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            // When the component unmounts, then this animation "exit" works
            // `exit` defines how this element should animate when it is removed.
            // This will only run because AnimatePresence is wrapping it.
            exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
              "w-72 min-h-[28rem] h-[28rem] rounded-xl bg-white",
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
              "p-6 flex flex-col",
            )}
          >
            <h2 className="font-bold text-[13px]">Aceternity UI Components</h2>
            <p className="text-neutral-500 mt-2 text-[10px]">
              A collection of beautiful and reusable UI components.
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1"
              >
                <img
                  src="https://blog.aceternity.com/logo.png"
                  alt="Icon"
                  className="h-4 w-4"
                />
                Aceternity
                {/* Cross Icon idhar daalna hai */}
                <RxCross2 />
              </button>
            </div>
            <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
              {/* Motion divs start here */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                whileHover={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="absolute inset-0 h-full w-full border border-neutral-200 bg-white rounded-lg divide-y divide-neutral-200"
              >
                {/* UI Card Blocks - 1 */}
                <div className="flex gap-2 p-4">
                  <div
                    className="h-7 w-7 shrink-0 rounded-md bg-white flex items-center justify-center
                  shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                  >
                    {/* <IconMessage className="h-4 w-4 text-neutral-600" /> */}
                    <RiSlackFill className="h-4 w-4" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold">
                      Aceternity UI Components
                    </p>

                    <p className="mt-1 text-[8px] text-neutral-400">
                      A collection of UI components
                    </p>
                  </div>
                </div>
                {/* UI Card Blocks - 2 */}
                <div className="flex gap-2 p-4">
                  <div
                    className="h-7 w-7 shrink-0 rounded-md bg-white flex items-center justify-center
                  shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                  >
                    {/* <IconMessage className="h-4 w-4 text-neutral-600" /> */}
                    <FaReact className="h-4 w-4" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold">
                      Some other components
                    </p>

                    <p className="mt-1 text-[8px] text-neutral-400">
                      A collection of some other UI components
                    </p>
                  </div>
                </div>
                {/* UI Card Blocks - 3 */}
                <div className="flex gap-2 p-4">
                  <div
                    className="h-7 w-7 shrink-0 rounded-md bg-white flex items-center justify-center
                  shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                  >
                    {/* <IconMessage className="h-4 w-4 text-neutral-600" /> */}
                    <SiFramer className="h-4 w-4" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold">
                      Made with &lt;3 by Nikhil Shrivastava
                    </p>

                    <p className="mt-1 text-[8px] text-neutral-400">
                      Made with Motion (prev. Framer Motion)
                    </p>
                  </div>
                </div>

                {/* UI Card Blocks - 4 */}
                <div className="flex gap-2 p-4">
                  <div
                    className="h-7 w-7 shrink-0 rounded-md bg-white flex items-center justify-center
                  shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                  >
                    <img
                      src="https://blog.aceternity.com/logo.png"
                      alt="Icon"
                      className="h-4 w-4"
                    />
                    {/* <IconMessage className="h-4 w-4 text-neutral-600" /> */}
                  </div>

                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold">
                      Aceternity UI by Manu Arora
                    </p>

                    <p className="mt-1 text-[8px] text-neutral-400">
                      Made by Manu Arora's Motion tutorials
                    </p>
                  </div>
                </div>

                {/* Create Project */}
                <div className="flex items-center justify-center gap-2 p-4">
                  <div
                    className="h-4 w-4 flex-shrink-0 rounded-md bg-white
                              flex items-center justify-center
                              bg-gradient-to-br
                              shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                  >
                    <IoIosAdd className="h-3 w-3" />
                  </div>

                  <p className="text-[8px] text-neutral-400">Create Project</p>
                </div>
              </motion.div>
              {/* Motion divs end here */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
