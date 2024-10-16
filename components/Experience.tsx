"use client";
import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <section className="pt-10 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 justify-items-center flex flex-col sm:flex-row flex-wrap justify-center gap-4">
        {workExperience.map((card, idx) => (
          <div className="w-full lg:w-[45%]" key={idx}>
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                // add this border radius to make it more rounded so that the moving border is more realistic
                borderRadius: `calc(1.75rem* 0.96)`,
                width: "100%",
              }}
              className={`
              text-black
              dark:text-white
              border-neutral-200
              dark:border-slate-800
            `}
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <p className="text-start text-white-100 font-thin">
                    {card.timeline}
                  </p>

                  <h1 className="text-start text-xl font-bold">{card.title}</h1>
                  <h2 className="text-start text-white-100 font-thin">
                    {card.company}
                  </h2>

                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
