// File: src/components/WebGLContextHandler.js
import { useEffect } from "react";

export default function ContextHandler() {
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    function onContextLost(event) {
      event.preventDefault();
      console.warn("WebGL context lost. Please reload the page.");
    }

    canvas.addEventListener("webglcontextlost", onContextLost, false);

    return () => {
      canvas.removeEventListener("webglcontextlost", onContextLost);
    };
  }, []);

  return null;
}
