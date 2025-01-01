"use client";

import Image from "next/image";
import Link from "next/link";
import { SocialLinksArray } from "../../utils/constants";
import { getMediaLink } from "../../utils/model";

const SocialLinks = ({ userLinks, userId }) => {

  return (
    <div className="bg-white text-white rounded-lg shadow-md mt-6 ">
      <h2 className="text-primary text-xl font-medium p-5">Social Links</h2>
      <div className=" relative details-gradient"></div>
      <div className="relative">
        <div
          className={`flex flex-row gap-8  p-5 flex-wrap justify-start items-center`}
        >
          {SocialLinksArray?.map((item, index) => {
            return (
              <div
                className="block min-w-[75px] text-center md:w-[98px]"
                key={index}
              >
                {getMediaLink(item?.name, userLinks) ? (
                  <Link
                    href={
                      (userLinks && getMediaLink(item?.name, userLinks)) || ""
                    }
                    target="_blank"
                    className="flex flex-col items-center"
                  >
                    <Image
                      width={70}
                      height={70}
                      src={item.MediaFile}
                      alt={item.name}
                      className="w-11 h-11"
                    />
                    <p className="text-secondprimary text-base font-medium shadow-soft_lg mt-2">
                      {item.name}
                    </p>
                  </Link>
                ) : (
                  <div className="flex flex-col items-center">
                    <Image
                      width={70}
                      height={70}
                      src={item.MediaFile}
                      alt={item.name}
                      className="w-11 h-11"
                    />
                    <p className="text-secondprimary text-base font-medium shadow-soft_lg mt-2">
                      {item.name}
                    </p>
                  </div>
                )}
                <Link href={`/profile/edit-profile?id=${userId}&role=model`}>
                  {" "}
                  <button
                    className={`mt-3 text-sm px-3 py-1.5 rounded-full ${
                      !getMediaLink(item?.name, userLinks)
                        ? "bg-primary text-white hover:text-white"
                        : "bg-darkGray100 text-white hover:text-white"
                    }`}
                  >
                    {!getMediaLink(item?.name, userLinks)
                      ? "Connect"
                      : "Disconnect"}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
