import React, { useEffect, useRef } from "react";

const Canvas = (props: any) => {
  const cvsRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cvs = cvsRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, 100, 100);
  }, []);

  return <canvas ref={cvsRef} {...props} />;
};

export default Canvas;
