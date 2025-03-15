"use client";
import React, { useCallback } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Progress from "@/components/Progress";
import { useDispatch, useSelector } from "@/store/store";
import { sliderData } from "@/data";

const Controls = () => {
  const { currentSlideData, data, transitionData } = useSelector(
    (state) => state.banner
  );

  const dispatch = useDispatch();
  const handlePrev = useCallback(() => {
    if (data.length === 0) return;

    const newTransitionData = data[data.length - 1];
    dispatch({
      type: "SET_DATA",
      payload: [transitionData, ...data.slice(0, data.length - 1)],
    });

    dispatch({
      type: "SET_TRANSITION_DATA",
      payload: newTransitionData,
    });

    dispatch({
      type: "SET_CURRENT_SLIDE_DATA",
      payload: {
        data: newTransitionData,
        index: sliderData.findIndex((ele) => ele.img === newTransitionData.img),
      },
    });
  }, [data, transitionData, dispatch]);

  const handleNext = useCallback(() => {
    if (data.length === 0) return;

    const newTransitionData = data[0];

    // Remove first element from `data`
    const newData = data.slice(1);

    dispatch({ type: "SET_DATA", payload: newData });
    dispatch({ type: "SET_TRANSITION_DATA", payload: newTransitionData });
    dispatch({
      type: "SET_CURRENT_SLIDE_DATA",
      payload: {
        data: newTransitionData,
        index: sliderData.findIndex((ele) => ele.img === newTransitionData.img),
      },
    });

    setTimeout(() => {
      dispatch({
        type: "SET_DATA",
        payload: [...newData, transitionData], // Append newTransitionData
      });
    }, 50);
  }, [data, dispatch, transitionData]);

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
