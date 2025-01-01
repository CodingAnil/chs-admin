import { Tab, Card, CardBody, Tabs } from "@nextui-org/react";
import { Fragment, useState } from "react";
import { Container, Row } from "react-bootstrap";
import WordManagement from "../components/manage-settings/word-management";
import AddProhibitedWordModal from "../components/modal/add-prohibited-word-modal";
import ModalCardWrapper from "../components/modal/modal-card";
import useMountData from "../utils/hooks/data_getting_hook";
import NotFound from "../components/common/notfound";
import { callPutApi } from "../services";
import ButtonSpinner from "../components/loaders/buttonSpinner";
import { toastMessage } from "../utils/configs/toast";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("wordmanagement");
  const [visibility, setVisibility] = useState([]);

  const {
    data,
    loading,
    setLoading,
    setCurrentPage,
    isOpen,
    getAllData,
    coustomData,
    openModelWithItem,
    addOns,
    currentPage,
  } = useMountData("/admin/prohibited-words");

  const updateVisibility = async () => {
    try {
      if (!visibility || visibility?.length == 0) {
        toastMessage("error", "Rearrange at least one model for visibility.");
        return;
      }
      setLoading("visibility");
      const uploadResponse = await callPutApi(`/admin/update-visibility`, {
        visibility,
      });
      if (!uploadResponse.status) throw new Error(uploadResponse.message);
      toastMessage("success", "User visibility is updated Successfully.");
      setLoading(false);
    } catch (error) {
      console.error("Is admin visibility error ", error);
    }
  };

  return (
    <Fragment>
      <div className="bg-secondprimary pt-10 pb-21"></div>
      <div className="layout-wrapper">
        <Container fluid className="mt-n22 px-6 ">
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="mb-2 mb-lg-0">
                <h3 className="mb-0  text-white text-lg font-medium">
                  Manage Site Settings
                </h3>
              </div>
            </div>
            <div className="block mt-5 bg-white rounded-xl py-4 px-3 relative">
              <div className="absolute right-4">
                {" "}
                {activeTab === "wordmanagement" && (
                  <button
                    onClick={() => openModelWithItem("prohibited")}
                    className="bg-primary text-white px-4 py-2.5 text-base rounded-lg"
                  >
                    Add Prohibited Words
                  </button>
                )}
                {activeTab === "reorderProfile" && (
                  <button
                    onClick={updateVisibility}
                    disabled={loading}
                    className="bg-primary min-w-[120px] flex justify-center items-center text-white px-4 py-2.5 text-base rounded-lg"
                  >
                    Save {loading == "visibility" && <ButtonSpinner />}
                  </button>
                )}
              </div>
              <Tabs
                aria-label="Options"
                color={"primary"}
                classNames={{
                  tab: "text-base font-medium py-4",
                }}
                onSelectionChange={(key) => setActiveTab(key)}
              >
                <Tab key="wordmanagement" title="Prohibited Words Management">
                  <div className="block">
                    <NotFound
                      loading={loading}
                      isData={data?.length > 0}
                      message={"No prohibited words found."}
                    />
                    {!loading && data?.length > 0 && (
                      <WordManagement
                        proWords={data}
                        openModelWithItem={openModelWithItem}
                        isOpen={isOpen}
                        coustomData={coustomData}
                        addFooterOns={addOns}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        getAllData={getAllData}
                      />
                    )}
                  </div>
                </Tab>
                <Tab key="reorderProfile" title="Reorder Model Profiles">
                  <div className="block mt-4">
                    <div className="grid-container">
                      <ModalCardWrapper setVisibility={setVisibility} />
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </Container>
      </div>
      <AddProhibitedWordModal
        isOpen={isOpen == "prohibited"}
        onClose={openModelWithItem}
        title=" Add Prohibited Words"
        subTitle="Add word seperated by comma"
        getAllData={getAllData}
      />
    </Fragment>
  );
};
export default Settings;
