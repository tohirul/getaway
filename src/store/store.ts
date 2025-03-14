import { createContext, Dispatch, useContext } from "react";

interface StoreContextType {
  getValue: <T>(callback: (state: { banner: BannerState }) => T) => T;
  dispatch: React.Dispatch<BannerAction>;
}

export const StoreContext = createContext<StoreContextType | undefined>(
  undefined
);

// Custom hook to use the store
export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

export const useSelector = <T>(
  callback: (state: { banner: BannerState }) => T
): T => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useSelector must be used within a StoreProvider");
  }
  return context.getValue(callback);
};

export const useDispatch = (): Dispatch<BannerAction> => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useDispatch must be used within a StoreProvider");
  }
  return context.dispatch;
};
