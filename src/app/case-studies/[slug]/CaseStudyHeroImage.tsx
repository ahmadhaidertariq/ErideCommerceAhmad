"use client";

import ImageWithFallback from "@/components/ImageWithFallback";

interface CaseStudyHeroImageProps {
  src: string;
  alt: string;
}

export default function CaseStudyHeroImage({ src, alt }: CaseStudyHeroImageProps) {
  return (
    <ImageWithFallback
      src={src}
      alt={alt}
      fill
      className="object-cover"
      priority
      sizes="(max-width: 1024px) 100vw, 896px"
    />
  );
}
