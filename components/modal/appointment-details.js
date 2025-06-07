import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import moment from "moment";

const AppointmentDetails = ({ isOpen, onClose, appointmentData }) => {
  // Handle modal close
  const handleCancel = () => {
    onClose();
  };

  console.log(appointmentData, "datttttttt");

  const renderDetailRow = (label, value) => (
    <div className="flex gap-2 mb-3">
      <span className="font-bold text-base text-gray-400 min-w-[150px]">
        {label}:
      </span>
      <span className="text-base text-white">{value || "N/A"}</span>
    </div>
  );

  return (
    <Modal
      size="xl"
      isOpen={isOpen}
      backdrop="blur"
      hideCloseButton={true}
      placement="center"
    >
      <ModalContent className="bg-[#1A1D22] border border-[#353535] rounded-xl shadow-lg">
        <ModalBody className="pt-7 pb-8 px-6 overflow-y-auto max-h-[80vh]">
          <div className="mb-6">
            <h2 className="text-center text-3xl text-white font-medium">
              Appointment Details
            </h2>
          </div>

          <div className="text-white">
            {/* Patient Information */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-300">
                Patient Information
              </h3>
              {renderDetailRow(
                "Full Name",
                `${appointmentData?.patientId?.firstName} ${appointmentData?.patientId?.lastName}`
              )}
              {renderDetailRow("Email", appointmentData?.patientId?.email)}
              {renderDetailRow(
                "Phone",
                appointmentData?.patientId?.phoneNumber
              )}
              {renderDetailRow("Patient Id", appointmentData?.patientId?._id)}
            </div>

            {/* Doctor Information */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-300">
                Doctor Information
              </h3>
              {renderDetailRow(
                "Full Name",
                `Dr. ${appointmentData?.refDoctor?.firstName} ${appointmentData?.refDoctor?.lastName}`
              )}
              {renderDetailRow("Email", appointmentData?.refDoctor?.email)}
              {renderDetailRow(
                "Phone",
                appointmentData?.refDoctor?.phoneNumber
              )}
              {renderDetailRow("Doctor Id", appointmentData?.refDoctor?._id)}
              {/* {renderDetailRow(
                "Specialization",
                appointmentData?.doctor?.specialization
              )} */}
            </div>

            {/* Appointment Information */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-300">
                Appointment Information
              </h3>
              {renderDetailRow("Appointment Id", appointmentData?._id)}
              {renderDetailRow(
                "Appointment Name",
                appointmentData?.name || appointmentData?.testName
              )}
              {renderDetailRow(
                "Appointment Date",
                moment(appointmentData?.date).format("DD MMM YYYY")
              )}
              {renderDetailRow(
                "Appointment Time",
                moment(appointmentData?.time, "HH:mm").format("hh:mm A")
              )}
              {renderDetailRow("Reason", appointmentData?.reason)}
              {renderDetailRow(
                "Attachment File",
                <a href={appointmentData?.attachment} target="_blank">
                  {appointmentData?.attachment}
                </a>
              )}
              {renderDetailRow("Health Status", appointmentData?.healthStatus)}
              {renderDetailRow("Doctor Comment", appointmentData?.comments)}

              {renderDetailRow(
                "Doctor Prescription",
                appointmentData?.prescriptionText
              )}

              {renderDetailRow(
                "prescription File",
                <a href={appointmentData?.prescriptionFile} target="_blank">
                  {appointmentData?.prescriptionFile || "--"}
                </a>
              )}

              {renderDetailRow(
                "Status",
                appointmentData?.status == "Cancelled" ||
                  appointmentData?.status === "Completed"
                  ? appointmentData?.status
                  : "Pending"
              )}
            </div>

            {/* Additional Information */}
            {appointmentData?.prescription && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Prescription Details
                </h3>
                {renderDetailRow(
                  "Medications",
                  appointmentData?.prescription?.medications
                )}
                {renderDetailRow(
                  "Dosage",
                  appointmentData?.prescription?.dosage
                )}
                {renderDetailRow(
                  "Duration",
                  appointmentData?.prescription?.duration
                )}
                {renderDetailRow(
                  "Instructions",
                  appointmentData?.prescription?.instructions
                )}
              </div>
            )}
          </div>

          {/* Close Button */}
          <div className="flex justify-center gap-4.5 mt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="border border-white text-base font-bold text-white py-3 px-6 rounded-md"
            >
              Close
            </button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AppointmentDetails;
