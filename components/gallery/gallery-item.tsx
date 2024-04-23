"use client";

import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Images } from "@prisma/client";
import { cn } from "@/lib/utils";

interface GalleryItemProps {
  image: Images;
  images: Images[];
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(images.map((e) => e.url).indexOf(image.url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextImage = () => {
    const max = images.length - 1;
    if (index == max) {
      return setIndex(0);
    }
    return setIndex(index + 1);
  };

  const prevImage = () => {
    const max = images.length - 1;
    if (index == 0) {
      return setIndex(max);
    }
    return setIndex(index - 1);
  };

  return (
    <Dialog>
      <AspectRatio ratio={image.width / image.height}>
        <DialogTrigger asChild>
          <Image
            src={image.url}
            alt="Gallery Image"
            fill
            className="object-cover hover:cursor-pointer hover:opacity-75 transition-all ease-in-out duration-200"
          />
        </DialogTrigger>
      </AspectRatio>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="flex justify-center z-[999]"
      >
        <div className="relative self-center">
          <button>
            <ChevronLeft
              onClick={prevImage}
              size={34}
              className="hover:opacity-50"
            />
          </button>
        </div>
        <AspectRatio ratio={image.width / image.height}>
          {images.map((image, imageIndex) => (
            <Image
              key={image.id}
              src={image.url}
              alt="Gallery Image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={cn(
                "object-contain max-h-[calc(100vh-64px)] w-full cursor-default select-none absolute top-0 left-0 block transition-opacity duration-500 ease-in",
                index === imageIndex ? "opacity-100 z-1" : "opacity-0 z-0"
              )}
            />
          ))}
        </AspectRatio>
        <div className="relative self-center">
          <button>
            <ChevronRight
              onClick={nextImage}
              size={34}
              className="hover:opacity-50"
            />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryItem;
