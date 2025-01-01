import { useEffect, useState, useCallback } from "react";
import { callGetApi } from "../../services";
import { current } from "@reduxjs/toolkit";

const useMountData = (baseUrl) => {
  const [data, setData] = useState([]);
  const [backupData, setBackupData] = useState([]);
  const [addOns, setAddOns] = useState({});
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState("");
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [dataLength, setDataLength] = useState(0);
  const [coustomData, setCoustomData] = useState({});

  const pageLimit = 10;

  const getAllData = useCallback(
    async (baseUrl, noLoading) => {
      setLoading(noLoading ? false : true);
      let url = `${baseUrl}?limit=${pageLimit}&currentPage=${currentPage}`;
      if (query || searchQuery) {
        url = `${baseUrl}?limit=${pageLimit}&currentPage=${currentPage}&status=${query}&search=${searchQuery}`;
      }

      try {
        const response = await callGetApi(url);
        if (response?.status) {
          setData(response.data);
          setBackupData(response.data);
          if (response?.addOns) {
            setDataLength(response.addOns?.totalUsers);
            setAddOns(response?.addOns);
            // setCurrentPage(response.addOns?.page);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    },
    [baseUrl, query,searchQuery, currentPage]
  );

  useEffect(() => {
    if (baseUrl) {
      getAllData(baseUrl);
    }
  }, [getAllData, baseUrl]);

  const handleOpenMod = (key) => {
    setCoustomData({});
    setIsOpen(key);
  };

  const openModelWithItem = (key, item) => {
    if (!item) {
      setCoustomData({});
    }
    setIsOpen(key);
    setCoustomData(item);
  };

  const handleActionClick = (key, item, type, router) => {
    switch (key) {
      case "Suspend Account":
        handleOpenMod("suspend");
        break;
      case "Re Activate Account":
        handleOpenMod("suspend");
        break;
      case "Upgrade":
        handleOpenMod("upgrade");
        setCoustomData(item);
        break;
      case "Downgrade":
        handleOpenMod("upgrade");
        setCoustomData(item);
        break;
      case "View Profile":
        router?.push(
          type == "model" || type == "pendingModel"
            ? `/profile/model?id=${item?._id}`
            : `/profile/client?id=${item?._id}`
        );
        break;
      case "Edit Profile":
        router?.push(`/profile/edit-profile?id=${item?._id}&role=model`);
        break;
      case "Send Message":
        router?.push(`/chat?id=${item?._id}`);
      case "size verify model":
        handleOpenMod("sizeVerify");
        setCoustomData(item);
      case "travel-edit":
        handleOpenMod("edit");
        setCoustomData(item);
        break;
    }
  };

  return {
    data,
    setData,
    backupData,
    loading,
    setLoading,
    currentPage,
    setCurrentPage,
    handleOpenMod,
    isOpen,
    setIsOpen,
    query,
    setQuery,
    pageLimit,
    dataLength,
    handleActionClick,
    getAllData,
    coustomData,
    openModelWithItem,
    isLoading,
    setIsLoading,
    addOns,
    searchQuery,
    setSearchQuery
  };
};

export default useMountData;
