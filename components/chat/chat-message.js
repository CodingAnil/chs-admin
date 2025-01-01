import EmojiIcon from "@/icons/emoji-icon";
import SendIcon from "@/icons/send-icon";
import VerticalDots from "@/icons/vertical-dots";
import { MdKeyboardVoice } from "react-icons/md";
import ProfilePic from "@/images/chat/chat-profile-icon.png";
import Image from "next/image";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import ThreeDot from "@/icons/threedot.svg";
import { useState } from "react";
import SuspendAccountModal from "../modal/suspend-account-modal";
const ChatMessage = ({
  IsOpenRequested,
  closeRequested,
  onEditRequested,
  IsEditRequested,
}) => {
  const [isBlockSuspendOpen, setIsBlockSuspendOpen] = useState(false);
  const openSuspendModal = () => {
    setIsBlockSuspendOpen(true);
  };
  const closeSuspendModal = () => {
    setIsBlockSuspendOpen(false);
  };

  return (
    <div className="block w-full relative">
      <div className="bg-[#212b36] w-full px-4 md:-8 py-2.5">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-start">
            <div className="relative mr-[8px]">
              <Image
                width={70}
                height={70}
                src={ProfilePic}
                alt="icon"
                className="rounded-full w-11 h-11 object-cover border border-primary"
              />
              <span
                className={`bg-primary border border-solid border-[#212b36]  rounded-full w-[10px] h-[10px] absolute bottom-1 right-0`}
              ></span>
            </div>
            <div>
              <h3 className="text-white font-medium text-base">Grace Miller</h3>
              <h5 className="text-sm font-normal text-primary">Online</h5>
            </div>
          </div>

          <Dropdown
            placement="bottom-end"
            showArrow
            classNames={{
              base: "before:bg-[#1a1d22]  before:w-[12px] before:h-[12px] before:border-t-[1px] before:border-l-[1px] before:border-[#353535] before:z-[999] before:rotate-45",
              content:
                "py-1 px-1 p-1.5 rounded-[8px] min-w-[85px] bg-[#1D2026] border border-[#3D4044]",
            }}
          >
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="min-w-0 flex justify-center shadow-none outline-none bg-transparent border-none cursor-pointer ring-0"
              >
                <VerticalDots />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              variant="faded"
              itemClasses={{
                base: [
                  "ring-0",
                  "border-none",
                  "rounded-md",
                  "text-white",
                  "transition-opacity",
                  "data-[hover=true]:text-white",
                  "data-[hover=true]:bg-transparent",
                  "dark:data-[hover=true]:bg-transparent",
                  "data-[selectable=true]:focus:bg-transparent",
                  "data-[pressed=true]:opacity-1",
                  "data-[focus-visible=true]:ring-default-500",
                ],
              }}
            >
              <DropdownItem onClick={openSuspendModal} className="pl-0">
                Suspend
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      {IsOpenRequested && (
        <ChatRequested
          EditRequested={IsEditRequested}
          closeRequested={closeRequested}
          onEditRequested={onEditRequested}
        />
      )}
      {/* chat message start */}
      <div className="block">
        <div className="block min-h-[calc(100vh-257px)] pt-3 px-3 pb-3">
          <div className="h-[calc(100vh-296px)] overflow-y-auto list-scrollbar ps-0 pe-3 md:px-6 pb-3 flex flex-col gap-5">
            {/* outer message start */}
            <div className="flex items-start justify-end w-full">
              <div className="flex items-start justify-end max-w-2xl">
                <div>
                  <div className="mb-[10px] flex items-center justify-end">
                    <span className="text-[#a0a0a0] text-[12px] font-normal ">
                      10:30 AM
                    </span>
                    <h5 className="text-base font-medium text-[#585858] ml-3">
                      Jack Raymonds
                    </h5>
                  </div>
                  <div className="bg-[#FFF3D4] py-3 px-[18px] rounded-tl-[14px] rounded-tr-none rounded-bl-[14px] rounded-br-[14px] text-secondaryShade2 text-base font-normal">
                    I know, right? Weekend plans are the best. Any exciting
                    plans on your end?
                  </div>
                </div>
                <div className="ml-3">
                  {" "}
                  <Image
                    width={70}
                    height={70}
                    src={ProfilePic}
                    alt="icon"
                    className="rounded-full min-w-11 w-11 h-11 object-cover border border-[#d9d9d9]"
                  />
                </div>
              </div>
            </div>
            {/* inner message start */}
            <div className="flex items-start justify-start w-full">
              <div className="flex items-start justify-start max-w-2xl">
                <div className="mr-3">
                  {" "}
                  <Image
                    width={70}
                    height={70}
                    src={ProfilePic}
                    alt="icon"
                    className="rounded-full min-w-11 w-11 h-11 object-cover  border border-[#d9d9d9]"
                  />
                </div>
                <div>
                  <div className="mb-[10px] flex items-center justify-start">
                    <h5 className="text-base font-medium text-[#585858] mr-3">
                      Jack Raymonds
                    </h5>
                    <span className="text-[#a0a0a0] text-[12px] font-normal ">
                      10:30 AM
                    </span>
                  </div>
                  <div className="bg-[#1a1d22] py-3 px-[18px] border border-[#323232] rounded-tl-none rounded-tr-[14px] rounded-bl-[14px] rounded-br-[14px] text-white text-base font-normal">
                    I know, right? Weekend plans are the best. Any exciting
                    plans on your end?
                  </div>
                </div>
              </div>
            </div>
            {/* outer message start */}
            <div className="flex items-start justify-end w-full">
              <div className="flex items-start justify-end max-w-2xl">
                <div>
                  <div className="mb-[10px] flex items-center justify-end">
                    <span className="text-[#a0a0a0] text-[12px] font-normal ">
                      10:30 AM
                    </span>
                    <h5 className="text-base font-medium text-[#585858] ml-3">
                      Jack Raymonds
                    </h5>
                  </div>
                  <div className="bg-[#FFF3D4] py-3 px-[18px] rounded-tl-[14px] rounded-tr-none rounded-bl-[14px] rounded-br-[14px] text-secondaryShade2 text-base font-normal">
                    I know, right? Weekend plans are the best. Any exciting
                    plans on your end?
                  </div>
                </div>
                <div className="ml-3">
                  {" "}
                  <Image
                    width={70}
                    height={70}
                    src={ProfilePic}
                    alt="icon"
                    className="rounded-full min-w-11 w-11 h-11 object-cover border border-[#d9d9d9]"
                  />
                </div>
              </div>
            </div>
            {/* inner message start */}
            <div className="flex items-start justify-start w-full">
              <div className="flex items-start justify-start max-w-2xl">
                <div className="mr-3">
                  {" "}
                  <Image
                    width={70}
                    height={70}
                    src={ProfilePic}
                    alt="icon"
                    className="rounded-full min-w-11 w-11 h-11 object-cover  border border-[#d9d9d9]"
                  />
                </div>
                <div>
                  <div className="mb-[10px] flex items-center justify-start">
                    <h5 className="text-base font-medium text-[#585858] mr-3">
                      Jack Raymonds
                    </h5>
                    <span className="text-[#a0a0a0] text-[12px] font-normal ">
                      10:30 AM
                    </span>
                  </div>
                  <div className="bg-[#1a1d22] py-3 px-[18px] border border-[#323232] rounded-tl-none rounded-tr-[14px] rounded-bl-[14px] rounded-br-[14px] text-white text-base font-normal">
                    Absolutely! I'm thinking of going for a hike on Saturday.
                    How about you?
                  </div>
                </div>
              </div>
            </div>
            {/* outer message start */}
            <div className="flex items-start justify-end w-full">
              <div className="flex items-start justify-end max-w-2xl">
                <div>
                  <div className="mb-[10px] flex items-center justify-end">
                    <span className="text-[#a0a0a0] text-[12px] font-normal ">
                      10:30 AM
                    </span>
                    <h5 className="text-base font-medium text-[#585858] ml-3">
                      Jack Raymonds
                    </h5>
                  </div>
                  <div className="bg-[#FFF3D4] py-3 px-[18px] rounded-tl-[14px] rounded-tr-none rounded-bl-[14px] rounded-br-[14px] text-secondaryShade2 text-base font-normal">
                    I know, right? Weekend plans are the best. Any exciting
                    plans on your end?
                  </div>
                </div>
                <div className="ml-3">
                  {" "}
                  <Image
                    width={70}
                    height={70}
                    src={ProfilePic}
                    alt="icon"
                    className="rounded-full min-w-11 w-11 h-11 object-cover border border-[#d9d9d9]"
                  />
                </div>
              </div>
            </div>
            {/* inner message start */}
            <div className="flex items-start justify-start w-full">
              <div className="flex items-start justify-start max-w-2xl">
                <div className="mr-3">
                  {" "}
                  <Image
                    width={70}
                    height={70}
                    src={ProfilePic}
                    alt="icon"
                    className="rounded-full min-w-11 w-11 h-11 object-cover  border border-[#d9d9d9]"
                  />
                </div>
                <div>
                  <div className="mb-[10px] flex items-center justify-start">
                    <h5 className="text-base font-medium text-[#585858] mr-3">
                      Jack Raymonds
                    </h5>
                    <span className="text-[#a0a0a0] text-[12px] font-normal ">
                      10:30 AM
                    </span>
                  </div>
                  <div className="bg-[#1a1d22] py-3 px-[18px] border border-[#323232] rounded-tl-none rounded-tr-[14px] rounded-bl-[14px] rounded-br-[14px] text-white text-base font-normal">
                    That sounds like a great plan! Excited 😃
                  </div>
                </div>
              </div>
            </div>
            {/* outer message start */}
            <div className="flex items-start justify-end w-full">
              <div className="flex items-start justify-end max-w-2xl">
                <div>
                  <div className="mb-[10px] flex items-center justify-end">
                    <span className="text-[#a0a0a0] text-[12px] font-normal ">
                      10:30 AM
                    </span>
                    <h5 className="text-base font-medium text-[#585858] ml-3">
                      Jack Raymonds
                    </h5>
                  </div>
                  <div className="bg-[#FFF3D4] py-3 px-[18px] rounded-tl-[14px] rounded-tr-none rounded-bl-[14px] rounded-br-[14px] text-secondaryShade2 text-base font-normal">
                    I know, right? Weekend plans are the best. Any exciting
                    plans on your end?
                  </div>
                </div>
                <div className="ml-3">
                  {" "}
                  <Image
                    width={70}
                    height={70}
                    src={ProfilePic}
                    alt="icon"
                    className="rounded-full min-w-11 w-11 h-11 object-cover border border-[#d9d9d9]"
                  />
                </div>
              </div>
            </div>
            {/* inner message start */}
            <div className="flex items-start justify-start w-full">
              <div className="flex items-start justify-start max-w-2xl">
                <div className="mr-3">
                  {" "}
                  <Image
                    width={70}
                    height={70}
                    src={ProfilePic}
                    alt="icon"
                    className="rounded-full min-w-11 w-11 h-11 object-cover  border border-[#d9d9d9]"
                  />
                </div>
                <div>
                  <div className="mb-[10px] flex items-center justify-start">
                    <h5 className="text-base font-medium text-[#585858] mr-3">
                      Jack Raymonds
                    </h5>
                    <span className="text-[#a0a0a0] text-[12px] font-normal ">
                      10:30 AM
                    </span>
                  </div>
                  <div className="bg-[#1a1d22] py-3 px-[18px] border border-[#323232] rounded-tl-none rounded-tr-[14px] rounded-bl-[14px] rounded-br-[14px] text-white text-base font-normal">
                    I know, right? Weekend plans are the best. Any exciting
                    plans on your end?
                  </div>
                </div>
              </div>
            </div>
            {/* outer message start */}
            <div className="flex items-start justify-end w-full">
              <div className="flex items-start justify-end max-w-2xl">
                <div>
                  <div className="mb-[10px] flex items-center justify-end">
                    <span className="text-[#a0a0a0] text-[12px] font-normal ">
                      10:30 AM
                    </span>
                    <h5 className="text-base font-medium text-[#585858] ml-3">
                      Jack Raymonds
                    </h5>
                  </div>
                  <div className="bg-[#FFF3D4] py-3 px-[18px] rounded-tl-[14px] rounded-tr-none rounded-bl-[14px] rounded-br-[14px] text-secondaryShade2 text-base font-normal">
                    I know, right? Weekend plans are the best. Any exciting
                    plans on your end?
                  </div>
                </div>
                <div className="ml-3">
                  {" "}
                  <Image
                    width={70}
                    height={70}
                    src={ProfilePic}
                    alt="icon"
                    className="rounded-full min-w-11 w-11 h-11 object-cover border border-[#d9d9d9]"
                  />
                </div>
              </div>
            </div>
            {/* inner message start */}
            <div className="flex items-start justify-start w-full">
              <div className="flex items-start justify-start max-w-2xl">
                <div className="mr-3">
                  {" "}
                  <Image
                    width={70}
                    height={70}
                    src={ProfilePic}
                    alt="icon"
                    className="rounded-full min-w-11 w-11 h-11 object-cover  border border-[#d9d9d9]"
                  />
                </div>
                <div>
                  <div className="mb-[10px] flex items-center justify-start">
                    <h5 className="text-base font-medium text-[#585858] mr-3">
                      Jack Raymonds
                    </h5>
                    <span className="text-[#a0a0a0] text-[12px] font-normal ">
                      10:30 AM
                    </span>
                  </div>
                  <div className="bg-[#1a1d22] py-3 px-[18px] border border-[#323232] rounded-tl-none rounded-tr-[14px] rounded-bl-[14px] rounded-br-[14px] text-white text-base font-normal">
                    I know, right? Weekend plans are the best. Any exciting
                    plans on your end?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1A1D22] border-y-1 border-solid border-[#303030] p-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-start  w-full">
              <button className="mr-[15px]">
                <EmojiIcon />
              </button>
              <input
                type="text"
                placeholder="Type message..."
                className="block h-7 border-0 bg-transparent outline-0 text-white text-sm placeholder:text-white w-full"
              />
            </div>
            <div className="flex items-center justify-end gap-4 ml-5">
              <button className="text-[#A0A0A0] text-2xl">
                <MdKeyboardVoice />
              </button>
              <button>
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <SuspendAccountModal
        isOpen={isBlockSuspendOpen}
        onClose={closeSuspendModal}
      />
    </div>
  );
};
export default ChatMessage;
