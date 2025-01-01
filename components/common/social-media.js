import FacebookIcon from "@/icons/social-media/FB.svg";
import InstagramIcon from "@/icons/social-media/Insta.svg";
import TwitterIcon from "@/icons/social-media/twitter-1.svg";
import YoutubeIcon from "@/icons/social-media/youtube.svg";
import TikTokIcon from "@/icons/social-media/tiktok.svg";
import Bluesky from "@/icons/bluesky.svg";

import Image from "next/image";
import { useState } from "react";
import ErrInput from "./errorInput";
import { validateChangeSocialLinks } from "../../utils/validations/profile";

const SocialMediaInput = ({
  icon,
  altText,
  name,
  value,
  formik,
  socialError,
}) => {
  return (
    <>
      <div className="flex items-center">
        <div className="mr-5 flex items-center">
          <Image
            src={icon}
            alt={altText}
            width={30}
            height={30}
            className="w-[30px] h-[30px] object-contain"
          />
        </div>
        <div className="flex items-center border border-darkGrey100 bg-fieldBG input-field w-full">
          <input
            type="text"
            name={name}
            value={value}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={formik.handleFocus}
            placeholder="Enter URL"
            className="block border-0 bg-transparent outline-0 text-secondprimary text-sm placeholder:secondprimary w-full"
            aria-label={`Enter ${altText} URL`}
          />
        </div>
      </div>
      <ErrInput error={socialError} />
    </>
  );
};

const SocialMedia = ({
  formik,
  setSocialLink,
  socialLink,
  socialError,
  setSocialError,
}) => {
  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setSocialLink(`socialLink.${name}`, value?.trimStart());
  //   setSocialError(
  //     `socialLink.${name}`,
  //     validateChangeSocialLinks(name, value)
  //   );
  // };

  return (
    <div className="block mt-5">
      <h2 className="text-black text-base font-medium mb-3">
        Social Media Links
      </h2>
      <div className="block space-y-5">
        <SocialMediaInput
          icon={InstagramIcon}
          altText="Instagram"
          name="socialLink.instagram"
          value={socialLink?.instagram}
          formik={formik}
          socialError={socialError?.instagram}
        />
        <SocialMediaInput
          icon={YoutubeIcon}
          altText="YouTube"
          name="socialLink.youtube"
          value={socialLink?.youtube}
          formik={formik}
          socialError={socialError?.youtube}
        />
        <SocialMediaInput
          icon={FacebookIcon}
          altText="Facebook"
          name="socialLink.facebook"
          value={socialLink?.facebook}
          formik={formik}
          socialError={socialError?.facebook}
        />
        <SocialMediaInput
          icon={TwitterIcon}
          altText="Twitter"
          name="socialLink.twitter"
          value={socialLink?.twitter}
          formik={formik}
          socialError={socialError?.twitter}
        />
        <SocialMediaInput
          icon={TikTokIcon}
          altText="TikTok"
          name="socialLink.tiktok"
          value={socialLink?.tiktok}
          formik={formik}
          socialError={socialError?.tiktok}
        />
        <SocialMediaInput
          icon={Bluesky}
          altText="BlueSky"
          name="socialLink.bluesky"
          value={socialLink?.bluesky}
          formik={formik}
          socialError={socialError?.bluesky}
        />
      </div>
    </div>
  );
};

export default SocialMedia;
