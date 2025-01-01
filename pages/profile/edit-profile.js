import Link from "next/link";
import Image from "next/image";
import BackButton from "@/icons/backbtn.svg";
import ProfileCreationForm from "../../components/edit-profile/profile-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import useMountData from "../../utils/hooks/data_getting_hook";

const EditProfileCreation = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");
  const userRole = searchParams.get("role");

  const router = useRouter();

  const { data, loading, getAllData } = useMountData(null);

  useEffect(() => {
    if (userId) {
      if (userRole == "model") {
        getAllData(`/model/${userId}`, true);
      } else {
        getAllData(`/client/${userId}`, true);
      }
    }
  }, [userId]);

  return (
    <div className="block py-8 font-primary pt-[68px] bg-light px-4">
      <div className="custom-container-fluid">
        <div className="text-center relative mt-[50px]">
          <div
            href="#"
            onClick={router.back}
            className="flex items-center space-x-2 absolute left-0 top-0"
          >
            <Image src={BackButton} alt="backbtn" height={30} width={30} />
            <span className="text-base font-medium text-[#A6A6A6] ml-2">
              Go back
            </span>
          </div>
          <h2 className="font-bold text-3xl text-secondprimary mb-2">
            Edit Profile Details
          </h2>
          <p className="text-[18px] text-secondprimary font-medium">
            Update Profile details below.
          </p>
        </div>
        <ProfileCreationForm userId={userId} data={data} userRole={userRole} />
      </div>
    </div>
  );
};

export default EditProfileCreation;
