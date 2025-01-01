import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import { useState } from "react";
import useForm from "../../utils/hooks/formik_hook";
import { toastMessage } from "../../utils/configs/toast";
import { callPutApi } from "../../services";
import ButtonSpinner from "../../components/loaders/buttonSpinner";
import ErrInput from "../../components/common/errorInput";
import { discountValidate } from "../../utils/validations/profile";

const UpgradeModal = ({ isOpen, onClose, planData, getAllData }) => {
  // Handle form submission
  const handleFormSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await callPutApi(
        `admin/update/discount/${planData._id}`,
        {
          discount: Number(data.discount),
        }
      );

      if (response?.status) {
        toastMessage("success", "User discount has been applied successfully");
        getAllData("/admin/active-models");
        onClose();
      } else {
        toastMessage("error", "Failed to apply discount");
      }
    } catch (error) {
      console.error("Error updating discount:", error);
      toastMessage("error", "An unexpected error occurred");
    } finally {
      setLoading(false);
      onClose();
      resetForm();
    }
  };

  const {
    loading,
    handleSubmit,
    touched,
    errors,
    setLoading,
    formik,
    resetForm,
  } = useForm({
    initialValues: {
      discount: planData?.subscription?.stripeDiscount || "",
    },
    validationFunction: discountValidate,
    handleFormSubmit: handleFormSubmit,
  });

  const handleDiscountChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      const numericValue = parseInt(value, 10);
      if (numericValue <= 100 || value === "") {
        formik.setFieldValue("discount", value);
      }
    }
  };

  // Handle form cancel
  const handleCancel = () => {
    resetForm();
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
        <ModalBody className="pt-7 pb-8 px-4 gap-0">
          <div className="mb-6">
            <h2 className="text-center text-3xl text-white font-medium">
              Upgrade Plan
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="flex items-center mb-3">
                <span className="min-w-72 text-[#dfdcdc] text-lg font-medium mr-2">
                  Model Name:
                </span>
                <span className="font-bold text-white text-lg">
                  {planData.username}
                </span>
              </div>
              <div className="mb-3 flex items-center">
                <span className="min-w-72 text-[#dfdcdc] text-lg font-medium mr-2">
                  Model current membership:
                </span>
                <span className="font-bold text-white text-lg">
                  {planData?.subscription?.subscriptionType}
                </span>
              </div>
              <div className="mb-3 flex items-center">
                <span className="min-w-72 text-[#dfdcdc] text-lg font-medium mr-2">
                  Upgraded membership type:
                </span>
                <span className="font-bold text-white text-lg">
                  Elite Exclusive gent
                </span>
              </div>
              <div className="mb-3 flex items-center">
                <span className="min-w-72 text-[#dfdcdc] text-lg font-medium mr-2">
                  Discount on current price in %:
                </span>
                <div className="flex">
                  <input
                    type="text"
                    value={formik.values.discount}
                    onChange={handleDiscountChange}
                    className="border-none w-24 bg-[#484a4e] rounded-md outline-none text-white p-2 focus:outline-none focus:ring-0"
                    placeholder="Discount %"
                  />
                </div>
              </div>
              <ErrInput
                error={
                  touched.discount &&
                  errors.discount && (
                    <div className="text-red-500 text-sm ml-72">
                      {errors.discount}
                    </div>
                  )
                }
              />
            </div>
            {/* Buttons */}
            <div className="flex justify-center gap-4.5 mt-6">
              <button
                type="submit"
                disabled={loading}
                className="bg-yellow btn-bg-primary text-white py-3 px-6 rounded-md text-base font-bold disabled:opacity-50"
              >
                Update {loading && <ButtonSpinner />}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                disabled={loading}
                className="border border-white text-base font-bold text-white py-3 px-6 rounded-md disabled:opacity-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UpgradeModal;
