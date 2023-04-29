import { create } from "zustand";
import positionCalculator from "./positionCalc";
import totalCalculator from "./totalCalc";


interface GameDataState {
  values: {
    adwaNumber: number;
    value: number;
    total: number;
    position: number;
  }[];
  addValues: (value: number) => void;
  resetValues: () => void;
  adwaNumber: number;
  setAdwaNumber: (value: number) => void;
}

const useGameDataStore = create<GameDataState>((set) => ({
  values: [],
  addValues: (value) =>
    set((state) => ({
      values: [
        ...state.values,
        {
          value,
          total: totalCalculator(state.adwaNumber, value),
          position: positionCalculator(state.adwaNumber, value),
          adwaNumber: state.adwaNumber,
        },
      ],
    })),
  resetValues: () =>
    set(() => ({
      values: [],
    })),
  adwaNumber: 0,
  setAdwaNumber: (num) => set(() => ({
    adwaNumber: num
  })),

}));

export default useGameDataStore;
