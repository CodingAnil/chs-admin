import React from "react";
import Image from "next/image";
import BackButton from "@/icons/backbtn.svg";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();

  return (
    <div className="mx-3 relative custom-backbtn">
      <div
        href="#"
        onClick={router.back}
        className="flex items-center space-x-2 absolute left-0 backbtn"
      >
        <Image src={BackButton} alt="backbtn" height={30} width={30} />
        <span className="text-base font-medium text-gray-900 ml-2">
          Go back
        </span>
      </div>
    </div>
  );
};

export default GoBack;
