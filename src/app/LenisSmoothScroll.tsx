"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisSmoothScroll() {
  const lenisRef = useRef<Lenis | undefined>(undefined);
  const rafHandleRef = useRef<number | null>(null);

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis();

      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        rafHandleRef.current = requestAnimationFrame(raf);
      };
      rafHandleRef.current = requestAnimationFrame(raf);
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = undefined;
      }
      if (rafHandleRef.current) {
        cancelAnimationFrame(rafHandleRef.current);
        rafHandleRef.current = null;
      }
    };
  }, []);

  return null; // This component doesn't render anything, it only manages smooth scrolling
}
