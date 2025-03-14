type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

type CurrentSlideData = {
  data: Data;
  index: number;
};

type BannerState = {
  data: Data[];
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

type BannerAction =
  | { type: "SET_DATA"; payload: Data[] }
  | { type: "SET_TRANSITION_DATA"; payload: Data }
  | { type: "SET_CURRENT_SLIDE_DATA"; payload: CurrentSlideData };

type BannerReducerState = {
  banner: BannerState;
};
