import React, { useEffect, useState } from "react";
import { Card, Button } from "@nextui-org/react";
import Image from "next/image";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import LocationIcon from "@/icons/locationico.svg";
import VerifiedIcon from "@/icons/verified.svg";
import Link from "next/link";
import ExlusiveIcon from "@/images/exlusive-icon.png";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { initialFeatureModalArray } from "../../utils/constants";
import useMountData from "../../utils/hooks/data_getting_hook";
import NotFound from "../common/notfound";
import { getCityCountry } from "../../utils/model";
import DummyProfile from "@/images/dummy-paragon-img.png";
import RatingComponent from "../common/model-rating";
import Masonry from "react-masonry-css";

// Type for drag-and-drop item
const ItemType = {
  CARD: "card",
};

const DraggableCard = ({ item, index, moveCard }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType.CARD,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType.CARD,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none overflow-visible relative rounded-xl"
      >
        <Link href={`/profile/model?id=${item?.userId}`}>
          <Image
            alt={item.name}
            className="object-cover max-h-[300px] object-top min-h-[300px] w-full rounded-lg h-full cursor-pointer"
            height={200}
            src={item.image}
            width={200}
          />
        </Link>

        {item.exclusive && (
          <div className="block absolute left-0 top-0 pt-[8px] py-10 px-9 bg-[#1D202666] rounded-lg w-full h-full">
            <div className="absolute top-[-10px] left-3">
              <Image
                width={70}
                height={70}
                className="w-[150px] h-auto"
                src={ExlusiveIcon}
                alt="icon"
              />
            </div>
          </div>
        )}
        {/* <button
          type="button"
          className="w-8 h-8 rounded-full flex items-center justify-center p-1.5 absolute right-3 top-3 bg-[#FFFFFF4D]"
        >
          <HiOutlineStar color="#fff" size={22} />
        </button> */}
        <div className="w-[calc(100%_-_24px)] gap-1 absolute bottom-3 left-3 right-3 bg-[#1D202680] px-4 py-2.5 rounded-xl flex items-center justify-between">
          <div className="block">
            <div className="flex items-center gap-1 mb-1.5">
              <h4 className="text-sm text-white font-bold">
                <Link href={`/profile/model?id=${item?.userId}`}>
                  <label>{item.name}</label>
                </Link>
              </h4>
              <Image
                src={VerifiedIcon}
                className="w-[14px] min-w-[14px] h-[14px] object-contain"
                alt="verified"
                width={14}
                height={14}
              />
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={LocationIcon}
                className="w-[12px] min-w-[12px] h-[14px] object-contain"
                alt="location"
                width={12}
                height={14}
              />
              <h4 className="text-sm font-normal text-white">
                {item.location}
              </h4>
            </div>
          </div>
          <RatingComponent userId={item?.userId} />
        </div>
      </Card>
    </div>
  );
};

const ModalCard = ({
  featureModalArray,
  setFeatureModalArray,
  setVisibility,
}) => {
  const moveCard = (fromIndex, toIndex) => {
    const updatedArray = [...featureModalArray];

    const [movedItem] = updatedArray.splice(fromIndex, 1);
    updatedArray.splice(toIndex, 0, movedItem);

    const updatedVisible = updatedArray?.map((item, index) => ({
      visible: index + 1,
      userId: item?.userId,
    }));

    setVisibility(updatedVisible);
    setFeatureModalArray(updatedArray);
  };
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {featureModalArray &&
          featureModalArray.map((item, index) => (
            <DraggableCard
              key={index}
              index={index}
              item={item}
              moveCard={moveCard}
            />
          ))}
      </Masonry>
    </>
  );
};

const ModalCardWrapper = ({ setVisibility }) => {
  const { data, loading, getAllData } = useMountData("/model");

  const [featureModalArray, setFeatureModalArray] = useState([]);

  useEffect(() => {
    if (data?.length > 0) {
      let filterData = getModelValidate(data);
      setFeatureModalArray(filterData);
    }
  }, [data]);

  const getModelValidate = (modelData) => {
    return modelData?.map((it) => {
      const {
        username,
        _id: userId,
        coverImage,
        plusImage,
        model,
        subscription,
      } = it;

      const getImageDetails = (image, accessType) => {
        if (image && image.isPublic && image.access?.includes(accessType)) {
          return { image: image.url, hide: false };
        } else if (image) {
          return { image: image.url, hide: true };
        }
        return { image: DummyProfile, hide: true };
      };

      let value = {
        name: username,
        location: getCityCountry(
          model?.location?.city,
          model?.location?.country
        ),
        userId,
        exclusive:
          subscription?.subscriptionType == "Exclusive_Elite_Gent"
            ? true
            : false,
        hide: false,
      };

      Object.assign(value, getImageDetails(coverImage || plusImage, "NC"));
      return value;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      {loading && data?.length == 0 && (
        <NotFound
          loading={loading}
          isData={data?.length > 0}
          message="No models found"
        />
      )}
      {!loading && data?.length > 0 && (
        <ModalCard
          setVisibility={setVisibility}
          featureModalArray={featureModalArray}
          setFeatureModalArray={setFeatureModalArray}
        />
      )}
    </DndProvider>
  );
};

export default ModalCardWrapper;
