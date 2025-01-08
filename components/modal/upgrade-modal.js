import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import { useState } from "react";
import useForm from "../../utils/hooks/formik_hook";
import { toastMessage } from "../../utils/configs/toast";
import { callPostApi, callPutApi } from "../../services";
import ButtonSpinner from "../../components/loaders/buttonSpinner";
import ErrInput from "../../components/common/errorInput";
import { discountValidate } from "../../utils/validations/profile";

const AddNewProducts = ({ isOpen, onClose, planData, getAllData }) => {
  // Handle form submission
  const handleFormSubmit = async (data) => {
    try {
      setLoading(true);
      let response;
      if (isOpen == "add") {
        response = await callPostApi(`admin/product`, {
          ...data,
        });
      } else {
        response = await callPutApi(`admin/product/${planData?._id}`, {
          ...data,
        });
      }

      if (response?.status) {
        toastMessage(
          "success",
          isOpen == "add"
            ? `New Products has been added successfully`
            : `Product has been updated successfully`
        );
        getAllData("/admin/products");
        handleCancel();
      } else {
        toastMessage(
          "error",
          isOpen == "add"
            ? "Failed to add new product"
            : "Failed to update product"
        );
      }
    } catch (error) {
      console.error("Error add new product:", error);
      toastMessage("error", "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  console.log(planData, "openModelWithItem");
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
      name: planData?.name || "",
      companyName: planData?.companyName || "",
      description: planData?.description || "",
      price: planData?.price || "",
      discount: planData?.discount || "",
      quantity: planData?.quantity || "",
      stockQuantity: planData?.stockQuantity || "",
      country: planData?.country || "",
      image: "",
      type: planData?.type || "",
    },
    validationFunction: discountValidate,
    handleFormSubmit: handleFormSubmit,
  });

  // Handle form cancel
  const handleCancel = () => {
    resetForm();
    onClose();
  };

  return (
    <Modal
      size="xl"
      isOpen={isOpen == "add" || isOpen == "edit"}
      backdrop="blur"
      hideCloseButton={true}
      placement="center"
    >
      <ModalContent className="bg-[#1A1D22] border border-[#353535] rounded-xl shadow-lg">
        <ModalBody className="pt-7 pb-8 px-4 gap-0">
          <div className="mb-6">
            <h2 className="text-center text-3xl text-white font-medium">
              {isOpen == "add" ? "Add New Product" : "Edit Product"}
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="flex items-center bg-white input-field mb-1 border border-darkGrey100">
                <input
                  type="text"
                  placeholder="Enter Product Name"
                  className="block border-0 bg-transparent outline-0 text-black text-sm placeholder:text-g w-full"
                  {...formik.getFieldProps("name")}
                />
              </div>
              <div className="mb-5">
                <ErrInput error={touched.name && errors.name} />
              </div>

              <div className="flex items-center bg-white input-field mb-1 border border-darkGrey100">
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  className="block border-0 bg-transparent outline-0 text-black text-sm placeholder:text-g w-full"
                  {...formik.getFieldProps("companyName")}
                />
              </div>
              <div className="mb-5">
                <ErrInput error={touched.companyName && errors.companyName} />
              </div>

              <div className="flex items-center bg-white input-field mb-1 border border-darkGrey100">
                <textarea
                  type="text"
                  placeholder="Enter Description"
                  className="block border-0 bg-transparent outline-0 text-black text-sm placeholder:text-g w-full"
                  {...formik.getFieldProps("description")}
                />
              </div>
              <div className="mb-5">
                <ErrInput error={touched.description && errors.description} />
              </div>

              <div className="flex w-full">
                <div className="w-1/2 pr-2">
                  <div className="flex items-center bg-white input-field mb-1 border border-darkGrey100">
                    <input
                      type="number"
                      placeholder="Enter Product Price"
                      className="block border-0 bg-transparent outline-0 text-black text-sm placeholder:text-g w-full"
                      {...formik.getFieldProps("price")}
                    />
                  </div>
                  <div className="mb-5">
                    <ErrInput error={touched.price && errors.price} />
                  </div>
                </div>
                <div className="w-1/2 pr-2">
                  <div className="flex items-center bg-white input-field mb-1 border border-darkGrey100">
                    <input
                      type="number"
                      placeholder="Enter Discount"
                      className="block border-0 bg-transparent outline-0 text-black text-sm placeholder:text-g w-full"
                      {...formik.getFieldProps("discount")}
                    />
                  </div>
                  <div className="mb-5">
                    <ErrInput error={touched.discount && errors.discount} />
                  </div>
                </div>
              </div>

              <div className="flex w-full">
                <div className="w-1/2 pr-2">
                  <div className="flex items-center bg-white input-field mb-1 border border-darkGrey100">
                    <input
                      type="number"
                      placeholder="Enter Quantity Per/Product(ml)"
                      className="block border-0 bg-transparent outline-0 text-black text-sm placeholder:text-g w-full"
                      {...formik.getFieldProps("quantity")}
                    />
                  </div>
                  <div className="mb-5">
                    <ErrInput error={touched.quantity && errors.quantity} />
                  </div>
                </div>
                <div className="w-1/2 pr-2">
                  <div className="flex items-center bg-white input-field mb-1 border border-darkGrey100">
                    <input
                      type="number"
                      placeholder="Enter Stock Quantity"
                      className="block border-0 bg-transparent outline-0 text-black text-sm placeholder:text-g w-full"
                      {...formik.getFieldProps("stockQuantity")}
                    />
                  </div>
                  <div className="mb-5">
                    <ErrInput
                      error={touched.stockQuantity && errors.stockQuantity}
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-full">
                <div className="w-1/2 pr-2">
                  <div className="flex items-center bg-white input-field mb-1 border border-darkGrey100">
                    <input
                      type="text"
                      placeholder="Enter Country Name"
                      className="block border-0 bg-transparent outline-0 text-black text-sm placeholder:text-g w-full"
                      {...formik.getFieldProps("country")}
                    />
                  </div>
                  <div className="mb-5">
                    <ErrInput error={touched.country && errors.country} />
                  </div>
                </div>
                <div className="w-1/2 pr-2">
                  <div className="flex items-center bg-white input-field mb-1 border border-darkGrey100">
                    <select
                      className="block border-0 bg-transparent outline-0 text-black text-sm placeholder:text-g w-full"
                      {...formik.getFieldProps("type")}
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      <option value="Tablet">Tablet</option>
                      <option value="Suyrup">Syrup</option>
                    </select>
                  </div>
                  <div className="mb-5">
                    <ErrInput error={touched.type && errors.type} />
                  </div>
                </div>
              </div>

              {/* <div className="flex items-center bg-white input-field mb-1 border border-darkGrey100">
                <input
                  type="text"
                  placeholder="Enter Country Name"
                  className="block border-0 bg-transparent outline-0 text-black text-sm placeholder:text-g w-full"
                  {...formik.getFieldProps("country")}
                />
              </div>
              <div className="mb-5">
                <ErrInput error={touched.country && errors.country} />
              </div> */}
              <div className="flex items-center bg-white input-field mb-1 border border-darkGrey100">
                <input
                  type="file"
                  placeholder="Choose an image"
                  className="block border-0 bg-transparent outline-0 text-black text-sm placeholder:text-g w-full"
                  {...formik.getFieldProps("image")}
                />
              </div>

              <div className="mb-5">
                <ErrInput error={touched.image && errors.image} />
              </div>
            </div>
            {/* Buttons */}
            <div className="flex justify-center gap-4.5 mt-6">
              <button
                type="submit"
                disabled={loading}
                className="bg-yellow btn-bg-primary text-white py-3 px-6 rounded-md text-base font-bold disabled:opacity-50"
              >
                {isOpen == "add" ? "Add Product" : "Update Product"}{" "}
                {loading && <ButtonSpinner />}
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

export default AddNewProducts;
