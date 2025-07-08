import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import useForm from "../../utils/hooks/formik_hook";
import { toastMessage } from "../../utils/configs/toast";
import { callPostApi, callPutApi } from "../../services";
import ButtonSpinner from "../../components/loaders/buttonSpinner";
import ErrInput from "../../components/common/errorInput";
import { discountValidate } from "../../utils/validations/profile";
import { useState, useEffect } from "react";
import { categoryOptions } from "../../utils/constants";

const AddNewProducts = ({ isOpen, onClose, planData, getAllData, categories }) => {
  const [prodImage, setPodImage] = useState(null);
  const [mergedCategories, setMergedCategories] = useState({});
  const [allCategoryNames, setAllCategoryNames] = useState([]);

  // Merge static and dynamic categories
  useEffect(() => {
    if (categories) {
      // Merge static and dynamic categories
      const merged = { ...categoryOptions, ...categories };
      setMergedCategories(merged);
      
      // Get all unique category names
      const staticCategories = Object.keys(categoryOptions);
      const dynamicCategories = Object.keys(categories || {});
      const allCategories = [...new Set([...staticCategories, ...dynamicCategories])];
      setAllCategoryNames(allCategories);
    }
  }, [categories]);

  // Handle form submission
  const handleFormSubmit = async (data) => {
    try {
      setLoading(true);
      let file;
      if (prodImage) {
        const formData = new FormData();
        formData.append("file", prodImage);
        file = await callPostApi(`user/upload-file`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      // return;
      let response;
      if (isOpen == "add") {
        response = await callPostApi(`admin/product`, {
          ...data,
          image: file?.data?.location || data?.image,
        });
      } else {
        response = await callPutApi(`admin/product/${planData?._id}`, {
          ...data,
          image: file?.data?.location || data?.image,
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

  // Get subcategories for selected category
  const getSubcategoriesForCategory = (categoryName) => {
    if (!categoryName || !mergedCategories[categoryName]) {
      return [];
    }
    return mergedCategories[categoryName];
  };

  console.log(categories,"categories");
  console.log(planData, "openModelWithItem");
  const {
    loading,
    handleSubmit,
    touched,
    errors,
    setLoading,
    formik,
    resetForm,
    values,
  } = useForm({
    initialValues: {
      name: planData?.name || "",
      companyName: planData?.companyName || "",
      description: planData?.description || "",
      price: planData?.price || "",
      discount: planData?.discount || "",
      sellerDiscount: planData?.sellerDiscount || "",
      quantity: planData?.quantity || "",
      stockQuantity: planData?.stockQuantity || "",
      country: planData?.country || "",
      image: planData?.image || "",
      category: planData?.category || "",
      subcategory: planData?.subcategory || "",
    },
    validationFunction: discountValidate,
    handleFormSubmit: handleFormSubmit,
  });

  // Handle form cancel
  const handleCancel = () => {
    resetForm();
    onClose();
  };

  const handleImage = (e) => {
    setPodImage(e.target.files[0]);
    formik.setFieldValue("image", e.target.value);
  };

  return (
    <Modal
      size="xl"
      isOpen={isOpen == "add" || isOpen == "edit"}
      backdrop="blur"
      hideCloseButton={true}
      placement="center"
      className="overflow-auto"
    >
      <ModalContent className="bg-[#1A1D22] border border-[#353535] rounded-xl shadow-lg">
        <ModalBody className="pt-7 pb-8 px-4 gap-0 max-h-[80vh] overflow-auto">
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
                      placeholder="Enter Seller Discount"
                      className="block border-0 bg-transparent outline-0 text-black text-sm placeholder:text-g w-full"
                      {...formik.getFieldProps("sellerDiscount")}
                    />
                  </div>
                  <div className="mb-5">
                    <ErrInput error={touched.sellerDiscount && errors.sellerDiscount} />
                  </div>
                </div>
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
              </div>

              <div className="flex w-full">
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

                {/* Category Field */}
                <div className="w-1/2 pr-2">
                  <div className="flex items-center bg-white input-field mb-1 border border-darkGrey100">
                    <select
                      className="block border-0 bg-transparent outline-0 text-black text-sm placeholder:text-g w-full"
                      {...formik.getFieldProps("category")}
                      onChange={(e) => {
                        formik.setFieldValue("category", e.target.value);
                        formik.setFieldValue("subcategory", ""); // Reset subcategory when category changes
                      }}
                    >
                      <option value="" disabled>
                        Select category
                      </option>
                      {allCategoryNames.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-5">
                    <ErrInput
                      error={formik.touched.category && formik.errors.category}
                    />
                  </div>
                </div>

                {/* Subcategory Field */}
                <div className="w-1/2 pr-2">
                  <div className="flex items-center bg-white input-field mb-1 border border-darkGrey100">
                    <select
                      className="block border-0 bg-transparent outline-0 text-black text-sm placeholder:text-g w-full"
                      {...formik.getFieldProps("subcategory")}
                      disabled={!values.category}
                    >
                      <option value="" disabled>
                        {!values.category
                          ? "Please select category"
                          : "Select sub-category"}
                      </option>
                      {values.category &&
                        getSubcategoriesForCategory(values.category).map((subcategory) => (
                          <option key={subcategory} value={subcategory}>
                            {subcategory}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="mb-5">
                    <ErrInput
                      error={
                        formik.touched.subcategory && formik.errors.subcategory
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center bg-white input-field mb-1 border border-darkGrey100">
                <input
                  type="file"
                  placeholder="Choose an image"
                  className="block border-0 bg-transparent outline-0 text-black text-sm placeholder:text-g w-full"
                  onChange={handleImage}
                  onBlur={formik.onBlur}
                  // value={formik?.image}
                  // value={formik.image}
                  // {...formik.getFieldProps("image")}
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
