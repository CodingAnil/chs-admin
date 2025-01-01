import { Modal, ModalContent, ModalBody, Textarea } from "@nextui-org/react";
import useForm from "../../utils/hooks/formik_hook";
import { verificationResonValidate } from "../../utils/validations/profile";
import ErrInput from "../common/errorInput";
import { useEffect } from "react";
import ButtonSpinner from "../loaders/buttonSpinner";

const ReverificationModal = ({ loading, isOpen, onClose, onSubmit }) => {
  const { handleSubmit, touched, errors, formik, resetForm } = useForm({
    initialValues: {
      reason: "",
    },
    validationFunction: verificationResonValidate,
    handleFormSubmit: (val) => resetAndSubmit(val),
  });

  const resetAndSubmit = async (val) => {
    await onSubmit(val);
    resetForm();
  };

  const onCancel = () => {
    resetForm();
    onClose();
  };

  useEffect(() => {
    resetForm();
  }, []);

  return (
    <Modal
      size="lg"
      isOpen={isOpen}
      // onClose={onCancel}
      backdrop="blur"
      hideCloseButton={true}
      placement="center"
    >
      <ModalContent className="bg-[#1A1D22]  custom-dark-modal backdrop-blur-lg max-w-[95%] md:max-w-[745px] rounded-[20px] border border-primary px-0 pt-5 pb-[30px] font-primary">
        <ModalBody className="text-white text-center p-0 gap-0">
          <div className="block mb-3">
            <h2 className="text-2xl px-6 md:px-8 text-left font-medium text-white mb-5">
              Resend Reverification
            </h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-[#353535] to-[#4e4c4c]"></div>
          </div>
          <div className="block px-6 md:px-8">
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
                value={formik.values.reason} 
                onChange={(e) => {
                  formik.setFieldValue("reason", e.target.value.trimStart());
                }}
                onBlur={formik.handleBlur}
              />
              <div className="text-left">
                <ErrInput error={touched.reason && errors.reason} />
              </div>
            </div>
            <div className="flex justify-center gap-4.5">
              <button
                disabled={loading}
                onClick={handleSubmit}
                className="bg-yellow btn-bg-primary rounded-lg text-white text-base font-bold py-3.5 px-7"
              >
                Submit {loading && <ButtonSpinner />}
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

export default ReverificationModal;
