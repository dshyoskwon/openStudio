"use client";

import Image from "next/image";
import { useState } from "react";

type Transform = {
  x: number;
  y: number;
};

export default function InteractiveDiagram() {
  const [transform, setTransform] = useState<Transform>({ x: 0, y: 0 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 ~ 0.5
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;

    const maxTranslate = 18; // px, 움직임 강도

    setTransform({
      x: relativeX * maxTranslate,
      y: relativeY * maxTranslate,
    });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  return (
    <div
      className="w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-full h-full transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        }}
      >
        <Image
          src="/images/ors_diagram01.png"
          alt="Open Research Studio Process Diagram"
          width={1600}
          height={1200}
          className="w-full h-auto object-contain object-center lg:object-left-top"
          priority
        />
      </div>
    </div>
  );
}


