"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

type Shape = {
  className: string;
  xRange?: [number, number];
  yRange?: [number, number];
  rotateRange?: [number, number];
};

function ParallaxShape({ shape }: { shape: Shape }) {
  const reducedMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], shape.xRange ?? [0, 0]);
  const y = useTransform(scrollYProgress, [0, 1], shape.yRange ?? [0, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], shape.rotateRange ?? [0, 0]);

  return (
    <motion.div
      className={shape.className}
      style={reducedMotion ? undefined : { x, y, rotate }}
    />
  );
}

export function AmbientShapeLayer({
  className,
  shapes,
}: {
  className?: string;
  shapes: Shape[];
}) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {shapes.map((shape, index) => (
        <ParallaxShape key={`${shape.className}-${index}`} shape={shape} />
      ))}
    </div>
  );
}
