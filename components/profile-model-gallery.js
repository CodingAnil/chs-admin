import React from "react";
import { Card } from "@nextui-org/react";
import Image from "next/image";

const ProfileModalGallery = ({ galleryList }) => {
  return (
    <>
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none overflow-visible relative w-full"
      >
        <Image
          alt={galleryList.name}
          className="object-cover w-full rounded-lg h-full"
          height={200}
          src={galleryList.modalProfile}
          width={200}
        />
      </Card>
    </>
  );
};

export default ProfileModalGallery;
