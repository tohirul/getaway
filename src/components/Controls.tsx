import React, { useCallback } from "react";
import { CurrentSlideData, Data } from "@/app/page";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Progress from "@/components/Progress";

interface Props {
  currentSlideData: CurrentSlideData;
  data: Data[];
  transitionData: Data;
  handleData: React.Dispatch<React.SetStateAction<Data[]>>;
  handleTransitionData: React.Dispatch<React.SetStateAction<Data>>;
  handleCurrentSlideData: React.Dispatch<
    React.SetStateAction<CurrentSlideData>
  >;
  sliderData: Data[];
}

const Controls = ({
  currentSlideData,
  data,
  transitionData,
  handleCurrentSlideData,
  handleData,
  handleTransitionData,
  sliderData,
}: Props) => {
  const handlePrev = useCallback(() => {
    if (data.length === 0) return;

    const newTransitionData = data[data.length - 1];
    handleData((prevData) => [
      transitionData,
      ...prevData.slice(0, prevData.length - 1),
    ]);
    handleTransitionData(newTransitionData);

    handleCurrentSlideData({
      data: newTransitionData,
      index: sliderData.findIndex((ele) => ele.img === newTransitionData.img),
    });
  }, [
    data,
    transitionData,
    handleData,
    handleTransitionData,
    handleCurrentSlideData,
    sliderData,
  ]);

  const handleNext = useCallback(() => {
    if (data.length === 0) return;

    const newTransitionData = data[0];
    handleData((prevData) => prevData.slice(1));
    handleTransitionData(newTransitionData);

    handleCurrentSlideData({
      data: newTransitionData,
      index: sliderData.findIndex((ele) => ele.img === newTransitionData.img),
    });

    setTimeout(() => {
      handleData((newData) => [...newData, transitionData]);
    }, 1000);
  }, [
    data,
    transitionData,
    handleData,
    handleTransitionData,
    handleCurrentSlideData,
    sliderData,
  ]);

  return (
    <div className="flex items-center gap-3 px-0 py-3 md:px-1 md:py-5">
      <SliderButton handleClick={handlePrev}>
        <IoIosArrowBack className="text-xl" />
      </SliderButton>
      <SliderButton handleClick={handleNext}>
        <IoIosArrowForward className="text-xl" />
      </SliderButton>
      <Progress
        currentIndex={currentSlideData.index}
        length={sliderData.length}
      />
    </div>
  );
};

export default Controls;

const SliderButton = ({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) => {
  return (
    <button
      className="flex h-14 w-14 items-center justify-center rounded-full border border-[#fdfdfd5f] transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
