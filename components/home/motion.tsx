"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right";

const ease = [0.16, 1, 0.3, 1] as const;

function getHiddenState(direction: Direction, reducedMotion: boolean) {
  if (reducedMotion) {
    return { opacity: 0 };
  }

  if (direction === "left") {
    return { opacity: 0, x: -32 };
  }

  if (direction === "right") {
    return { opacity: 0, x: 32 };
  }

  return { opacity: 0, y: 32 };
}

export function MotionReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <motion.div
      className={className}
      initial={getHiddenState(direction, reducedMotion)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: reducedMotion ? 0.25 : 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function MotionStagger({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: reducedMotion ? 0.06 : 0.12,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionStaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <motion.div
      className={className}
      variants={{
        hidden: getHiddenState(direction, reducedMotion),
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: reducedMotion ? 0.25 : 0.8, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
