"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallbackIcon?: "product" | "avatar";
}

export default function ImageWithFallback({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  sizes,
  priority = false,
  fallbackIcon = "product",
}: ImageWithFallbackProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    const icon = fallbackIcon === "avatar" ? "👤" : "📦";
    return (
      <div
        className={`bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${className}`}
      >
        <span className={fallbackIcon === "avatar" ? "text-2xl opacity-60" : "text-4xl opacity-50"}>{icon}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => setErrored(true)}
    />
  );
}
