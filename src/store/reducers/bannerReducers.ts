import { sliderData } from "@/data";

// Define BannerAction as a union of action objects, where each action has a type and payload

export const initialState: BannerState = {
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
};

export function bannerReducer(
  state: BannerState,
  action: BannerAction
): BannerState {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_TRANSITION_DATA":
      return { ...state, transitionData: action.payload };
    case "SET_CURRENT_SLIDE_DATA":
      return { ...state, currentSlideData: action.payload };
    default:
      return state;
  }
}
