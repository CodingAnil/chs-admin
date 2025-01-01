"use client";
import DeleteIcon from "@/icons/delete-icon";
import EditIcon from "@/icons/edit-icon";
import TravelIcon from "@/icons/travel-icon.png";
import Image from "next/image";
import NotFound from "./common/notfound";
import DashedBorderLine from "./common/dash-border-line";
import moment from "moment";

const TravelDateList = ({
  travelData,
  openModal,
  loading,
  openDeleteModal,
}) => {
  return (
    <div className="overflow-y-hidden px-5 mt-5">
      <NotFound
        loading={loading}
        isData={travelData?.length > 0}
        message={"No travel date found."}
      />
      {!loading && travelData?.length > 0 && (
        <div className="min-w-[1120px] overflow-x-auto">
          {travelData &&
            travelData?.map((travel, index) => (
              <div
                key={index}
                className="rounded-xl mb-4 border border-secondaryShade3  ps-5 pe-8 py-6 flex justify-between w-full items-center"
              >
                <div className="flex items-center justify-start min-w-64">
                  <span className="bg-[#2f2b1f] w-12 h-12 rounded-full flex justify-center items-center">
                    <Image src={TravelIcon} alt="icon" width={24} height={24} />
                  </span>
                  <div className="ml-3.5">
                    <h4 className="text-sm font-medium text-darkGrey mb-1">
                      City:
                    </h4>
                    <h2 className="text-secondprimary text-base font-medium">
                      {travel?.location?.city}
                    </h2>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                    <h4 className="text-sm font-medium text-darkGrey mb-1">
                      Start Date:
                    </h4>
                    <h2 className="text-secondprimary text-base font-medium">
                      {moment(travel?.startDate).format("DD MMM YYYY") || ""}
                    </h2>
                  </div>
                  <div className="px-8">
                    <DashedBorderLine />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-darkGrey mb-1">
                      End Date:
                    </h4>
                    <h2 className="text-secondprimary text-base font-medium">
                      {moment(travel?.endDate).format("DD MMM YYYY") || ""}
                    </h2>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-4">
                  <button onClick={() => openModal("travel-edit", travel)}>
                    <EditIcon />
                  </button>
                  <button onClick={() => openModal("travel-delete", travel)}>
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
export default TravelDateList;
