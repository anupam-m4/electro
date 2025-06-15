import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react"; // Import useRef
import { useNavigate } from "react-router-dom";

export default function MidbannerFirstSlide() {
  // For magnetic button effect
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const mouseX = e.clientX - rect.left - centerX;
    const mouseY = e.clientY - rect.top - centerY;
    x.set(mouseX / centerX);
    y.set(mouseY / centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const navigate = useNavigate();

  return (
    <section className="relative h-[95vh] flex flex-col items-center justify-center text-white px-4 text-center overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 30, // Slow, continuous animation
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background:
            "linear-gradient(270deg, #0A0A1A, #1A1A3B, #0F0F2A, #0A0A1A)",
          backgroundSize: "200% 200%",
        }}
      ></motion.div>

      {/* Content Wrapper with Glassmorphism Effect */}
      <motion.div
        initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 p-6 md:p-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl border border-white border-opacity-20 max-w-4xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-shadow-lg drop-shadow-2xl text-gray-500 ">
          Discover The Ultimate shopping Experience
        </h1>
        <p className="text-md text-black sm:text-lg max-w-3xl font-light opacity-90 mb-8">
          We bring you the
          <span
            className="
           bg-black 
          
          m-1 p-1 font-bold text-lime-400 "
          >
            smoothest, fastest, and most enjoyable
          </span>
          way to shop online. Unmatched quality, unbeatable support, all at your
          fingertips.
        </p>

        {/* Magnetic Button */}
        <motion.button
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
          whileTap={{ scale: 0.95 }}
          className="relative px-8 py-3 
          bg-gradient-to-r to-amber-300 from-purple-500 text-white
          font-bold rounded-full shadow-lg overflow-hidden
          transition-all duration-300 ease-out transform-gpu text-lg md:text-xl
          before:absolute before:inset-0 before:bg-white before:opacity-0 before:hover:opacity-20 before:transition-opacity before:duration-300"
        >
          <button
            onClick={() => navigate("/products")}
            className="relative z-10 cursor-pointer"
          >
            Shop Now
          </button>
        </motion.button>
      </motion.div>
    </section>
  );
}
