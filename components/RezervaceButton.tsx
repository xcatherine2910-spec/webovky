"use client";

import React, { useRef } from "react";

type Props = {
  href?: string;
  className?: string;
  label?: string;
};

export default function RezervaceButton({
  href = "/rezervace",
  className = "",
  label = "REZERVACE",
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleClick = () => {
    const el = ref.current;
    if (!el) return;
    // Reset animation if already active, then retrigger
    el.classList.remove("btn-glow");
    void el.offsetWidth; // force reflow
    el.classList.add("btn-glow");
  };

  return (
    <a
      ref={ref}
      href={href}
      onClick={handleClick}
      className={`btn btn-primary ${className}`}
    >
      {label}
    </a>
  );
}
