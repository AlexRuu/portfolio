"use client";
import { Images } from "@/types";
import GalleryItem from "./gallery-item";

interface GalleryGridColumnProps {
  images: Images[];
  fullSetImages: Images[];
}

const GalleryGridColumn: React.FC<GalleryGridColumnProps> = ({
  images,
  fullSetImages,
}) => {
  return (
    <div className="grid gap-4">
      {images.map((image) => (
        <GalleryItem key={image.id} image={image} images={fullSetImages} />
      ))}
    </div>
  );
};

export default GalleryGridColumn;
