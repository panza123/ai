import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <main className="max-w-[1440px] px-2 lg:px-16 ">
      <div className="grid lg:grid-cols-2 w-full h-full mt-8 ">
        <div className="relative w-full lg:w-[70%] h-[400px] ">
          <Image
            src={"/assets/pexels-michelangelo-buonarroti-8728223.jpg"}
            alt="robot-ai"
            fill
            className="object-contain"
          />
        </div>

        {/* {text-sector} */}
        <div>
          <h2 className="text-xl font-bold pt-4 lg:pt-0">
            Understanding Artificial Intelligence: A Comprehensive Overview{" "}
          </h2>

          <p className="pt-4  font-light">
            Artificial Intelligence (AI) refers to the simulation of human
            intelligence processes by machines, particularly computer systems.
            These processes include learning (the acquisition of information and
            rules for using the information), reasoning (using rules to reach
            approximate or definite conclusions), and self-correction.
          </p>

          <p className="pt-4 font-light">
            AI is an interdisciplinary field that draws on computer science,
            mathematics, psychology, linguistics, philosophy, neuroscience, and
            other disciplines. It encompasses a wide range of subfields,
            including machine learning, natural language processing, computer
            vision, robotics, expert systems, and more.
          </p>
        </div>
      </div>
    </main>
  );
}
