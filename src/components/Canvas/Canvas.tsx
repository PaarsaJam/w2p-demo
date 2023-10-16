import React, { useEffect, useRef } from "react";

const Canvas = (props: any) => {
  const cvsRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cvs = cvsRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = 'rgb(200,200,250)';
    ctx.fillRect(0, 0, 500, 500);
  }, []);

  return <canvas ref={cvsRef} {...props} />;
};

export default Canvas;
