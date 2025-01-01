"use client";

import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import CheckIcon from "@/icons/check.svg";
import SearchIcon from "@/icons/search.svg";
import { LanguagesList } from "../../utils/constants";

const SelectLanguageModal = ({
  isOpen,
  onClose,
  setSelectedLanguage,
  selectedLanguage,
}) => {
  const [languages, setLanguages] = useState(LanguagesList);

  const handleSearch = ({ target: { value } }) => {
    const searchValue = value.toLowerCase();
    const lan = LanguagesList.filter(
      ({ name, code }) =>
        name?.toLowerCase().includes(searchValue) ||
        code?.toLowerCase().includes(searchValue)
    );
    setLanguages(lan);
  };

  useEffect(() => {
    setLanguages(LanguagesList);
  }, [isOpen]);

  return (
    <Modal
      size="lg"
      isOpen={isOpen}
      onClose={onClose}
      hideCloseButton={true}
      className="p-[15px]"
      placement="center"
      backdrop="blur"
    >
      <ModalContent className="bg-secondaryShade1 rounded-xl p-[15px] max-w-[95%] md:max-w-[510px] font-primary">
        <ModalBody className="text-white text-center p-0">
          <div className="block relative">
            <input
              name="search"
              type="text"
              onChange={handleSearch}
              placeholder="Search"
              className=" h-[42px] bg-[#484A4E] rounded-xl pl-[52px] text-sm text-white outline-0 w-full"
            />
            <Image
              src={SearchIcon}
              alt="Search"
              width={22}
              height={22}
              className="absolute top-2.5 left-3"
            />
          </div>
          <div className="block my-4">
            <ul className="max-h-[270px] overflow-auto custom-scroll">
              {languages?.length > 0 ? (
                languages.map((item, index) => {
                  const isChecked = selectedLanguage?.includes(item.name);
                  return (
                    <li
                      key={index}
                      onClick={() => setSelectedLanguage(item)}
                      className="text-base text-white text-left p-2 cursor-pointer flex items-center gap-2"
                    >
                      <div className="w-4 h-6 flex items-center">
                        {isChecked && (
                          <Image
                            src={CheckIcon}
                            alt="Check language"
                            width={16}
                            height={16}
                          />
                        )}
                      </div>
                      {item.name}{" "}
                      <span style={{ color: "grey" }}>
                        {item?.localName} ({item?.code})
                      </span>
                    </li>
                  );
                })
              ) : (
                <li className="text-base text-white text-left p-2 cursor-pointer flex items-center gap-2">
                  No Language Found
                </li>
              )}
            </ul>
          </div>
          <div className="block">
            <button
              className="bg-primary rounded-lg text-white text-base font-bold py-3.5 px-6 w-full"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SelectLanguageModal;
