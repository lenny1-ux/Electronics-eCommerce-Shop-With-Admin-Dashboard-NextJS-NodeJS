// ./RatingPercentElement.tsx
"use client";

import React from "react";

interface RatingPercentElementProps {
  percent: number; // rating percentage (0-100)
  size?: number;   // optional width/height in pixels
  color?: string;  // optional fill color
  backgroundColor?: string; // optional background color
}

const RatingPercentElement: React.FC<RatingPercentElementProps> = ({
  percent,
  size = 100,
  color = "#4ade80", // default green
  backgroundColor = "#e5e7eb", // default gray-200
}) => {
  const clampedPercent = Math.max(0, Math.min(100, percent)); // clamp 0-100

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: backgroundColor,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 600,
        fontSize: size * 0.3,
        color: "#111827", // default text color (gray-900)
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: `conic-gradient(${color} ${clampedPercent * 3.6}deg, transparent 0deg)`,
        }}
      />
      <span style={{ zIndex: 1 }}>{clampedPercent}%</span>
    </div>
  );
};

export default RatingPercentElement;
