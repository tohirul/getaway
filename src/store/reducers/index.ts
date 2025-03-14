import { bannerReducer } from "./bannerReducers";

export const rootReducer = (
  state: BannerReducerState,
  action: BannerAction
) => {
  return {
    banner: bannerReducer(state.banner, action),
  };
};
