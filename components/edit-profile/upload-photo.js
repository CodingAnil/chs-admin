"use client";

import UploadIcon from "@/icons/upload.svg";
import AddMoreIcon from "@/icons/add-more.svg";
import { useState } from "react";
import Image from "next/image";
import { CgClose } from "react-icons/cg";
import MediaVerificationModal from "../modal/verify-modal";

const UploadProfilePhotos = () => {
  const [items, setItems] = useState([
    { id: 1, file: null },
    { id: 2, file: null },
    { id: 3, file: null },
  ]);

  const handleAddMore = () => {
    setItems([...items, { id: items.length + 1, file: null }]);
  };
  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newItems = [...items];
        newItems[index].file = event.target.result; // Update file URL for preview
        setItems(newItems);
      };
      reader.readAsDataURL(file); // Read the file and create a data URL
    }
  };
  const handleDelete = (index) => {
    const newItems = [...items];
    newItems[index].file = null; // Reset file to null
    setItems(newItems);
  };

  //   Open Media verification Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleVerifyUploadProfile = () => setIsModalOpen(true);
  const handleCloseVerifyUploadProfile = () => setIsModalOpen(false);
  return (
    <div className="block">
      <div className="block">
        <h4 className="mb-2 text-lg text-secondprimary">Upload Photos</h4>
        <ul className="flex flex-col md:flex-row flex-wrap gap-5 mb-5">
          {items.map((item, index) => (
            <li key={index}>
              <div className="bg-fieldBG min-w-[170px] max-w-full md:max-w-[170px] h-[150px] rounded-xl text-center relative flex-1 border-2 border-dashed border-[#C5D0DA4D]">
                {item.file ? (
                  <div className="block">
                    <div className="relative pb-3">
                      {item?.file && (
                        <Image
                          width={70}
                          height={70}
                          src={item?.file}
                          alt="Uploaded"
                          className="m-auto w-full h-full max-h-[145px] min-h-[145px] object-cover rounded-xl"
                        />
                      )}
                      <button
                        type="button"
                        onClick={() => handleDelete(index)}
                        className="bg-danger shadow-danger absolute top-[-15px] right-[-15px] w-8 h-8 rounded-full flex justify-center items-center"
                      >
                        <CgClose size={20} color="#fff" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-6">
                    <Image
                      src={UploadIcon}
                      alt="Upload"
                      width={74}
                      height={74}
                      className="m-auto w-[74px] h-[74px] mb-1"
                    />
                    <span className="text-secondprimary text-sm">Upload</span>
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, index)}
                      className="absolute left-0 top-0 w-full h-full cursor-pointer opacity-0"
                    />
                  </div>
                )}
              </div>
            </li>
          ))}
          <li onClick={handleAddMore}>
            <div className="bg-fieldBG p-6 cursor-pointer min-w-[170px] max-w-full md:max-w-[170px] rounded-xl text-center relative flex-1 border-2 border-dashed border-[#C5D0DA4D]">
              <Image
                src={AddMoreIcon}
                alt="Add More"
                width={74}
                height={74}
                className="m-auto w-[74px] h-[74px] mb-1"
              />
              <span className="text-secondprimary text-sm">Add More</span>
            </div>
          </li>
        </ul>
      </div>
      <MediaVerificationModal
        isOpen={isModalOpen}
        onClose={handleCloseVerifyUploadProfile}
        title="Verify Image"
        message="Write 'Paragon Gents' and today's date on a piece of paper and upload a picture in the same pose and showing the same body parts while holding up the piece of paper. Ensure the photo is clear and easily readable."
      />
    </div>
  );
};

export default UploadProfilePhotos;
