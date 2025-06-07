import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import CustomPagination from "./common/custom-pagination";
import getMountData from "../utils/hooks/data_getting_hook";
import NotFound from "./common/notfound";
import Breadcrumb from "./common/bread-crump";
import SearchComponent from "./common/model-search";
import moment from "moment";
import { FaEye } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { callDeleteApi, callPatchApi } from "../services";
import { toastMessage } from "../utils/configs/toast";
import DeleteModal from "./modal/delete-account-modal";
import AppointmentDetails from "./modal/appointment-details";

const Appointments = () => {
  const {
    data,
    loading,
    setCurrentPage,
    currentPage,
    isOpen,
    query,
    setQuery,
    pageLimit,
    dataLength,
    getAllData,
    coustomData,
    searchQuery,
    setSearchQuery,
    openModelWithItem,
  } = getMountData("/admin/appointments");

  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });

  const handleDelete = async () => {
    try {
      const response = await callDeleteApi(
        `/admin/appointment/${coustomData._id}`
      );
      if (response?.status) {
        toastMessage("success", "Appointment deleted successfully!");
        openModelWithItem();
        getAllData(`/admin/appointments`);
      } else {
        toastMessage(
          "error",
          response?.message || "Failed to delete the appointment"
        );
      }
    } catch (error) {
      console.error("Delete operation error:", error);
      toastMessage("error", "An unexpected error occurred while deleting.");
    }
  };

  const handleStatusChange = async (status, id) => {
    try {
      const response = await callPatchApi(`/admin/appointment-status/${id}`, {
        status,
      });
      if (response?.status) {
        toastMessage("success", `Appointment Status changed to ${status}`);
        getAllData(`/admin/appointments`);
      } else {
        toastMessage(
          "error",
          response?.message || "Failed to change the appointment status"
        );
      }
    } catch (error) {
      console.error("Status change error:", error);
      toastMessage(
        "error",
        "An unexpected error occurred while changing status."
      );
    }
  };

  const handleDateFilter = () => {
    setQuery((prev) => ({
      ...prev,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
    }));
  };

  return (
    <>
      <div className="h-100 p-0 min-h-[200px]">
        {/* Header Section */}
        <div className="px-4 py-3">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            {/* Title */}
            {/* <Breadcrumb title={"Appointments"} /> */}

            {/* Filters Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
              {/* Search Bar */}
              <div className="w-full sm:w-64">
                <SearchComponent
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  placeholder={"Search by patient or doctor name"}
                />
              </div>

              {/* Date Range Filter */}
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <input
                  type="date"
                  className="border rounded px-2 py-1 text-sm w-full sm:w-auto"
                  value={dateRange.startDate}
                  onChange={(e) =>
                    setDateRange((prev) => ({
                      ...prev,
                      startDate: e.target.value,
                    }))
                  }
                />
                <span className="text-white">to</span>
                <input
                  type="date"
                  className="border rounded px-2 py-1 text-sm w-full sm:w-auto"
                  value={dateRange.endDate}
                  onChange={(e) =>
                    setDateRange((prev) => ({ ...prev, endDate: e.target.value }))
                  }
                />
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={handleDateFilter}
                  className="w-full sm:w-auto"
                >
                  Apply
                </Button>
              </div>

              {/* Status Filter */}
              <div className="w-full sm:w-40">
                <select
                  className="border rounded px-2 py-1 text-sm w-full"
                  value={query?.status || ""}
                  onChange={(e) =>
                    setQuery((prev) => ({ ...prev, status: e.target.value }))
                  }
                >
                  <option value="">All Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="px-4">
          <NotFound
            loading={loading}
            isData={data?.length > 0}
            message={"No appointments found."}
          />

          {!loading && data?.length > 0 && (
            <div className="table-wrapper">
              <Table responsive className="text-nowrap">
                <thead className="table-light">
                  <tr>
                    <th>Sr. No</th>
                    <th>Appointment</th>
                    <th>Patient Name</th>
                    <th>Doctor Name</th>
                    <th>Appointment Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    {/* <th>Actions</th> */}
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => (
                    <tr key={index}>
                      <td className="align-middle">{index + 1}</td>
                      <td className="align-middle">
                        <div
                          onClick={() => openModelWithItem("view", item)}
                          className="flex items-center space-x-2 text-blue-500 cursor-pointer hover:scale-110"
                        >
                          <FaEye />
                          <span>{`${
                            item?.name || item?.testName || "test"
                          }`}</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>{`${item?.patientId?.firstName} ${
                          item?.patientId?.lastName && item?.patientId?.lastName
                        }`}</span>
                      </td>
                      <td className="align-middle">
                        {`Dr. ${item?.refDoctor?.firstName} ${
                          item?.refDoctor?.lastName && item?.refDoctor?.lastName
                        }`}
                      </td>
                      <td className="align-middle">
                        {moment(item?.date || new Date()).format("DD MMM YYYY") ||
                          moment(item?.updatedAt).format("DD MMM YYYY")}
                      </td>
                      <td className="align-middle">
                        {moment(item?.time, "HH:mm").format("hh:mm A")}
                      </td>
                      <td className="align-middle">
                        <span
                          className={`${
                            item?.status === "Cancelled"
                              ? "bg-red-400"
                              : item?.status === "Completed"
                              ? "bg-green-400"
                              : "bg-blue-400"
                          } border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        >
                          {item?.status == "Cancelled" ||
                          item?.status === "Completed"
                            ? item?.status
                            : "Pending"}
                        </span>
                        {/* <select
                          className={`${
                            item?.status === "Cancelled"
                              ? "bg-red-400"
                              : item?.status === "Completed"
                              ? "bg-green-400"
                              : "bg-blue-400"
                          } border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          value={item?.status}
                          onChange={(e) =>
                            handleStatusChange(e.target.value, item?._id)
                          }
                        >
                          <option className="bg-white" value="Pending">
                            Pending
                          </option>
                          <option className="bg-white" value="Completed">
                            Completed
                          </option>
                          <option className="bg-white" value="Cancelled">
                            Cancelled
                          </option>
                        </select> */}
                      </td>
                      {/* <td className="align-middle">
                        <div className="flex flex-row items-center space-x-4">
                          {/* <BiEditAlt
                            onClick={() => openModelWithItem("edit", item)}
                            className="text-green-500 cursor-pointer hover:scale-110"
                            title="Edit"
                          /> */}
                          {/* <MdDeleteForever
                            onClick={() => openModelWithItem("delete", item)}
                            className="text-red-500 cursor-pointer hover:scale-110"
                            title="Delete"
                          /> 
                        </div>
                      </td> */}
                    </tr>
                  ))}
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
      </div>

      <DeleteModal
        isOpen={isOpen === "delete"}
        onClose={openModelWithItem}
        title="Are you sure you want to delete this appointment?"
        onConfirm={handleDelete}
      />

      <AppointmentDetails
        isOpen={isOpen === "view"}
        onClose={openModelWithItem}
        appointmentData={coustomData}
      />
    </>
  );
};

export default Appointments;
