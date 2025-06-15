import React, { useState } from "react";

const TiltImg = ({ src, alt }) => {
  const [style, setStyle] = useState({});

  // Handler for mouse movement inside image container
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation degrees (max 15deg)
    const rotateX = ((y - centerY) / centerY) * 15; // up/down tilt
    const rotateY = ((x - centerX) / centerX) * -15; // left/right tilt (negative for natural direction)

    setStyle({
      transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      transition: "transform 0.1s ease-out",
    });
  };

  // Reset style when mouse leaves
  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.5s ease-in-out",
    });
  };

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="rounded-full w-[550px] shadow-2xl shadow-red-400 cursor-pointer"
    />
  );
};

export default TiltImg;
