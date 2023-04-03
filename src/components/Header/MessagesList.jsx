import React from "react";

export const MessagesList = ({ messages }) => {
  return (
    <div
      className="absolute right-0 top-[100%] mt-[10px] min-w-[300px] max-w-[450px] rounded-2xl bg-black py-[10px] text-white"
      style={{
        boxShadow: "rgba(46, 60, 69, .3) 0px 10px 15px",
      }}
    >
      <h2 className="mb-[5px] text-center text-[20px] font-bold">
        Повідомлення
      </h2>
      <ul>
        {messages.map((message) => (
          <li
            key={message.id}
            className="cursor-pointer px-[20px] py-[10px] sm:hover:bg-white/5"
          >
            <p>{message.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
