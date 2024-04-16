"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Images } from "@prisma/client";

interface HomeDisplayProps {
  images: Images[];
}

const HomeDisplay: React.FC<HomeDisplayProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const { height, width } = useWindowDimensions();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const imagesLength = images.length - 1;
    const interval = setInterval(() => {
      if (imageIndex >= imagesLength) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }, 10000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageIndex]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className="absolute block top-0 left-0 cursor-default overflow-hidden select-none z-1"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className="cursor-default select-none absolute block top-0 left-0 overflow-hidden"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {images.map((image, index) => (
          <div
            className={cn(
              "cursor-default select-none absolute top-0 left-0 block transition-opacity duration-1000 ease-in",
              index === imageIndex ? "opacity-100 z-1" : "opacity-0 z-0"
            )}
            key={image.id}
          >
            <AspectRatio
              key={image.id}
              ratio={16 / 9}
              style={{ width: `${width}px`, height: `${height}px` }}
              className="max-h-full"
            >
              <Image
                src={image.url}
                alt="Homepage Display Image"
                //@ts-ignore
                width={width}
                //@ts-ignore
                height={height}
                style={{ width: `${width}px`, height: `${height}px` }}
                className="object-cover motion-reduce:transition-none"
              />
            </AspectRatio>
          </div>
        ))}
        <div
          className="z-10 relative flex justify-center items-end"
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <ChevronDown
            className="text-white relative"
            size={62}
            // @ts-ignore
            onClick={() => window.scrollTo({ top: height })}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeDisplay;
