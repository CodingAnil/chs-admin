import { useState } from "react";
import { travelDataArray } from "../../utils/constants";
import AddTravelDateModal from "../modal/add-traveldate-modal";
import DeleteModal from "../modal/delete-account-modal";
import TravelDateList from "../travel-date-list";
import useMountData from "../../utils/hooks/data_getting_hook";
import { toastMessage } from "../../utils/configs/toast";
import { callDeleteApi } from "../../services";
import { usePlacesWidget } from "react-google-autocomplete";

const TravelDates = ({ modalId }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [EditTravelDate, setEditTravelDate] = useState(false);
  const [removeDate, setRemoveDate] = useState(false);
  const {
    data,
    isOpen,
    loading,
    getAllData,
    setLoading,
    handleOpenMod,
    handleActionClick,
    coustomData,
    openModelWithItem,
  } = useMountData(modalId ? `admin/travel-dates/${modalId}` : null);
  const openRemoveModal = () => {
    setRemoveDate(true);
  };
  const closeRemovelModal = () => {
    setRemoveDate(false);
  };

  // const handleOpenEditTravelDate = () => {
  //   setIsOpen(true);
  //   setEditTravelDate(true);
  // };

  // const handleIsClose = () => {

  // };
  const handleDelete = async () => {
    try {
      // Make the delete API call
      const response = await callDeleteApi(
        `/admin/delete-travel-dates/${coustomData._id}`
      );
      if (response?.status) {
        toastMessage("success", "Travel date deleted successfully!");
        handleOpenMod();
        getAllData(`admin/travel-dates/${modalId}`);
      } else {
        toastMessage(
          "error",
          response?.message || "Failed to delete the travel date."
        );
      }
    } catch (error) {
      console.error("Delete operation error:", error);
      toastMessage("error", "An unexpected error occurred while deleting.");
    }
  };

  // const { ref } = usePlacesWidget({
  //   apiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY,
  //   onPlaceSelected: (h)=>{
  //     console.log(h)
  //   },
  // });

  return (
    <div className="pt-2">
      <div className="bg-white py-5 rounded-lg shadow-md mt-6">
        <div className="flex justify-between items-center px-5 ">
          <h2 className="text-primary  text-xl font-medium pb-5">
            Travel Dates
          </h2>
          <button
            onClick={() => openModelWithItem("travel-edit", {})}
            className="btn-primary !h-[48px] rounded-lg"
          >
            Add New Travel Date
          </button>
        </div>
        {/* <input ref={ref}/> */}
        <TravelDateList
          travelData={data}
          loading={loading}
          openModal={openModelWithItem}
          openDeleteModal={openRemoveModal}
        />
      </div>
      <AddTravelDateModal
        modalId={modalId}
        travelData={coustomData}
        isOpen={isOpen == "travel-edit"}
        onClose={openModelWithItem}
        isEditTravel={EditTravelDate}
        getAllData={getAllData}
      />
      <DeleteModal
        isOpen={isOpen == "travel-delete"}
        modalId={modalId}
        onClose={openModelWithItem}
        title="  Are you sure you want to delete these Travel dates?"
        getAllData={getAllData}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default TravelDates;
