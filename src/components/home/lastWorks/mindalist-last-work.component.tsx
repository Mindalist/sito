/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface IType {
  type?: "imgRight" | "imgLeft";
  desc: string;
  title: string;
  imgUrl: any;
}

export function MindalistLastWork({
  type = "imgLeft",
  desc,
  title,
  imgUrl,
}: IType) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const img = imgRef.current;
    const text = textRef.current;

    if (type === "imgLeft") {
      gsap.fromTo(
        img,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
      gsap.fromTo(
        text,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    } else {
      gsap.fromTo(
        text,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
      gsap.fromTo(
        img,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [type]);

  return type == "imgLeft" ? (
    <div
      ref={containerRef}
      className="w-full h-full flex flex-col items-center md:py-4 py-10"
    >
      <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
        <img
          ref={imgRef}
          className="md:w-[50%] w-full md:rounded-t-lg rounded-sm"
          src={imgUrl}
          alt={title}
        />
        <div
          ref={textRef}
          className="md:w-[50%] w-full bg-[#030318]! dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md"
        >
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-md mt-4">{desc}</p>
        </div>
      </div>
    </div>
  ) : (
    <div
      ref={containerRef}
      className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6"
    >
      <div
        ref={textRef}
        className="md:w-[50%] w-full bg-[#030318]! dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md"
      >
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-md mt-4">{desc}</p>
      </div>
      <img
        ref={imgRef}
        className="md:w-[50%] w-full md:rounded-t-lg rounded-sm"
        alt={title}
        src={imgUrl}
      />
    </div>
  );
}
