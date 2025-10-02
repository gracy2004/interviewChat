import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  score: number;
  summary: string;
}

interface CandidatesState {
  list: Candidate[];
  interviewStarted: boolean;
  interviewFinished: boolean;
}

const initialState: CandidatesState = {
  list: [],
  interviewStarted: false,
  interviewFinished: false,
};

const candidatesSlice = createSlice({
  name: "candidates",
  initialState,
  reducers: {
    addCandidate: (state, action: PayloadAction<Candidate>) => {
      state.list.push(action.payload);
      state.interviewStarted = true;
      state.interviewFinished = true;
    },
    startInterview: (state) => {
      state.interviewStarted = true;
      state.interviewFinished = false;
    },
  },
});

export const { addCandidate, startInterview } = candidatesSlice.actions;
export default candidatesSlice.reducer;
