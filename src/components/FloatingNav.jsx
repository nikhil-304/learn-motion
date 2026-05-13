import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { RiGamepadLine, RiStackFill, RiUserHeartLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

/**
 * 🎓 MOTION VARIANTS LESSON:
 *
 * Variants are essentially 'pre-defined animation states'.
 * Instead of writing inline objects for every motion prop, you create a central
 * object where keys (like 'hidden', 'visible') describe the animation.
 *
 * Why use them?
 * 1. CLEANER CODE: Keeps JSX focused on structure.
 * 2. ORCHESTRATION: You can coordinate complex animations between parents and children.
 * 3. INHERITANCE: If a parent is set to "visible", all its motion-children
 *    will automatically try to animate to their own "visible" state!
 */

// 1. Define the states for the main modal
const modalVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: -24,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      // Orchestration: This makes children animate one-by-one!
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.8,
    filter: "blur(10px)",
    transition: { duration: 0.2 },
  },
};

// 2. Define states for individual items (they will use the same keys as the parent)
const itemVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      name: "Button Component",
      path: "/btn",
      icon: <RiGamepadLine />,
      description: "Futuristic 3D Button",
    },
    {
      name: "Card Component",
      path: "/card",
      icon: <RiStackFill />,
      description: "Sleek Aceternity Card",
    },
    {
      name: "Hello Component",
      path: "/hello",
      icon: <RiUserHeartLine />,
      description: "Simple Hello World",
    },
  ];

  return (
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
      <div className="relative flex flex-col items-center">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={modalVariants} // 3. Connect the variants object
              initial="hidden" // 4. Set the initial key
              animate="visible" // 5. Set the target key
              exit="exit" // 6. Set the exit key
              className={cn(
                "absolute bottom-full mb-2 w-64 rounded-[2rem] bg-white/80 backdrop-blur-md p-3",
                "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
                "border border-white/50 border-t-white",
              )}
            >
              <div className="flex flex-col gap-1">
                <div className="px-3 py-2 mb-1">
                  <h3 className="text-[11px] font-bold text-neutral-800 uppercase tracking-wider">
                    Navigation
                  </h3>
                </div>
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    variants={itemVariants} // 7. Children 'inherit' the "visible" state from parent!
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-all duration-300 group",
                        location.pathname === item.path
                          ? "bg-black text-white shadow-lg"
                          : "hover:bg-neutral-100 text-neutral-600 hover:text-black",
                      )}
                    >
                      <div
                        className={cn(
                          "h-8 w-8 rounded-lg flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110",
                          location.pathname === item.path
                            ? "bg-white/20"
                            : "bg-neutral-100 group-hover:bg-white shadow-sm",
                        )}
                      >
                        {item.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold leading-none">
                          {item.name}
                        </span>
                        <span
                          className={cn(
                            "text-[9px] mt-0.5",
                            location.pathname === item.path
                              ? "text-white/60"
                              : "text-neutral-400",
                          )}
                        >
                          {item.description}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)} // Trigger on Click
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "h-16 w-16 rounded-full bg-white flex items-center justify-center text-3xl text-black relative group",
            "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
            "border border-neutral-100",
          )}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neutral-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <motion.div
            animate={
              isOpen ? { rotate: 135, scale: 1.1 } : { rotate: 0, scale: 1 }
            }
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative z-10"
          >
            <HiMiniSquares2X2 className="text-black" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-4 right-4 h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
          />
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingNav;
