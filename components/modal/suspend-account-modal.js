import { Modal, ModalContent, ModalBody, Textarea } from "@nextui-org/react";
import useForm from "../../utils/hooks/formik_hook";
import { verificationResonValidate } from "../../utils/validations/profile";
import ErrInput from "../common/errorInput";
import { callPutApi } from "../../services";
import { toastMessage } from "../../utils/configs/toast";
import { useSelector } from "react-redux";
import ButtonSpinner from "../loaders/buttonSpinner";

const SuspendAccountModal = ({ roleType, isOpen, onClose, getAllData }) => {
  const { selectedMenu, selectedUser } = useSelector((state) => state?.users);
  // console.log(selectedMenu, selectedUser, "selectedMenu");

  const handleUpdate = async (values) => {
    try {
      let data = {
        userId: selectedUser?._id,
        status: selectedMenu == "Suspend Account" ? "Suspended" : "Active",
        reason: values?.reason || null,
      };
      setLoading(true);
      const response = await callPutApi(
        `admin/suspend-account/${selectedUser?._id}`,
        data
      );
      if (response?.status) {
        await getAllData(
          roleType == "model" ? "/admin/active-models" : "/admin/all-client"
        );
        toastMessage(
          "success",
          `Account ${
            selectedMenu == "Suspend Account" ? "suspended" : "active"
          } successfully`
        );
      } else {
        toastMessage("error", response?.message || "Account suspended Failed");
      }
    } catch (error) {
      console.error("DAccount suspended error:", error);
      toastMessage("error", "An unexpected error occurred");
    } finally {
      setLoading(false);
      onCancel();
    }
  };

  const {
    loading,
    setLoading,
    handleSubmit,
    touched,
    errors,
    formik,
    resetForm,
  } = useForm({
    initialValues: {
      reason: "",
    },
    validationFunction:
      selectedMenu == "Suspend Account" ? verificationResonValidate : "",
    handleFormSubmit: handleUpdate,
  });

  const onCancel = () => {
    resetForm();
    onClose();
  };

  return (
    <Modal
      size="lg"
      isOpen={isOpen}
      backdrop="blur"
      hideCloseButton={true}
      placement="center"
    >
      <ModalContent className="bg-[#1A1D22]  custom-dark-modal backdrop-blur-lg max-w-[95%] md:max-w-[745px] rounded-[20px] border border-primary px-0 pt-5 pb-[30px] font-primary">
        <ModalBody className="text-white text-center p-0 gap-0">
          <div className="block mb-3">
            <h2 className="text-2xl px-6 md:px-8 text-left font-medium text-white mb-5">
              {selectedMenu == "Suspend Account"
                ? "Suspend Account"
                : "Activate Account"}
            </h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-[#353535] to-[#4e4c4c]"></div>
          </div>
          <div className="block px-6 md:px-8">
            {selectedMenu == "Suspend Account" ? (
              <>
                <div className="text-left mb-2">
                  <h4 className="text-white text-lg font-bold">Reason</h4>
                </div>
                <div className="w-full mb-6">
                  <Textarea
                    classNames={{
                      base: "max-w-full w-full reason-modal",
                      mainWrapper: "h-full reason-modal",
                      input: "text-small resize-y min-h-[140px]",
                      inputWrapper:
                        "h-full font-normal text-white bg-[#484a4e] focus:bg-[#484a4e] hover:bg-[#484a4e]",
                    }}
                    color="#ffffff"
                    placeholder="Write a Reason"
                    {...formik.getFieldProps("reason")}
                  />
                  <div className="flex justify-start">
                    {" "}
                    <ErrInput error={touched.reason && errors.reason} />
                  </div>
                </div>
              </>
            ) : (
              <div className="text-left mb-2">
                <h4 className="text-white text-lg font-bold">
                  Re Activate this account ?
                </h4>
              </div>
            )}
            <div className="flex justify-center gap-4.5">
              <button
                disabled={loading}
                onClick={handleSubmit}
                className="bg-yellow btn-bg-primary rounded-lg text-white text-base font-bold py-3.5 px-7"
              >
                                {selectedMenu == "Suspend Account" ? "Submit" : "Re Activate"}
                                {loading && <ButtonSpinner />}
              </button>
              <button
                disabled={loading}
                onClick={onCancel}
                className="bg-transparent text-white font-bold text-base rounded-lg border border-[#A6A6A6] py-3.5 px-7"
              >
                Cancel
              </button>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SuspendAccountModal;
