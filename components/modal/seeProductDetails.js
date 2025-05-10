import { Modal, ModalContent, ModalBody } from "@nextui-org/react";

const ProductDetails = ({ isOpen, onClose, planData }) => {
  // Handle modal close
  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      size="xl"
      isOpen={isOpen}
      backdrop="blur"
      hideCloseButton={true}
      placement="center"
    >
      <ModalContent className="bg-[#1A1D22] border border-[#353535] rounded-xl shadow-lg">
        <ModalBody className="pt-7 pb-8 px-6 overflow-y-auto max-h-[80vh]">
          <div className="mb-6">
            <h2 className="text-center text-3xl text-white font-medium">
              Product Details
            </h2>
          </div>

          {/* Product Image */}
          <div className="flex justify-center mb-8">
            <img
              src={planData?.image || "https://via.placeholder.com/300"} // Placeholder if no image
              alt={planData?.name || "Product Image"}
              className="w-64 h-64 object-cover rounded-md border border-[#353535]"
            />
          </div>

          {/* Product Details */}
          <div className=" text-white">
            {/* SKU Number */}
            <div className="flex gap-2">
              <span className="font-bold text-base text-gray-400">
                SKU Number:
              </span>
              <span className="text-base">{planData?.SKUnumber || "N/A"}</span>
            </div>

            {/* Product Name */}
            <div className="flex gap-2">
              <span className="font-bold text-base text-gray-400">
                Product Name:
              </span>
              <span className="text-base">{planData?.name || "N/A"}</span>
            </div>

            {/* Company Name */}
            <div className="flex gap-2">
              <span className="font-bold text-base text-gray-400">
                Company Name:
              </span>
              <span className="text-base">
                {planData?.companyName || "N/A"}
              </span>
            </div>

            {/* Description */}
            <div className="flex gap-2 col-span-2">
              <span className="font-bold text-base text-gray-400">
                Description:
              </span>
              <span className="text-base">
                {planData?.description || "N/A"}
              </span>
            </div>

            {/* Price */}
            <div className="flex gap-2">
              <span className="font-bold text-base text-gray-400">Price:</span>
              <span className="text-base">{planData?.price || "N/A"}</span>
            </div>

            {/* Discount */}
            <div className="flex gap-2">
              <span className="font-bold text-base text-gray-400">
                Discount:
              </span>
              <span className="text-base">{planData?.discount || "N/A"}</span>
            </div>

            {/* Seller Discount */}
            <div className="flex gap-2">
              <span className="font-bold text-base text-gray-400">
                Seller Discount:
              </span>
              <span className="text-base">{planData?.sellerDiscount || "N/A"}</span>
            </div>

            {/* Quantity */}
            <div className="flex gap-2">
              <span className="font-bold text-base text-gray-400">
                Quantity (ml):
              </span>
              <span className="text-base">{planData?.quantity || "N/A"}</span>
            </div>

            {/* Stock Quantity */}
            <div className="flex gap-2">
              <span className="font-bold text-base text-gray-400">
                Stock Quantity:
              </span>
              <span className="text-base">
                {planData?.stockQuantity || "N/A"}
              </span>
            </div>

            {/* Country */}
            {/* <div className="flex gap-2">
              <span className="font-bold text-base text-gray-400">
                Country:
              </span>
              <span className="text-base">{planData?.country || "N/A"}</span>
            </div> */}

            {/* Category */}
            <div className="flex gap-2">
              <span className="font-bold text-base text-gray-400">
                Category:
              </span>
              <span className="text-base">{planData?.category || "N/A"}</span>
            </div>

            {/* Subcategory */}
            <div className="flex gap-2">
              <span className="font-bold text-base text-gray-400">
                Sub Category:
              </span>
              <span className="text-base">
                {planData?.subcategory || "N/A"}
              </span>
            </div>

            {/* Status */}
            <div className="flex gap-2">
              <span className="font-bold text-base text-gray-400">Status:</span>
              <span className={`${planData?.status}`}>
                {planData?.status || "N/A"}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4.5 mt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="border border-white text-base font-bold text-white py-3 px-6 rounded-md"
            >
              Close
            </button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductDetails;
