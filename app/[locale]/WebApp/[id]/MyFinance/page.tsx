import React from "react";
import Image from "next/image";
import TitlePage from "@/components/TitlePage/TitlePage";
import backgroundImage from "@/public/assets/images/bg-gradient.svg";
import ChooseButton from "./components/ChooseMoneyButton/ChooseMoneyButton";
import ActionButton from "./components/ActionButton";

const MyFinance = () => (
  <main className="w-[76%]  flex flex-col relative bg-[#f9f9f9]">
    <div className="absolute w-full top-0 right-0 z-[0]">
      <Image src={backgroundImage} width={1520} height={1080} alt={""}></Image>
    </div>

    <section className="flex w-full z-[1] mt-[80px] transition-all duration-1000 overflow-x-hidden pr-[1%]">
      <TitlePage option={"finance"}></TitlePage>
    </section>

    <section className="flex w-full min-h-[16%] z-[1] mt-[1%] pr-4 gap-x-2">
      <div className="w-[80%] h-full bg-white rounded-[12px] items-center gap-x-2 flex px-14 justify-center">
        <ChooseButton type="salary" label="Для ЗП" amount={79000} />
        <ChooseButton type="safe" label="Сейф" amount={79000} />
        <ChooseButton type="cashless" label="Безналичная" amount={79000} />
        <ChooseButton type="cash" label="Наличная" amount={79000} />
      </div>

      <div className="w-[25%] h-full flex gap-x-2 ">
        <div className="w-1/2 h-full flex flex-col gap-y-2">
          <ActionButton
            option={"Добавить приход"}
            id={1}
            color={"blue"}
          ></ActionButton>
          <ActionButton
            option={"Добавить расход"}
            id={2}
            color={"blue"}
          ></ActionButton>
        </div>
        <div className="w-1/2 h-full flex flex-col gap-y-2">
          <ActionButton
            option={"Создать отчет"}
            id={3}
            color={"black"}
          ></ActionButton>
          <ActionButton
            option={"Перемещение"}
            id={4}
            color={"black"}
          ></ActionButton>
        </div>
      </div>
    </section>

    <section className="flex w-full min-h-[50%] z-[1] mt-[1%]">
      {/* <StatsContainer></StatsContainer> */}
    </section>
  </main>
)

export default MyFinance;
