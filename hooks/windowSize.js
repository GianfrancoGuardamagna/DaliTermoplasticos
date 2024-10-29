"use client";

import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      let width = window.innerWidth;
      if (width < 768) {
        setIsMobile(true);
      } else if (width >= 768 && width <= 1024) {
        setIsTablet(true);
      } else {
        setIsDesktop(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return "isMobile";
  }
  if (isTablet) {
    return "isTablet";
  }
  if (isDesktop) {
    return "isDesktop";
  }
}
