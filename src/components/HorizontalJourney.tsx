"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function HorizontalJourney({ children }: Props) {
  // Container with id=h-scroll enables Header to control and track horizontal scroll
  return (
    <div
      id="h-scroll"
      className="horizontal-journey"
      aria-label="Horizontal journey through sections"
      role="group"
    >
      {children}
    </div>
  );
}

