"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Service } from ".";
import Link from "next/link";

const Services = ({
  items,
  className,
}: {
  items: Service[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid gap-y-8 grid-cols-3 sm:grid-cols-1  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#ffc312] rounded-full"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Link href={item.slug || ""}>
            <Card isFirst={idx === 0 ? true : false}>
              <Image
                className="mobile414:w-[3.5rem] h-auto w-[5rem]"
                height={100}
                width={100}
                src={item.icon?.original}
                alt={item.name}
              />

              <CardTitle>{item.name}</CardTitle>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  isFirst,
}: {
  className?: string;
  children: React.ReactNode;
  isFirst: boolean;
}) => {
  return (
    <div
      className={cn(
        `rounded-full cursor-pointer h-full w-full py-[1.25rem] relative z-20`,
        className
      )}
    >
      <div className="relative z-50">
        <div className="px-6 py-4 flex items-center justify-center gap-[1.5rem]">
          {children}
        </div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "mobile414:text-[1.25rem] text-text-dark w-[calc(100% - 5rem)] hover:text-[#ff6b35] capitalize font-readex_pro text-[1.85rem] font-semibold",
        className
      )}
    >
      {children}
    </h4>
  );
};

export default Services;
