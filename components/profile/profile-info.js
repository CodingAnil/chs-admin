import LocationIcon from "@/icons/locationico.svg";
import Image from "next/image";
import ModelProfile from "@/images/modalico.svg";
import DummyProfile from "@/images/dummy-Profile-image.svg";
import StarIcon from "@/icons/star.svg";
import { arrayToString, getCityCountry } from "../../utils/model";
import moment from "moment";
import useMountData from "../../utils/hooks/data_getting_hook";
import { useEffect } from "react";
import { MdOutlineMail } from "react-icons/md";

const ProfileInformation = ({ userData, userId, roleType = "client" }) => {
  const { username, email, birthday, model, client, plusImage, coverImage } =
    userData;
  let roleStats = model || client;

  const { data, loading, getAllData } = useMountData(null);

  useEffect(() => {
    if (userId && roleType == "model") {
      getAllData(`/admin/get-average-rating/${userId}`);
    }
  }, [userId]);

  return (
    <>
      <div className="flex items-start gap-8 md:flex-row flex-col">
        <div className="block relative">
          <Image
            width={70}
            height={70}
            src={
              roleType == "client"
                ? plusImage?.fileUrl || coverImage?.fileUrl || DummyProfile
                : plusImage?.url || coverImage?.url || DummyProfile
            }
            alt="Profile"
            className="rounded-full bg-white w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] 2xl:w-[180px] 2xl:h-[180px]"
          />
        </div>

        <div className="flex-1 py-4 md:py-0 gap-3 text-left md:text-left">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold mb-2">
            {username}
          </h2>
          <div className="  mb-2 w-full flex items-center justify-start">
            <MdOutlineMail className="mr-2 text-primary text-xl" />
            <p className="text-[#FBFBFB] text-xs sm:text-sm font-normal">
              {email}
            </p>
          </div>
          <div className="inline-flex justify-center md:justify-start space-x-2">
            {roleType == "model" && data?.averageRating > 0 && (
              <>
                <div className="flex items-center pr-2">
                  <Image
                    width={70}
                    height={70}
                    src={StarIcon}
                    alt="Star"
                    className="w-4 h-4 sm:w-5 sm:h-5  mr-2"
                  />
                  <p className="text-[#F3F0F3] text-xs sm:text-sm font-bold flex items-center mb-0">
                    {loading ? "--" : `${data?.averageRating || 0}/5`}
                  </p>
                </div>
                <div className="border-l border-[#585858] h-auto mx-2"></div>
              </>
            )}

            <div className="flex items-center pr-2">
              <Image
                width={70}
                height={70}
                src={LocationIcon}
                alt="Location"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <p className="text-[#FBFBFB] text-xs sm:text-sm font-normal mb-0 ml-2">
                {getCityCountry(
                  roleStats?.location?.city,
                  roleStats?.location?.country
                )}
              </p>
            </div>
          </div>
          <div className="flex gap-5 mt-4 text-center flex-wrap sm:flex-nowrap justify-center md:justify-start">
            <div className="custom-profile-info">
              <p className="font-bold mb-0">
                {" "}
                {birthday && moment(birthday).format("DD MMM YYYY")}
              </p>
              <p className="font-normal mb-0">Birth Date</p>
            </div>
            <div className="custom-profile-info">
              <p className="font-bold mb-0 leading-5">
                {roleStats?.stats?.height
                  ? `${roleStats?.stats?.height} ${roleStats?.stats?.heightType}`
                  : "--"}
              </p>
              <p className="font-normal">Height </p>
            </div>
            <div className="custom-profile-info">
              <p className="font-bold  mb-0 leading-5">
                {roleStats?.stats?.weight
                  ? `${roleStats?.stats?.weight} ${roleStats?.stats?.weightType} `
                  : "--"}
              </p>
              <p className="font-normal">Weight</p>
            </div>
            <div className="custom-profile-info">
              <p className="font-bold  mb-0 leading-5">
                {arrayToString(roleStats?.stats?.tribe) || "--"}
              </p>
              <p className="font-normal">Tribe</p>
            </div>
            <div className="text-white text-sm xl:text-base">
              <p className="font-semibold mb-0">
                {arrayToString(roleStats?.stats?.spokenLanguages) || "--"}
              </p>
              <p className="font-normal mb-0">Spoken Languages</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInformation;
