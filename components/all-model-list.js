import React, { useState } from "react";
import { Table, Dropdown, Button } from "react-bootstrap";
import CustomPagination from "./common/custom-pagination";
import AddNewProducts from "./modal/upgrade-modal";
import getMountData from "../utils/hooks/data_getting_hook";
import NotFound from "./common/notfound";
import Breadcrumb from "./common/bread-crump";
import SearchComponent from "./common/model-search";
import moment from "moment";
import { FaEye } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { callDeleteApi, callPatchApi, callPutApi } from "../services";
import { toastMessage } from "../utils/configs/toast";
import DeleteModal from "./modal/delete-account-modal";
import ProductDetails from "./modal/seeProductDetails";

const AllModalList = () => {
  const {
    data,
    loading,
    setCurrentPage,
    currentPage,
    isOpen,
    handleOpenMod,
    query,
    setQuery,
    pageLimit,
    dataLength,
    getAllData,
    coustomData,
    searchQuery,
    setSearchQuery,
    openModelWithItem,
  } = getMountData("/admin/products");

  const handleDelete = async () => {
    try {
      const response = await callDeleteApi(`/admin/product/${coustomData._id}`);
      if (response?.status) {
        toastMessage("success", "Product deleted successfully!");
        openModelWithItem();
        getAllData(`/admin/products`);
      } else {
        toastMessage(
          "error",
          response?.message || "Failed to delete the Product"
        );
      }
    } catch (error) {
      console.error("Delete operation error:", error);
      toastMessage("error", "An unexpected error occurred while deleting.");
    }
  };

  const handleStatusChange = async (status, id) => {
    try {
      const response = await callPatchApi(`/admin/product-status/${id}`, {
        status,
      });
      if (response?.status) {
        toastMessage("success", `Product Status changed to ${status}`);
        getAllData(`/admin/products`);
      } else {
        toastMessage(
          "error",
          response?.message || "Failed to change the Product status"
        );
      }
    } catch (error) {
      console.error("Delete operation error:", error);
      toastMessage("error", "An unexpected error occurred while deleting.");
    }
  };

  return (
    <>
      <div className="h-100 p-0 min-h-[200px]">
        <div className="flex justify-between items-center px-4 py-3">
          <Breadcrumb title={"All Products"} />
          <div className="flex items-center">
            <SearchComponent
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            {/* <FilterMenu type="model" selected={query} setSelected={setQuery} /> */}
            <div>
              <Button onClick={() => openModelWithItem("add")}>
                Add Product
              </Button>
            </div>
          </div>
        </div>
        <NotFound
          loading={loading}
          isData={data?.length > 0}
          message={"No Products found."}
        />
        {!loading && data?.length > 0 && (
          <div className="table-wrapper">
            <Table responsive className="text-nowrap">
              <thead className="table-light">
                <tr>
                  <th>SKU Number</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Stock Quantity</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="align-middle">{item?.SKUnumber}</td>
                      <td className="align-middle">
                        <div
                          onClick={() => openModelWithItem("view", item)}
                          className="flex items-center space-x-2 text-blue-500 cursor-pointer hover:scale-110"
                        >
                          <FaEye />
                          <span>{item?.name}</span>
                        </div>
                      </td>
                      <td className="align-middle">{item?.price}</td>
                      <td className="align-middle">{item?.discount}</td>
                      <td className="align-middle">{item?.stockQuantity}</td>
                      <td className="align-middle">{item?.type}</td>
                      <td className={`align-middle`}>
                        <select
                          className={`${
                            item?.status === "Pending"
                              ? "bg-orange-400"
                              : item?.status === "Hold"
                              ? "bg-red-400"
                              : item?.status === "Published"
                              ? "bg-green-400"
                              : ""
                          } border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          value={item?.status}
                          onChange={(e) =>
                            handleStatusChange(e.target.value, item?._id)
                          }
                        >
                          <option className="bg-white" value="Published">
                            Published
                          </option>
                          <option className="bg-white" value="Pending">
                            Pending
                          </option>
                          <option className="bg-white" value="Hold">
                            Hold
                          </option>
                        </select>
                      </td>
                      <td className="align-middle">
                        {" "}
                        {moment(item?.updatedAt).format("DD MMM YYYY")}
                      </td>
                      <td className="align-middle">
                        <div className="flex flex-row items-center space-x-4">
                          <BiEditAlt
                            onClick={() => openModelWithItem("edit", item)}
                            className="text-green-500 cursor-pointer hover:scale-110"
                            title="Edit"
                          />
                          <MdDeleteForever
                            onClick={() => openModelWithItem("delete", item)}
                            className="text-red-500 cursor-pointer hover:scale-110"
                            title="Delete"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            {dataLength > pageLimit && (
              <div className="d-flex justify-content-center w-100 mb-6 mt-2">
                <CustomPagination
                  totalPages={Math.ceil(dataLength / pageLimit)}
                  currentPage={currentPage}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </div>
        )}
      </div>
      <DeleteModal
        isOpen={isOpen == "delete"}
        onClose={openModelWithItem}
        title="Are you sure you want to delete this product ?"
        onConfirm={handleDelete}
      />
      <AddNewProducts
        isOpen={isOpen}
        onClose={openModelWithItem}
        planData={coustomData}
        getAllData={getAllData}
      />
      <ProductDetails
        isOpen={isOpen == "view"}
        onClose={openModelWithItem}
        planData={coustomData}
      />
    </>
  );
};
export default AllModalList;
