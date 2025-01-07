import React, { useState } from "react";
import { Table, Dropdown, Button } from "react-bootstrap";
import CustomPagination from "./common/custom-pagination";
import SuspendAccount from "./modal/suspend-account-modal";
import UpgradeModal from "./modal/upgrade-modal";
import getMountData from "../utils/hooks/data_getting_hook";
import NotFound from "./common/notfound";
import FilterMenu from "./common/filter-dropdown";
import ActionMenu from "./common/actions-menu";
import Breadcrumb from "./common/bread-crump";
import { capitalizeFirstLetter, getVerifyStatus } from "../utils/model";
import SearchComponent from "./common/model-search";
import { medicineArray } from "../utils/constants";

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
    handleActionClick,
    getAllData,
    coustomData,
    searchQuery,
    setSearchQuery,
  } = getMountData("/admin/active-models");

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
              <Button onClick={() => handleOpenMod("add")}>Add Product</Button>
            </div>
          </div>
        </div>
        {/* <NotFound
          loading={loading}
          isData={data?.length > 0}
          message={"No Products found."}
        /> */}
        {!loading && data?.length == 0 && (
          <div className="table-wrapper">
            <Table responsive className="text-nowrap">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Offer</th>
                  <th>Rating</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {medicineArray?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="align-middle">{item?.name}</td>
                      <td className="align-middle">{item?.price}</td>
                      <td className="align-middle">{item?.offer}</td>
                      <td className="align-middle">{item?.rating}</td>
                      <td className="align-middle">{"Listed"}</td>
                      <td className="align-middle">{item?.date}</td>
                      <td className="align-middle">
                        <ActionMenu
                          item={item}
                          type="model"
                          handleClick={handleActionClick}
                        />
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
      <UpgradeModal
        isOpen={isOpen == "add"}
        onClose={handleOpenMod}
        planData={coustomData}
        getAllData={getAllData}
      />
      <SuspendAccount
        roleType={"model"}
        getAllData={getAllData}
        isOpen={isOpen == "suspend"}
        onClose={handleOpenMod}
      />
      <UpgradeModal
        isOpen={isOpen == "upgrade"}
        onClose={handleOpenMod}
        planData={coustomData}
        getAllData={getAllData}
      />
    </>
  );
};
export default AllModalList;
