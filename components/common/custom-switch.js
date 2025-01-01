import Image from "next/image";
import PublicIcon from "@/icons/public.svg";
import PrivateIcon from "@/icons/private.svg";
import { useEffect, useState } from "react";

const CustomSwitch = ({ isProPublic, toggleSwitch, id }) => {
  const [isPublic, setPublic] = useState(false);

  const toggleControl = (val) => {
    setPublic(!val);
    toggleSwitch(id, { isPublic: !val, updatedBy: "admin" });
  };

  useEffect(() => {
    setPublic(isProPublic);
  }, [isProPublic]);

  return (
    <div className="flex items-center gap-1.5">
      {/* Left label (Public) */}
      <span
        className={`text-xs font-medium ${
          isPublic ? "text-black" : "text-darkGrey500"
        }`}
      >
        Public
      </span>

      {/* Custom Switch */}
      <div
        className="relative w-12 h-6 flex items-center bg-transparent border border-secondaryShade3 rounded-full p-1 cursor-pointer transition-colors duration-300"
        onClick={() => toggleControl(isPublic)}
      >
        {/* Globe icon when inactive, Verify icon when active */}
        <div
          className={`absolute w-[18px] h-[18px] bg-primary rounded-full shadow-md flex items-center justify-center transition-transform duration-300 transform ${
            !isPublic ? "translate-x-5 pt-[1px]" : "translate-x-0"
          }`}
        >
          {isPublic ? (
            <Image
              width={15}
              height={15}
              alt="Public Modal Profile"
              src={PublicIcon}
              className={`text-xl text-gray-500`}
            />
          ) : (
            <Image
              width={12}
              height={12}
              alt="Private Modal Profile"
              src={PrivateIcon}
              className={`text-xl text-[#E8A705]`}
            />
          )}
        </div>
      </div>

      {/* Right label (Private) */}
      <span
        className={`text-xs font-medium ${
          !isPublic ? "text-black" : "text-darkGrey500"
        }`}
      >
        Elite Clients Only
      </span>
    </div>
  );
};

export default CustomSwitch;
