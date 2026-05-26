import { useEffect,type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAPAnimations } from "../../hooks/useGSAPAnimations";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollWrapperProps {
  children: ReactNode;
}

export default function SmoothScrollWrapper({
  children,
}: SmoothScrollWrapperProps) {
  useGSAPAnimations();

  useEffect(() => {
    // Configurazione globale per smooth scroll migliorato
    gsap.to("body", {
      scrollBehavior: "smooth",
      duration: 0,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}

