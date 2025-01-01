"use client";

import React, { useEffect, useRef } from "react";
import { Input } from "@nextui-org/react";
import moment from "moment";
import useForm from "../../utils/hooks/formik_hook";
import { toastMessage } from "../../utils/configs/toast";
import { callPutApi, callPostApi } from "../../services";
import ButtonSpinner from "../../components/loaders/buttonSpinner";
import ErrInput from "../../components/common/errorInput";
import { travelValidate } from "../../utils/validations/profile";
import { LocationInput } from "../common/placesInput";
import { Button, Modal, ModalBody } from "react-bootstrap";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import CalenderIcon from "@/icons/calender-icon";
// import Autocomplete from "react-google-autocomplete";

const AddTravelDateModal = ({
  isOpen,
  travelData,
  onClose,
  modalId,
  isEditTravel,
  getAllData,
}) => {
  const isEmptyObject = (obj) => {
    return !obj || Object.keys(obj).length === 0;
  };

  const handleFormSubmit = async (data) => {
    try {
      const id = isEmptyObject(travelData) ? modalId : travelData?._id;

      setLoading(true);

      // Choose API call based on whether travelData is empty
      const response = isEmptyObject(travelData)
        ? await callPostApi(`admin/add-travel-dates/${id}`, data)
        : await callPutApi(`admin/update-travel-dates/${id}`, data);

      if (response?.status) {
        toastMessage("success", response?.message);
        getAllData(`admin/travel-dates/${modalId}`);
        onClose();
      } else {
        toastMessage("error", response?.message || "Operation failed");
      }
    } catch (error) {
      console.error("Travel operation error:", error);
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
    handleSelect,
    values,
  } = useForm({
    initialValues: {
      location: {
        city: travelData?.location?.city || "",
        country: travelData?.location?.city || "",
      },
      startDate: travelData?.startDate
        ? moment(travelData.startDate).format("YYYY-MM-DD")
        : "",
      endDate: travelData?.endDate
        ? moment(travelData.endDate).format("YYYY-MM-DD")
        : "",
    },
    validationFunction: travelValidate,
    handleFormSubmit: handleFormSubmit,
  });

  const handleCancel = () => {
    resetForm();
    onClose();
  };

  const dateInputRef = useRef(null);
  const endDateRef = useRef(null);
  const startOpenCalendar = () => {
    dateInputRef.current && dateInputRef.current.showPicker();
  };
  const endOpenCalendar = () => {
    endDateRef.current && endDateRef.current.showPicker();
  };
  return (
    <Modal
      show={isOpen}
      // onHide={handleCancel}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="custom-modal-box"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 className="text-2xl px-6 md:px-8 text-left font-medium text-primary mb-0">
            {isEmptyObject(travelData)
              ? "Add New Travel Date"
              : "Edit Travel Date"}
          </h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="block">
          <div className="w-full mb-4">
            <div className="form-group">
              <div className="bg-[#484a4e] py-2 custom-input-field focus:bg-[#484a4e] hover:bg-[#484a4e] px-4 rounded-small flex items-center">
                <span>
                  {" "}
                  <HiOutlineBuildingOffice2
                    size={18}
                    className="text-white mr-1"
                  />
                </span>
                <LocationInput values={values} handleSelect={handleSelect} />
              </div>
              <ErrInput error={touched.location && errors.location} />
            </div>
          </div>

          <div className="flex gap-6 items-start mb-2 aria-hidden custom-date-field">
            <div className="w-1/2">
              <div className="form-group">
                <div className="date-input relative">
                  <input
                    type="date"
                    placeholder="Start Date"
                    ref={dateInputRef}
                    {...formik.getFieldProps("startDate")}
                  />
                  <span
                    className="bg-[#484a4e] cursor-pointer"
                    onClick={startOpenCalendar}
                  >
                    <CalenderIcon />
                  </span>
                </div>
                <ErrInput error={touched.startDate && errors.startDate} />
              </div>
            </div>
            <div className="w-1/2">
              <div className="form-group">
                <div className="date-input relative">
                  <input
                    type="date"
                    ref={endDateRef}
                    placeholder="End Date"
                    {...formik.getFieldProps("endDate")}
                  />
                  <span
                    className="bg-[#484a4e] cursor-pointer"
                    onClick={endOpenCalendar}
                  >
                    <CalenderIcon />
                  </span>
                </div>
                <ErrInput error={touched.endDate && errors.endDate} />
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="bg-primary rounded-lg text-white text-base font-bold py-3.5 px-7"
          onClick={handleSubmit}
          disabled={loading}
        >
          {isEmptyObject(travelData) ? "Save" : "Update"}
          {loading && <ButtonSpinner />}
        </button>
        <button
          disabled={loading}
          onClick={handleCancel}
          className="bg-transparent text-white font-bold text-base rounded-lg border border-[#A6A6A6] py-3.5 px-7"
        >
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTravelDateModal;
