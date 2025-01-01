import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import RemoveIcon from "../../public/images/remove-icon.gif";
import Image from "next/image";
import ButtonSpinner from "../loaders/buttonSpinner";

const DeleteModal = ({ loading, isOpen, onClose, title, onConfirm }) => {
  return (
    <Modal
      size="md"
      isOpen={isOpen}
      backdrop="blur"
      hideCloseButton={true}
      placement="center"
    >
      <ModalContent className="bg-[#1A1D22] border border-[#353535] rounded-xl shadow-lg">
        <ModalBody className="pt-7 pb-8 px-8 gap-0">
          <div className="mb-5">
            <div className="mb-2 text-center">
              <Image
                width={146}
                height={130}
                src={RemoveIcon}
                alt="icon"
                className="mx-auto"
              />
            </div>
            <h2 className="text-center text-2xl text-white font-normal">
              {title}
            </h2>
          </div>
          <div className="flex justify-center gap-4.5">
            <button
              onClick={onConfirm}
              className="bg-yellow btn-bg-primary text-white py-3 px-6 rounded-md text-base font-bold"
            >
              Delete {loading && <ButtonSpinner />}
            </button>
            <button
              onClick={onClose}
              className="border border-white text-base font-bold text-white py-3 px-6 rounded-md"
            >
              Cancel
            </button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
