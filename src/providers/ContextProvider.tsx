"use client";

import { sliderData } from "@/data";
import { rootReducer } from "@/store/reducers";
import { StoreContext } from "@/store/store";
import React, { useMemo, useReducer } from "react";

const initialState = {
  banner: {
    data: sliderData.slice(1),
    transitionData: sliderData[0] ?? {
      img: "",
      title: "",
      description: "",
      location: "",
    },
    currentSlideData: {
      data: sliderData[0] ?? {
        img: "",
        title: "",
        description: "",
        location: "",
      },
      index: 0,
    },
  },
};

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const getValue = useMemo(() => {
    return <T,>(callback: (state: { banner: BannerState }) => T): T => {
      return callback(state);
    };
  }, [state]);
  return (
    <StoreContext.Provider value={{ getValue, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}
