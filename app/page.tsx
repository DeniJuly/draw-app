"use client";
import { useDraw } from "@/hooks/useDraw";
import { getCurrentUser } from "@/lib/session";
import { useState } from "react";
import { ChromePicker } from "react-color";

export default function Home() {
  const [color, setColor] = useState("#000000");
  const { canvasRef, onMouseDown, clear } = useDraw(drawLine);
  function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = color;
    const lineWidth = 5;

    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();

    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }
  return (
    <div className="h-screen w-screen bg-white flex justify-center items-center">
      <div className="flex flex-col gap-12 pr-12">
        <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
        <button type="button" onClick={clear} className="border rounded-md py-2 border-black text-black">
          Clear Canvas
        </button>
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={onMouseDown}
        width={500}
        height={500}
        className="border border-black rounded-md"
      />
    </div>
  );
}
