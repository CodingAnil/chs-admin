"use client";

import { Button, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import VerificationIcon from "@/icons/verification-icon.svg";
import SocialMedia from "../common/social-media";
import {
  cockSizeListCM,
  cockSizeListInches,
  ModalProfileArray,
  ProfileAgeList,
  profileHeightListCM,
  profileHeightListFoot,
  weightListKG,
  weightListLBS,
} from "../../utils/constants";
import useForm from "../../utils/hooks/formik_hook";
import ErrInput from "../common/errorInput";
import SelectDropdown from "../common/selectInput";
import UserLangiuage from "../common/language";
import { getLocalData } from "../../utils/configs/localStorage";
import GeolocationComponent from "../common/geolocation";
import CustomFormSwitch from "../common/new-coustom-switch";
import { capitalizeFirstLetter, getCityCountry } from "../../utils/model";
import Image from "next/image";
import {
  isClientProfileValid,
  isModelProfileValid,
} from "../../utils/validations/profile";
import { callPostApi, callPutApi } from "../../services";
import { toastMessage } from "../../utils/configs/toast";
import GetGooglePlaces from "../common/getPlaces";

const ProfileCreationForm = ({ data, userId, userRole }) => {
  let profileData = userRole == "model" ? data?.model : data?.client;

  const [cockStatus, setCockSizeStatus] = useState("");
  const [isPlan, setPlan] = useState(
    userRole == "model" ? "Gent" : "Regular_Client"
  );

  const router = useRouter();

  const handleScroll = () => {
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
  };

  const handleForSubmit = async () => {
    const dataErrors =
      userRole == "model"
        ? isModelProfileValid(values, isPlan)
        : isClientProfileValid(values, isPlan);

    if (Object.keys(dataErrors).length > 0) {
      handleScroll();
      setErrors(dataErrors);
      return;
    }
    setLoading(true);
    try {
      if (userRole == "model") {
        const createResponse = await callPutApi(`/model/${profileData?._id}`, {
          ...values,
          isAdmin: true,
        });
        if (!createResponse?.status) throw new Error(createResponse?.message);

        if (values?.socialLink && Object.keys(values?.socialLink)?.length > 0) {
          const mediaResponse = await callPostApi("/model/add-social", {
            modelId: profileData?._id,
            socialMediaAccounts: values?.socialLink,
          });
          if (!mediaResponse?.status) throw new Error(mediaResponse.message);
        }
        toastMessage("success", "Profile updated successfully");
        router.push(`/profile/model?id=${data?._id}`);
      } else {
        const createResponse = await callPutApi(
          `/client/update/${data?.client?._id}`,
          values
        );
        if (!createResponse?.status) throw new Error(createResponse?.message);

        toastMessage("success", "Profile updated successfully");
        router.push(`/profile/client?id=${data?._id}`);
      }
    } catch (error) {
      console.error("Profile error:", error);
      toastMessage("error", error.message || "An unexpected error occurred");
    } finally {
      handleClose();
    }
  };

  const handleClose = () => {
    setLoading(false);
    resetForm();
  };

  const {
    loading,
    handleSubmit,
    touched,
    errors,
    setLoading,
    formik,
    values,
    setFieldValue,
    setFieldError,
    resetForm,
    setErrors,
  } = useForm({
    initialValues: {
      socialLink: profileData?.social_media?.socialMediaAccounts || {},
      heading: profileData?.heading,
      bio: profileData?.bio,
      location: {
        city: profileData?.location?.city,
        country: profileData?.location?.country,
      },
      stats: {
        age: profileData?.stats?.age?.toString(),
        height: profileData?.stats?.height?.toString(),
        heightType: profileData?.stats?.heightType,
        weight: profileData?.stats?.weight?.toString(),
        weightType: profileData?.stats?.weightType,
        cockSize: profileData?.stats?.cockSize?.toString(),
        cockSizeType: profileData?.stats?.cockSizeType,
        foreskin: profileData?.stats?.foreskin,
        sexualRole: profileData?.stats?.sexualRole,
        tribe: profileData?.stats?.tribe,
        bodyType: profileData?.stats?.bodyType,
        orientation: profileData?.stats?.orientation,
        eyeColor: profileData?.stats?.eyeColor,
        bodyHair: profileData?.stats?.bodyHair,
        smoking: profileData?.stats?.smoking,
        drinking: profileData?.stats?.drinking,
        piercings: profileData?.stats?.piercings,
        tattoos: profileData?.stats?.tattoos,
        condomsOnly: profileData?.stats?.condomsOnly,
        hivStatus: profileData?.stats?.hivStatus,
        hobbies: profileData?.stats?.hobbies,
        spokenLanguages: profileData?.stats?.spokenLanguages,
        hairColor: profileData?.stats?.hairColor,
        amInto: profileData?.stats?.amInto,
      },
    },
    validationFunction:
      userRole == "model"
        ? (val) => isModelProfileValid(val, isPlan)
        : (val) => isClientProfileValid(val, isPlan),
    handleFormSubmit: handleForSubmit,
  });

  useEffect(() => {
    if (data) {
      // setSocialLink(data?.social_media?.socialMediaAccounts);
      setCockSizeStatus(profileData?.stats?.cockStatus);
      setPlan(data?.subscription?.subscriptionType);
    }
  }, [data]);

  const handleOldSelect = (name, value, type) => {
    if (!value) return;
    let val = value;
    // return
    if (type === "multiple") {
      const prevStats = values.stats[name] || [];
      val = prevStats.includes(value)
        ? prevStats.filter((it) => it !== value)
        : [...prevStats, value];
    }

    setFieldValue(`stats.${name}`, val);
  };

  const handlePlaceSelect = (place) => {
    if (place) {
      const cityComponent = place.address_components.find((component) =>
        component.types.includes("locality")
      );
      const countryComponent = place.address_components.find((component) =>
        component.types.includes("country")
      );

      setFieldValue("location", {
        city: cityComponent ? cityComponent.long_name : "",
        country: countryComponent ? countryComponent.long_name : "",
      });
      setFieldError("location.city", "");
    }
  };

  const handlePlaceChange = (event) => {
    if (!event?.target?.value) {
      setFieldValue("location", {
        city: "",
        country: "",
      });
      // setFieldError("location.city", undefined);
    }
  };

  console.log(data, "datatat");

  return (
    <div className="block w-full max-w-[1500px] m-auto mt-4 mb-12 md:px-4">
      <form onSubmit={handleSubmit}>
        <div className="block w-full bg-white rounded-xl border border-secondaryShade3 px-4 md:px-6 py-4 md:py-6 custom-img-color">
          <h2 className="text-[28px] font-bold text-secondprimary mb-4">
            Basic Info
          </h2>
          <div className="flex items-center justify-end w-full  pe-2">
            {" "}
            <span className="text-black text-sm">
              {values?.heading?.length || 0}/50
            </span>
          </div>
          <div className="flex items-center bg-fieldBG input-field mb-6 border border-darkGrey100">
            <input
              type="text"
              name="heading"
              placeholder="Header* (50 character max, no digits)"
              className="block border-0 bg-transparent outline-0 text-secondprimary text-sm placeholder:text-secondprimary w-full"
              onBlur={formik.onBlur}
              {...formik.getFieldProps("heading")}
            />
          </div>
          <ErrInput error={touched?.heading && errors?.heading} />
          <div className="flex items-center justify-end w-full  pe-2">
            <span className="text-black ps-4 text-sm">
              {values?.bio?.length || 0}/
              {isPlan == "Gent" || "Regular_Client" ? "300" : "500"}
            </span>
          </div>
          <div className="flex items-center mb-6">
            <textarea
              type="text"
              placeholder="Personal Bio"
              className="bg-fieldBG border border-darkGrey100 input-field min-h-[150px] w-full text-sm text-secondprimary placeholder:text-secondprimary"
              onBlur={formik.onBlur}
              {...formik.getFieldProps("bio")}
            ></textarea>
          </div>
          <ErrInput error={errors?.bio} />
          <div className="custom-location-field">
            <GetGooglePlaces
              value={
                getCityCountry(
                  values.location?.city,
                  values?.location?.country
                ) || ""
              }
              handlePlaceSelect={handlePlaceSelect}
              handleChange={handlePlaceChange}
              placeError={errors?.location?.city}
            />
          </div>
          {/* <GeolocationComponent
            data={values}
            setData={setFieldValue}
            errorfor={errors?.location?.city}
            setErrorFor={setFieldError}
          /> */}

          <div className="block mt-8 custom-dropdown-color">
            <h3 className="text-secondprimary text-[28px] font-bold pb-4">
              Stats
            </h3>
            <div className="block">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <SelectDropdown
                  value={values?.stats?.age}
                  onChange={(e) => handleOldSelect("age", e, "single")}
                  // onInputChange={(e) => selectInputChange("age", e, "single")}
                  placeholder="Age*"
                  className="outline-0 bg-transparent text-secondprimary ps-2 w-full placeholder:text-secondprimary pr-10"
                  options={ProfileAgeList}
                  dropdownType="age"
                />
                <ErrInput error={errors?.stats?.age} />

                <div className="block relative">
                  <SelectDropdown
                    value={values?.stats?.height}
                    onChange={(e) => handleOldSelect("height", e, "single")}
                    // onInputChange={(e) => selectInputChange("height", e)}
                    placeholder="Height*"
                    className="outline-0 bg-transparent text-secondprimary ps-2 w-full placeholder:text-secondprimary pr-24"
                    options={
                      values?.stats?.heightType === "ft"
                        ? profileHeightListFoot
                        : profileHeightListCM
                    }
                  />
                  <div className="block absolute right-1 top-1">
                    <CustomFormSwitch
                      name="heightType"
                      name2="height"
                      value={values?.stats?.heightType}
                      setData={setFieldValue}
                      setError={setFieldError}
                      item1={"Ft"}
                      item2={"Cm"}
                    />
                  </div>

                  <ErrInput error={errors?.stats?.height} />
                </div>
                <div className="block relative">
                  <SelectDropdown
                    value={values?.stats?.weight}
                    onChange={(e) => handleOldSelect("weight", e, "single")}
                    // onInputChange={(e) => selectInputChange("weight", e)}
                    placeholder="Weight*"
                    className="bg-fieldBG outline-0 bg-transparent ps-2 w-full placeholder:text-white pr-24"
                    options={
                      values?.stats?.weightType === "lb"
                        ? weightListLBS
                        : weightListKG
                    }
                  />
                  <div className="block absolute right-1 top-1">
                    <CustomFormSwitch
                      name="weightType"
                      name2="weight"
                      value={values?.stats?.weightType}
                      setData={setFieldValue}
                      setError={setFieldError}
                      item1={"Lb"}
                      item2={"Kg"}
                    />
                  </div>

                  <ErrInput error={errors?.stats?.weight} />
                </div>
              </div>

              <UserLangiuage
                type="model"
                selected={values?.stats?.spokenLanguages || []}
                setData={setFieldValue}
                error={errors?.stats?.spokenLanguages}
                setError={setFieldError}
              />

              <div className="block">
                <div className="block md:flex items-center gap-6">
                  <div className="min-w-[70%] relative">
                    <SelectDropdown
                      // disabled={
                      //   isEdit ? false : cockStatus == "Requested" ? true : false
                      // }
                      value={values?.stats?.cockSize}
                      onChange={(e) => handleOldSelect("cockSize", e, "single")}
                      // onInputChange={(e) => selectInputChange("cockSize", e)}
                      placeholder={
                        values?.stats?.cockSize
                          ? "Cock Size*"
                          : "Cock Size* (Only visible to registered member)"
                      }
                      className="bg-fieldBG outline-0 bg-transparent ps-2 w-full placeholder:text-white pr-24"
                      options={
                        values?.stats?.cockSizeType === "cm"
                          ? cockSizeListCM
                          : cockSizeListInches
                      }
                    />
                    <div className="block absolute right-1 top-1">
                      <CustomFormSwitch
                        item1={"In"}
                        item2={"Cm"}
                        name="cockSizeType"
                        name2="cockSize"
                        value={values?.stats?.cockSizeType}
                        setData={setFieldValue}
                        setError={setFieldError}
                        setCockSizeStatus={setCockSizeStatus}
                      />
                    </div>
                  </div>
                  {/* <button
                    type="button"
                    // onClick={handleVerifyCockSize}
                    disabled={true}
                    className={`${cockStatus} btn-primary !h-[38px] !text-sm gap-1.5 !min-w-[136px] mt-2 md:mt-0 `}
                  >
                    <Image
                      src={VerificationIcon}
                      alt="verification"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    {capitalizeFirstLetter(cockStatus)}
                  </button> */}
                </div>
                <ErrInput error={errors?.stats?.cockSize} />
              </div>
            </div>
          </div>
          <div className="block">
            {ModalProfileArray &&
              ModalProfileArray.map((item, index) => {
                const isSingle = item.type === "single";
                return (
                  <div className="block pt-5" key={index}>
                    <h4 className="text-base text-secondprimary pb-2">
                      {item.heading}
                      <span className="text-primary">*</span>
                      <span className="text-darkGrey text-xs ms-1">
                        {item.subHeading}
                      </span>
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {item.subArray.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className={`p-2 border text-sm text-darkGrey whitespace-nowrap ${
                            isSingle
                              ? values?.stats?.[item?.name] === subItem.name
                                ? "border-primary text-primary bg-[#E8A70533]"
                                : "border-darkGrey100"
                              : values?.stats?.[item?.name]?.includes(
                                  subItem.name
                                )
                              ? "border-primary text-primary bg-[#E8A70533]"
                              : "border-darkGrey100"
                          } rounded-md cursor-pointer px-3 py-[7px]`}
                          onClick={() =>
                            handleOldSelect(item.name, subItem.name, item.type)
                          }
                        >
                          <input
                            type={isSingle ? "radio" : "checkbox"}
                            name={item.name}
                            // value={subItem.name}
                            className="hidden"
                            checked={
                              isSingle
                                ? values?.stats?.[item?.name] === subItem.name
                                : data?.stats?.[item?.name]?.includes(
                                    subItem.name
                                  )
                            }
                            readOnly
                          />
                          {subItem.name}
                        </li>
                      ))}
                    </ul>
                    <ErrInput error={errors?.stats?.[item?.name]} />
                  </div>
                );
              })}
          </div>

          {/* Social Media Section */}
          {userRole == "model" && (
            <SocialMedia
              formik={formik}
              socialError={errors?.socialLink}
              setSocialError={setFieldError}
              setSocialLink={setFieldValue}
              socialLink={values?.socialLink}
            />
          )}

          <div className="flex justify-center mt-8">
            <Button
              type="submit"
              color="primary"
              // onClick={handleSubmit}
              className="btn-bg-primary"
            >
              Update
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileCreationForm;
