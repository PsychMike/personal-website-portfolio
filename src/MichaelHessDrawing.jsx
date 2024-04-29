import React, { useEffect } from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

const MichaelHessDrawing = () => {
  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    const drawMichael = gsap.timeline();
    const drawHess = gsap.timeline();

    // Draw "Michael"
    drawMichael
      .from("#M", { drawSVG: "0%" })
      .from("#i", { drawSVG: "0%" })
      .from("#c", { drawSVG: "0%" })
      .from("#h", { drawSVG: "0%" })
      .from("#a", { drawSVG: "0%" })
      .from("#e", { drawSVG: "0%" })
      .from("#l", { drawSVG: "0%" });

    // Draw "Hess"
    drawHess
      .from("#H", { drawSVG: "0%" })
      .from("#e1", { drawSVG: "0%" })
      .from("#s", { drawSVG: "0%" })
      .from("#s1", { drawSVG: "0%" });
  }, []);

  return (
    <svg viewBox="0 0 400 100" width="400" height="100">
      {/* Path for "Michael" */}
      <path
        id="M"
        d="M 10,50 L 30,10 L 40,50 L 50,10 L 60,50"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <path
        id="i"
        d="M 70,10 L 70,50"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <path
        id="c"
        d="M 80,10 L 80,50 L 90,50"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <path
        id="h"
        d="M 100,10 L 100,50 M 100,30 L 110,30 L 110,50"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <path
        id="a"
        d="M 120,10 L 120,50 M 120,30 L 130,30 L 130,50 M 120,30 L 130,10"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <path
        id="e"
        d="M 140,10 L 140,50 M 140,10 L 150,10 M 140,30 L 150,30 M 140,50 L 150,50"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <path
        id="l"
        d="M 160,10 L 160,50 M 160,50 L 170,50"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />

      {/* Path for "Hess" */}
      <path
        id="H"
        d="M 220,10 L 220,50 M 220,30 L 230,30 L 230,10 M 250,10 L 250,50 M 250,30 L 260,30 L 260,10"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <path
        id="e1"
        d="M 240,30 L 240,50 M 240,10 L 250,10"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <path
        id="s"
        d="M 270,10 Q 280,20 290,10 Q 300,0 310,10 Q 320,20 330,10"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <path
        id="s1"
        d="M 270,30 Q 280,40 290,30 Q 300,20 310,30 Q 320,40 330,30"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

export default MichaelHessDrawing;
