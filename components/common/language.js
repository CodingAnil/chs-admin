import React, { useState } from "react";
import Image from "next/image";
import AddMoreWhiteIcon from "@/icons/add-more-white.svg";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDisclosure } from "@nextui-org/react";
import ErrInput from "./errorInput";
import SelectLanguageModal from "../modal/select-language-modal";

const UserLangiuage = ({ error, setError, selected, setData, type }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRemoveLanguage = (item) => {
    const prevLanguages = selected;
    const updatedLanguages = prevLanguages.filter((lang) => lang !== item);
    setData("stats.spokenLanguages", updatedLanguages);
  };

  const handleSelectLanguage = (item) => {
    const prevLanguages = selected;
    const updatedLanguages = prevLanguages.includes(item.name)
      ? prevLanguages.filter((lang) => lang !== item.name)
      : [...prevLanguages, item.name];

    setData("stats.spokenLanguages", updatedLanguages);
    setError("stats.spokenLanguages", "");
  };

  return (
    <>
      <div className="block relative mb-6">
        <div className="bg-fieldBG input-field border border-darkGrey100">
          <span className="whitespace-nowrap block text-secondprimary">
            Spoken Language{" "}
            {type == "model" && <span className="text-primary">*</span>}
          </span>
          <ul className="flex flex-wrap gap-1.5">
            {selected &&
              selected.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center bg-darkGrey200 rounded-md text-sm py-1.5 ps-3 pe-1.5 mt-2"
                  >
                    {item}
                    <IoCloseCircleOutline
                      size={13}
                      className="ms-3 cursor-pointer"
                      onClick={() => handleRemoveLanguage(item)}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
        <button
          type="button"
          onClick={onOpen}
          className="outline-0 bg-transparent p-0 absolute language-icon right-3 top-4"
        >
          <Image
            src={AddMoreWhiteIcon}
            alt="Spoken Language"
            width={20}
            height={20}
            className="mb-2"
          />
        </button>
        <ErrInput error={error} />
      </div>

      <SelectLanguageModal
        selectedLanguage={selected}
        setSelectedLanguage={handleSelectLanguage}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default UserLangiuage;
