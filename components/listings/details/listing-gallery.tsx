"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import { ListingImage } from "@/types/listing";

type ListingGalleryProps = {
  images: ListingImage[];
};

export default function ListingGallery({ images }: ListingGalleryProps) {
  const galleryImages = useMemo(() => {
    if (images.length > 0) {
      return images;
    }

    return [
      {
        id: "placeholder",
        imageUrl: "/images/listing-placeholder.jpg",
        publicId: "",
        listingId: "",
        createdAt: "",
      },
    ];
  }, [images]);

  const [selectedImage, setSelectedImage] = useState(galleryImages[0].imageUrl);

  return (
    <div className="space-y-4">
      <div className="relative aspect-16/10 overflow-hidden rounded-xl border">
        <Image
          src={selectedImage}
          alt="Listing"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {galleryImages.map((image) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setSelectedImage(image.imageUrl)}
            className={`relative aspect-square overflow-hidden rounded-lg border transition-all ${
              selectedImage === image.imageUrl
                ? "ring-2 ring-primary"
                : "hover:opacity-80"
            }`}
          >
            <Image
              src={image.imageUrl}
              alt="Thumbnail"
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}