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
}

const initialState: CandidatesState = {
  list: [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      phone: "+911234567890",
      score: 85,
      summary: "Good understanding of React and Node.",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+911234567891",
      score: 92,
      summary: "Excellent problem-solving skills.",
    },
  ],
};

const candidatesSlice = createSlice({
  name: "candidates",
  initialState,
  reducers: {
    addCandidate: (state, action: PayloadAction<Candidate>) => {
      state.list.push(action.payload);
    },
  },
});

export const { addCandidate } = candidatesSlice.actions;
export default candidatesSlice.reducer;
