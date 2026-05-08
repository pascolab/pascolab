"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useSpring,
} from "motion/react";
import { statsContent } from "@/app/api/data";

function AnimatedNumber({
  value,
  active,
}: {
  value: number;
  active: boolean;
}) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const display = useTransform(rounded, (v) => v.toLocaleString());

  useEffect(() => {
    if (!active) return;
    const controls = animate(motionValue, value, {
      duration: 1.5,
      ease: [0.4, 0, 0.58, 1],
    });
    return controls.stop;
  }, [active, value, motionValue]);

  return <motion.span>{display}</motion.span>;
}

function StatItem({
  value,
  suffix,
  label,
  active,
  isLast,
  index,
}: {
  value?: number;
  suffix?: string;
  label: string;
  active: boolean;
  isLast: boolean;
  index: number;
}) {
  const hasValue = typeof value === "number" && Number.isFinite(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`flex flex-col gap-3 px-6 py-6 sm:py-8 ${
        !isLast ? "border-r border-border" : ""
      }`}
    >
      {hasValue ? (
        <>
          <p className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-none tracking-tight">
            <AnimatedNumber value={value} active={active} />
            {suffix ? <span className="text-primary">{suffix}</span> : null}
          </p>
          <p className="uppercase tracking-widest text-muted-foreground text-small">
            {label}
          </p>
        </>
      ) : (
        <p className="text-xl md:text-2xl font-bold text-primary">{label}</p>
      )}
    </motion.div>
  );
}

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const active = useInView(sectionRef, { once: true, amount: 0.25 });

  return (
    <section ref={sectionRef} className="bg-background overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-start lg:items-center">
          {/* Left — heading + description */}
          <div className="lg:w-5/12 xl:w-4/12 shrink-0 content-space">
            <h2 className="md:max-w-4xl w-full">{statsContent.title}</h2>
            <p className="text-muted-foreground max-w-md font-normal">
              Not just numbers… a reflection of the{" "}
              <span className="underline underline-offset-2 decoration-primary">
                work
              </span>
              ,{" "}
              <span className="underline underline-offset-2 decoration-primary">
                thinking
              </span>
              , and{" "}
              <span className="underline underline-offset-2 decoration-primary">
                momentum
              </span>{" "}
              behind what we build.
            </p>
          </div>

          {/* Right — stats grid */}
          <div className="w-full lg:flex-1 border-t border-b border-border">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 divide-border">
              {statsContent.stats.map((stat, i) => (
                <StatItem
                  key={i}
                  index={i}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  active={active}
                  isLast={i === statsContent.stats.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
