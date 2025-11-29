"use client";

import { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width: number, height: number, cols: number, rows: number;
    const spacing = 50;
    const packets: Packet[] = [];
    const flowRate = 0.03; // Calm flow
    const speed = 2; // Slow, deliberate speed
    let animationFrameId: number;

    class Packet {
      col: number;
      row: number;
      x: number;
      y: number;
      targetCol: number;
      targetRow: number;
      targetX: number;
      targetY: number;
      trail: { x: number; y: number }[];
      maxTrail: number;
      dead: boolean;

      constructor() {
        this.col = 0; // Start Left
        this.row = Math.floor(Math.random() * rows);
        this.x = this.col * spacing;
        this.y = this.row * spacing;
        this.targetCol = 1;
        this.targetRow = this.row;
        this.targetX = this.targetCol * spacing;
        this.targetY = this.targetRow * spacing;
        this.trail = [];
        this.maxTrail = 10;
        this.dead = false;
      }

      update() {
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist <= speed) {
          this.x = this.targetX;
          this.y = this.targetY;
          this.col = this.targetCol;
          this.row = this.targetRow;
          this.trail.push({ x: this.x, y: this.y });
          if (this.trail.length > this.maxTrail) this.trail.shift();
          this.pickNextTarget();
        } else {
          this.x += (dx / dist) * speed;
          this.y += (dy / dist) * speed;
        }

        if (this.x > width || this.y < 0 || this.y > height) this.dead = true;
      }

      pickNextTarget() {
        const r = Math.random();
        let dCol = 0,
          dRow = 0;
        // Bias heavily to the right for "flow" feel
        if (r < 0.7) dCol = 1;
        else if (r < 0.85) dRow = -1;
        else dRow = 1;

        this.targetCol = this.col + dCol;
        this.targetRow = this.row + dRow;
        this.targetX = this.targetCol * spacing;
        this.targetY = this.targetRow * spacing;
      }

      draw() {
        if (this.trail.length < 1) return;
        ctx!.beginPath();
        ctx!.moveTo(this.trail[0].x, this.trail[0].y);
        for (let i = 1; i < this.trail.length; i++) {
          ctx!.lineTo(this.trail[i].x, this.trail[i].y);
        }
        ctx!.lineTo(this.x, this.y);
        // Amber-500 with opacity
        ctx!.strokeStyle = `rgba(245, 158, 11, 0.4)`;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();

        ctx!.beginPath();
        ctx!.fillStyle = `rgb(251, 191, 36)`; // Amber-400
        ctx!.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function drawGrid() {
      ctx!.beginPath();
      ctx!.strokeStyle = `rgba(251, 191, 36, 0.1)`; // Very faint amber
      ctx!.lineWidth = 1;
      for (let i = 0; i <= cols; i++) {
        ctx!.moveTo(i * spacing, 0);
        ctx!.lineTo(i * spacing, height);
      }
      for (let j = 0; j <= rows; j++) {
        ctx!.moveTo(0, j * spacing);
        ctx!.lineTo(width, j * spacing);
      }
      ctx!.stroke();
    }

    function animate() {
      ctx!.clearRect(0, 0, width, height);
      drawGrid();

      if (Math.random() < flowRate) packets.push(new Packet());

      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.update();
        p.draw();
        if (p.dead) packets.splice(i, 1);
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    function resize() {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
      cols = Math.ceil(width / spacing);
      rows = Math.ceil(height / spacing);
    }

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      className="fixed inset-0 z-0 opacity-40 pointer-events-none"
    />
  );
}
