import { useState, useEffect } from "react";

export function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Extend HTMLElement to include vendor-prefixed fullscreen methods
  interface FullscreenElement extends HTMLElement {
    webkitRequestFullscreen?: () => Promise<void>;
  }

  const requestFullscreen = (element: FullscreenElement) => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    }
  };

  const checkFullscreen = () => {
    if (
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement
    ) {
      setIsFullscreen(true);
    } else {
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", checkFullscreen);
    document.addEventListener("webkitfullscreenchange", checkFullscreen);

    // Initial check
    checkFullscreen();

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("fullscreenchange", checkFullscreen);
      document.removeEventListener("webkitfullscreenchange", checkFullscreen);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      const confirmed = window.confirm(
        "Apakah Anda yakin ingin masuk ke mode fullscreen?"
      );
      if (confirmed) {
        requestFullscreen(document.documentElement as FullscreenElement);
      }
    } else {
      const confirmed = window.confirm(
        "Apakah Anda yakin ingin keluar dari mode fullscreen?"
      );
      if (confirmed) {
        exitFullscreen();
      }
    }
  };

  return { isFullscreen, toggleFullscreen };
}
