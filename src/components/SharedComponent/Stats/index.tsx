"use client";

import { useEffect, useRef, useState } from "react";
import { counterStats } from "@/app/api/data";

function useCountUp(end: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [active, end, duration]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  active,
  isLast,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  isLast: boolean;
}) {
  const count = useCountUp(value, 2200, active);

  return (
    <div
      className={`flex flex-col gap-3 px-6 py-6 sm:py-8 ${
        !isLast ? "border-r border-border" : ""
      }`}
    >
      <p className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-none tracking-tight">
        {count}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className=" uppercase tracking-widest text-muted-foreground text-small">
        {label}
      </p>
    </div>
  );
}

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-start lg:items-center">
          {/* Left — heading + description */}
          <div className="lg:w-5/12 xl:w-4/12 shrink-0 content-space">
          <h2 className="md:max-w-4xl w-full">
              We&apos;re committed to lead your digital journey to success.
            </h2>
            <p className="text-muted-foreground max-w-md  font-normal">
            We have a proven track record of building scalable software solutions for businesses.
            </p>
          </div>

          {/* Right — stats grid */}
          <div className="w-full lg:flex-1 border-t border-b border-border">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 divide-border">
              {counterStats.map((stat, i) => (
                <StatItem
                  key={i}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  active={active}
                  isLast={i === counterStats.length - 1}
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
