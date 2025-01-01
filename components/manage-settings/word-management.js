import React, { useState } from "react";
import Link from "next/link";
import { Table, Dropdown } from "react-bootstrap";
import CustomPagination from "../common/custom-pagination";
import { wordManagementData } from "../../utils/constants";
import { MdDelete, MdEdit } from "react-icons/md";
import DeleteModal from "../modal/delete-account-modal";
import AddProhibitedWordModal from "../modal/add-prohibited-word-modal";
import moment from "moment";
import { callDeleteApi } from "../../services";
import { toastMessage } from "../../utils/configs/toast";

const WordManagement = ({
  proWords,
  openModelWithItem,
  isOpen,
  coustomData,
  addFooterOns,
  setCurrentPage,
  currentPage,
  getAllData,
}) => {
  const handleDelete = async () => {
    try {
      const response = await callDeleteApi(
        `/admin/prohibited-words/${coustomData._id}`
      );
      if (response?.status) {
        toastMessage("success", "Prohibited word is deleted successfully!");
        openModelWithItem();
        getAllData(`/admin/prohibited-words`);
      } else {
        toastMessage(
          "error",
          response?.message || "Failed to delete the prohibited word"
        );
      }
    } catch (error) {
      console.error("Delete operation error:", error);
      toastMessage("error", "An unexpected error occurred while deleting.");
    }
  };

  const ActionMenu = ({ word }) => {
    return (
      <div className="flex items-center gap-3">
        <button
          className="text-xl"
          onClick={() => openModelWithItem("edit-prohibited", word)}
          aria-label="Edit word"
        >
          <MdEdit />
        </button>
        <button
          className="text-xl"
          onClick={() => openModelWithItem("delete", word)}
          aria-label="Delete word"
        >
          <MdDelete />
        </button>
      </div>
    );
  };
  console.log(addFooterOns, "addFooterOns");

  return (
    <>
      <div className="h-100 p-0">
        <div className="table-wrapper">
          <Table responsive className="text-nowrap custom-table">
            <thead className="table-light">
              <tr>
                <th>Sr No:</th>
                <th>Word Text</th>
                <th>Last Updated</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {proWords?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item?.word}</td>
                    <td>
                      {" "}
                      {moment(item?.updatedAt).format("DD MMM YYYY") || ""}
                    </td>
                    <td>
                      <ActionMenu word={item} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        {addFooterOns?.totalWords > addFooterOns?.limit && (
          <div className="d-flex justify-content-center w-100 mb-6 mt-2">
            <CustomPagination
              totalPages={addFooterOns?.totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
      <DeleteModal
        isOpen={isOpen == "delete"}
        onClose={openModelWithItem}
        title="Are you sure you want to delete this word text ?"
        onConfirm={handleDelete}
      />
      <AddProhibitedWordModal
        isOpen={isOpen == "edit-prohibited"}
        onClose={openModelWithItem}
        title="Edit Prohibited Words"
        editWord={coustomData}
        getAllData={getAllData}
      />
    </>
  );
};
export default WordManagement;
