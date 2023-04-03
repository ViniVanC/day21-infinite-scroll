import React, { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

const DbContext = createContext();
export const useDb = () => useContext(DbContext);

export const DbProvider = ({ children }) => {
  const [messages] = useState([
    {
      id: v4(),
      text: "Привіт, це сайт де я спробував реалізувати нескінченну прокрутку сторінки",
    },
  ]);
  const [user] = useState([
    {
      id: v4(),
      name: "Vincent Van",
      srcUserImg: "/images/img2.png",
      active: true,
    },
    {
      id: v4(),
      name: "Jane Ohara",
      srcUserImg: "/images/img4.jpg",
      active: false,
    },
  ]);
  const [isOpenMessagesWindow, setIsOpenMessagesWindow] = useState(false);
  const [isOpenParametersWindow, setIsOpenParametersWindow] = useState(false);

  return (
    <DbContext.Provider
      value={{
        messages,
        user,
        isOpenMessagesWindow,
        setIsOpenMessagesWindow,
        isOpenParametersWindow,
        setIsOpenParametersWindow,
      }}
    >
      {children}
    </DbContext.Provider>
  );
};
