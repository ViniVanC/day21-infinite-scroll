import React, { useEffect, useState } from "react";
import { Container } from "../Container";
import { Logo } from "./Logo";
import { FaBell } from "react-icons/fa";
import { MessagesList } from "./MessagesList";
import { v4 } from "uuid";
import { ParametersList } from "./ParametersList";
import useMediaQuery from "../../hooks/useMediaQuery";

export const Header = () => {
  const [messages] = useState([
    {
      id: v4(),
      text: "Привіт, це сайт де я спробував реалізувати нескінченну прокрутку сторінки",
    },
  ]);
  const [user] = useState([
    {
      id: v4(),
      name: "User",
      srcUserImg: "/images/img2.png",
      active: true,
    },
    {
      id: v4(),
      name: "User1",
      srcUserImg: "/images/img4.jpg",
      active: false,
    },
  ]);
  const [isOpenMessagesWindow, setIsOpenMessagesWindow] = useState(false);
  const [isOpenParametersWindow, setIsOpenParametersWindow] = useState(false);
  const isAbove768Screens = useMediaQuery("(max-width:768px)");

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white">
      <Container>
        <div className="relative flex items-center justify-between py-[10px] max-sm:py-[5px]">
          <Logo size={isAbove768Screens ? 45 : 60} />
          <div className="flex items-center gap-[20px]">
            <div className="relative">
              {messages ? (
                <span className="absolute -right-[7px] -top-[7px] inline-block flex min-h-[20px] min-w-[20px] items-center justify-center rounded-full bg-orange p-[3px] text-[13px] leading-[100%] text-[#fff]">
                  {messages.length > 99 ? "+99" : messages.length}
                </span>
              ) : null}
              <FaBell
                className="cursor-pointer text-[30px]"
                onClick={() => {
                  setIsOpenMessagesWindow(!isOpenMessagesWindow);
                  setIsOpenParametersWindow(false);
                }}
              />
            </div>
            {isOpenMessagesWindow && <MessagesList messages={messages} />}
            <div className="flex items-center gap-[10px]">
              <img
                className="h-[40px] w-[40px] cursor-pointer overflow-hidden rounded-full border-[2px] border-solid border-black object-cover"
                src={user[0].srcUserImg}
                alt="user-img"
              />
              <div
                className="-mt-[7px] h-[12px] w-[12px] -rotate-45 cursor-pointer border-b-[3px] border-l-[3px] border-solid border-black"
                onClick={() => {
                  setIsOpenParametersWindow(!isOpenParametersWindow);
                  setIsOpenMessagesWindow(false);
                }}
              />
            </div>
            {isOpenParametersWindow && <ParametersList userInfo={user} />}
          </div>
        </div>
      </Container>
    </header>
  );
};
