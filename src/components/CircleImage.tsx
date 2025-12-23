"use client";

import Image from "next/image";

type CircleImageProps = {
  src: string;
  alt: string;
  size?: number; // pixels
  priority?: boolean;
};

export default function CircleImage({
  src,
  alt,
  size = 320, // default size
  priority = false,
}: CircleImageProps) {
  return (
    <div
      className="relative overflow-hidden  rounded-full border border-white/10"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover "
      />
    </div>
  );
}
