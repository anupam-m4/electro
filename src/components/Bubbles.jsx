import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react"; // Import useRef

// --- Keywords Data ---
const allKeywords = [
  "Reliable",
  "Trustworthy",
  "Secure",
  "Modern UI",
  "Easy Checkout",
  "24/7 Support",
  "User-Friendly",
  "Quick Delivery",
  "Affordable",
  "Safe Transactions",
  "Fast Returns",
  "Well Rated",
  "Smart Search",
  "Flexible Payments",
  "Customer First",
  "Fast & Secure",
  "Lightning Fast",
  "Premium Service",
  "Best Choice",
  "Trusted by Thousands",
  "Intuitive Design",
  "Global Shipping",
  "Personalized Experience",
  "Data Privacy",
  "Innovation",
];

// A curated subset of keywords for mobile screens to avoid clutter
const mobileKeywords = [
  "Reliable",
  "Trustworthy",
  "Secure",
  "User-Friendly",
  "Quick Delivery",
  "Affordable",
  "24/7 Support",
  "Fast & Secure",
  "Best Choice",
];

// --- Bubble Component Logic (Integrated) ---

// Defines the initial appearance animation for bubbles
const bubbleVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05, // Staggered delay for each bubble
      type: "spring",
      stiffness: 60, // Bouncy spring effect
    },
  }),
};

// Generates random properties for the continuous floating motion
const getRandomFloatingMotion = () => ({
  animate: {
    y: [0, -Math.random() * 20 - 5, 0], // Random vertical amplitude (-5 to -25)
    x: [0, Math.random() * 10 - 5, 0], // Random horizontal drift (-5 to 5)
  },
  transition: {
    duration: Math.random() * 3 + 2, // Random duration (2 to 5 seconds)
    repeat: Infinity,
    ease: "easeInOut", // Smooth easing for the loop
  },
});

// --- Positioning Logic ---

// Function to get a random position for each bubble, adjusted for screen size
const getRandomPosition = (index, isMobile) => {
  // Adjust distribution range based on screen size
  const topRange = isMobile ? 80 : 75; // More vertical space on mobile to prevent stacking
  const leftRange = isMobile ? 80 : 75; // More horizontal space on mobile

  // Multipliers for spreading bubbles. Higher values spread them more.
  const topMultiplier = isMobile ? 12 : 7;
  const leftMultiplier = isMobile ? 25 : 17; // Increased for better mobile horizontal spread

  const top = 10 + ((index * topMultiplier) % topRange);
  const left = 10 + ((index * leftMultiplier) % leftRange);
  return { top: `${top}%`, left: `${left}%` };
};

// --- Floating Bubbles Section Component ---
export default function Bubbles() {
  const [isMobile, setIsMobile] = useState(false);
  const dragContainerRef = useRef(null); // Ref for the drag constraints container

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const keywordsToDisplay = isMobile ? mobileKeywords : allKeywords;

  const colorClasses = [
    "bg-blue-200 text-blue-800",
    "bg-green-200 text-green-800",
    "bg-purple-200 text-purple-800",
    "bg-yellow-200 text-yellow-800",
    "bg-red-200 text-red-800",
  ];

  const sizeClasses = ["text-xs", "text-sm", "text-base", "text-md"];

  return (
    <section className="relative h-[100vh] bg-black text-white overflow-hidden flex items-center justify-center">
      <div className="h-screen flex items-center justify-center flex-col z-20 relative px-4 text-center mt-5">
        <h2 className="text-3xl md:text-6xl font-bold mb-10 text-white leading-tight">
          Your <span className="text-blue-400">Reliable & Modern</span> Platform
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-16">
          Experience seamless service with features designed for your ultimate
          convenience and peace of mind.
        </p>

        {/* This div will serve as the drag constraint boundary */}
        <div
          ref={dragContainerRef} // Attach the ref here
          className="relative w-full max-w-4xl h-[60vh] md:h-[70vh] border border-gray-700 rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-black p-4"
        >
          {keywordsToDisplay.map((word, i) => {
            const position = getRandomPosition(i, isMobile);
            const motionProps = getRandomFloatingMotion();
            const randomColorClass =
              colorClasses[Math.floor(Math.random() * colorClasses.length)];
            const randomSizeClass =
              sizeClasses[Math.floor(Math.random() * sizeClasses.length)];

            return (
              <motion.div
                key={i}
                custom={i}
                variants={bubbleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                animate={motionProps.animate}
                transition={motionProps.transition}
                className={`absolute font-medium rounded-full px-4 py-2 shadow-lg whitespace-nowrap cursor-grab active:cursor-grabbing ${randomColorClass} ${randomSizeClass}`}
                style={{
                  top: position.top,
                  left: position.left,
                  transform: "translate(-50%, -50%)",
                }}
                // --- Framer Motion Drag Props ---
                drag // Enables dragging in all directions
                dragConstraints={dragContainerRef} // Confines drag to the parent container
                dragElastic={0.2} // A bit of elasticity when hitting boundaries (0 to 1)
                dragMomentum={true} // Continues moving after release
                // Optional: To restrict drag to only one axis:
                // drag="y" // Only vertical drag
                // drag="x" // Only horizontal drag
              >
                {word}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
