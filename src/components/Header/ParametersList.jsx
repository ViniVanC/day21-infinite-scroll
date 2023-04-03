import React from "react";

export const ParametersList = () => {
  const styleItemList =
    "flex cursor-pointer items-center gap-[20px] px-[20px] py-[10px] font-bold sm:hover:bg-white/5";
  return (
    <div
      className="absolute right-0 top-[100%] mt-[10px] min-w-[300px] rounded-2xl bg-black py-[10px] text-white"
      style={{
        boxShadow: "rgba(46, 60, 69, .3) 0px 10px 15px",
      }}
    >
      <div className="">
        <h2 className="mb-[5px] text-center text-[20px] font-bold">
          Ваші облікові записи
        </h2>
        <ul>
          <li className="flex cursor-pointer items-center gap-[20px] bg-white/5 px-[20px] py-[10px]">
            <img
              className="h-[75px] w-[75px] cursor-pointer overflow-hidden rounded-full object-cover"
              src="/images/img2.png"
              alt="user-img"
            />
            <h2 className="mb-[5px] text-center text-[18px] font-bold">User</h2>
          </li>
          <li className={`${styleItemList}`}>Додати обліковий запис</li>
          <li className={`${styleItemList}`}>
            Перейти на інший обліковий запис
          </li>
        </ul>
        <h2 className="my-[5px] text-center text-[20px] font-bold">
          Параметри
        </h2>
        <ul>
          <li className={`${styleItemList}`}>Налаштування</li>
          <li className={`${styleItemList}`}>Налаштувати стрічку</li>
          <li className={`${styleItemList}`}>Встановіть додаток</li>
          <li className={`${styleItemList}`}>Конфіденційність</li>
        </ul>
      </div>
    </div>
  );
};
