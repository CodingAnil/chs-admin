import { Input } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import ProfilePic from "@/images/chat/chat-profile-icon.png";
import Image from "next/image";
import DoubleCheckIcon from "@/icons/double-check-icon";
import { useState } from "react";
import { chats } from "../../utils/constants";

const ChatList = ({ openModal }) => {
  const [activeChatId, setActiveChatId] = useState(null);
  const handleChatClick = (chatId) => {
    setActiveChatId(chatId);
  };
  return (
    <>
      <div className="block w-full md:w-[370px] pt-2 border-r-1 border-[#343436] pr-1">
        <h2 className="text-2xl text-[#212b36] font-medium px-3 md:px-7 mb-4">
          Chat
        </h2>
        <div className="px-3 md:px-7 mb-1 w-full">
          <Input
            classNames={{
              base: "max-w-full w-full h-10 chat-search-input",
              mainWrapper: "h-full",
              input: "text-small  text-white",
              inputWrapper:
                "h-full font-normal text-white bg-[#212b36] focus:bg-[#212b36]",
            }}
            placeholder="Search"
            size="sm"
            startContent={<FiSearch size={18} className="text-white" />}
            type="search"
          />
        </div>
        <div className="block h-[300px] md:h-[calc(100vh-256px)] overflow-y-auto list-scrollbar">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleChatClick(chat.id)}
              className={`flex justify-between items-center px-3 md:px-7 py-2 md:py-4 group cursor-pointer ${
                activeChatId === chat.id ? "bg-primary" : ""
              }`}
            >
              <div className="flex items-center justify-start">
                <div className="relative mr-3">
                  <Image
                    src={ProfilePic}
                    alt="chat-icon"
                    width={36}
                    height={36}
                  />
                  <span
                    className={`bg-[#27AE60] border border-solid border-[#1D2026] group-hover:border-primary rounded-full w-[8px] h-[8px] absolute bottom-0 right-0 ${
                      activeChatId === chat.id ? "border-primary" : ""
                    }`}
                  ></span>
                </div>
                <div>
                  <h3
                    className={`font-medium text-sm text-[#212b36]   ${
                      activeChatId === chat.id ? "text-white" : ""
                    }`}
                  >
                    {chat.name}
                  </h3>
                  <h5
                    className={`font-normal text-sm text-[#707078] group-hover:[#707078]  ${
                      activeChatId === chat.id ? "text-white" : ""
                    }`}
                  >
                    {chat.chatMessages}
                  </h5>
                </div>
              </div>
              <div className="ml-2 space-y-2 flex justify-end items-end flex-col">
                <span className="text-[12px] text-white font-normal">
                  {chat.time}
                </span>
                {chat.messages > 0 ? (
                  <span
                    className={`w-[14px] h-[14px] rounded-full group-hover:bg-white group-hover:text-primary font-medium  text-[10px] bg-primary text-center ${
                      activeChatId === chat.id
                        ? "bg-white text-primary"
                        : "text-white"
                    }`}
                  >
                    {chat.messages}
                  </span>
                ) : (
                  <span
                    className={`group-hover:fill-white  ${
                      activeChatId === chat.id ? "stroke-white" : ""
                    }`}
                  >
                    <DoubleCheckIcon />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ChatList;
