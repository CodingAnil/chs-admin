"use client";
import React, { useState } from "react";
import { Table, Dropdown } from "react-bootstrap";
import CustomPagination from "./common/custom-pagination";
import SuspendAccountModal from "./modal/suspend-account-modal";
import FilterMenu from "./common/filter-dropdown";
import getMountData from "../utils/hooks/data_getting_hook";
import ActionMenu from "./common/actions-menu";
import Breadcrumb from "./common/bread-crump";
import NotFound from "./common/notfound";
import { capitalizeFirstLetter } from "../utils/model";

const AllClientsManagementList = () => {
  const {
    data,
    loading,
    setCurrentPage,
    currentPage,
    isOpen,
    handleOpenMod,
    pageLimit,
    dataLength,
    query,
    setQuery,
    handleActionClick,
    getAllData,
  } = getMountData("/admin/all-client");

  return (
    <>
      <div className="h-100 p-0 min-h-[200px]">
        <div className="flex justify-between items-center px-4 py-3">
          <Breadcrumb title={"All Clients"} />
          <FilterMenu type="client" selected={query} setSelected={setQuery} />
        </div>
        <NotFound
          loading={loading}
          isData={data?.length > 0}
          message={"No clients found."}
        />
        {!loading && data?.length > 0 && (
          <div className="table-wrapper">
            <Table responsive className="text-nowrap">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Membership Type</th>
                  <th>Account Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  console.log("Rendering client:", item);

                  return (
                    <tr key={index}>
                      <td className="align-middle">{item.username}</td>
                      <td className="align-middle">{item.email}</td>
                      <td className="align-middle">
                        {item?.subscription?.subscriptionType}
                      </td>
                      <td className="align-middle">
                        {capitalizeFirstLetter(item?.status)}
                      </td>

                      <td className="align-middle">
                        <ActionMenu
                          type="client"
                          handleClick={handleActionClick}
                          item={item}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            {/* Handling Pagination */}
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
      <SuspendAccountModal
        roleType="client"
        getAllData={getAllData}
        isOpen={isOpen == "suspend"}
        onClose={handleOpenMod}
      />
    </>
  );
};
export default AllClientsManagementList;
