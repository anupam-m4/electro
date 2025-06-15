import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const taglines = [
  { text: "Energizing Your Life with", highlight: "Cutting-Edge Electronics" },
  { text: "Bringing the Future of Electronics to", highlight: "You" },
  { text: "Empowering Your World with", highlight: "Smart Technology" },
  { text: "Fueling Innovation,", highlight: "One Gadget at a Time" },
  { text: "Your Trusted Source for", highlight: "Next-Gen Electronics" },
  { text: "Lighting Up Lives with", highlight: "Reliable Electronics" },
  { text: "Powering Your World with the Best in", highlight: "Electronics" },
];

export default function TaglineRotator({ startOffset = 0 }) {
  const [index, setIndex] = useState(startOffset);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentTagline = taglines[index];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentTagline.highlight}
        className="text-sm font-semibold font-sans text-red-500 flex flex-wrap gap-1 items-center"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        transition={{ duration: 0.5 }}
      >
        <span>{currentTagline.text}</span>
        <motion.span
          className="text-amber-400 font-bold ml-1.1"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 800 }}
        >
          {currentTagline.highlight}
        </motion.span>
      </motion.div>
    </AnimatePresence>
  );
}
