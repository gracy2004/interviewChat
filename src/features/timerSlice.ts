import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TimerState {
  currentTime: number;
  isRunning: boolean;
}

const initialState: TimerState = {
  currentTime: 0,
  isRunning: false
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimer: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
      state.isRunning = true;
    },
    stopTimer: (state) => {
      state.isRunning = false;
    },
    resetTimer: (state) => {
      state.currentTime = 0;
      state.isRunning = false;
    }
  }
});

export const { startTimer, stopTimer, resetTimer } = timerSlice.actions;
export default timerSlice.reducer;
