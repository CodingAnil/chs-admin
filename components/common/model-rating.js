"use client";
import { useEffect } from "react";
import { HiStar } from "react-icons/hi";
import useMountData from "../../utils/hooks/data_getting_hook";

const RatingComponent = ({ userId }) => {
  const { data, loading, getAllData } = useMountData(null);

  useEffect(() => {
    if (userId) {
      getAllData(`/admin/get-average-rating/${userId}`, userId);
    }
  }, [userId]);

  return (
    <div className="text-sm text-[#F3F0F3] bg-[#F4F1F34D] w-[47px] !h-auto rounded flex flex-col gap-1 px-1.5 py-2 justify-center items-center">
      {loading == userId ? (
        <ButtonSpinner />
      ) : (
        <>
          <HiStar color="#fff" size={20} />
          <span>{data?.averageRating}/5</span>
        </>
      )}
    </div>
  );
};

export default RatingComponent;
