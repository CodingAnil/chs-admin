import React, { useState } from "react";
import { Card, Table, Dropdown, Image } from "react-bootstrap";
import CustomPagination from "./common/custom-pagination";
import SuspendAccountModal from "./modal/suspend-account-modal";
import getMountData from "../utils/hooks/data_getting_hook";
import NotFound from "./common/notfound";
import ActionMenu from "./common/actions-menu";
import Breadcrumb from "./common/bread-crump";
import {
  getPendingVerifyFor,
  getVerifyFor,
  getVerifyStatus,
} from "../utils/model";
import moment from "moment";
import FilterMenu from "./common/filter-dropdown";
import SearchComponent from "./common/model-search";

const PendingVerificationList = () => {
  const {
    data,
    loading,
    setCurrentPage,
    currentPage,
    isOpen,
    handleOpenMod,
    pageLimit,
    dataLength,
    handleActionClick,
    setQuery,
    query,
    searchQuery,
    setSearchQuery,
  } = getMountData("/admin/pending-models");

  return (
    <>
      <Card className="h-100 p-0 min-h-[200px]">
        <div className="flex justify-between items-center px-4 py-3">
          <Breadcrumb title={"Pending Verification"} />
          <div className="flex items-center">
            <SearchComponent
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <FilterMenu
              type="pending-model"
              selected={query}
              setSelected={setQuery}
            />
          </div>
        </div>
        <NotFound
          loading={loading}
          isData={data?.length > 0}
          message={"No models found."}
        />
        {!loading && data?.length > 0 && (
          <div className="table-wrapper">
            {" "}
            <Table responsive className="text-nowrap">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Verification Type</th>
                  <th>Verification For</th>
                  <th>Date Submitted</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="align-middle">{item?.username}</td>
                      <td className="align-middle">
                        {item?.status?.toLowerCase() == "rejected"
                          ? "Re-Submited"
                          : "New"}
                      </td>
                      <td className="align-middle">
                        (
                        <span style={{ color: "red" }}>
                          {getVerifyFor(
                            item?.model?.verification_status,
                            item?.model?.stats?.cockStatus,
                            item?.status
                          )}{" "}
                          {getPendingVerifyFor(
                            item?.pendingImage,
                            item?.pendingVideo,
                            item?.pendingReview
                          )}
                        </span>
                        )
                      </td>
                      <td className="align-middle">
                        {moment(item?.updatedAt).format("DD MMM YYYY") || ""}
                      </td>
                      <td className="align-middle">
                        <ActionMenu
                          item={item}
                          type="pendingModel"
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
      </Card>
      <SuspendAccountModal
        isOpen={isOpen == "suspend"}
        onClose={handleOpenMod}
      />
    </>
  );
};
export default PendingVerificationList;
