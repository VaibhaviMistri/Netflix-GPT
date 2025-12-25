import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    movieNames: [],
    movieResults: [],
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovies: (state, action) => {
      state.movieNames = action.payload.movieNames;
      state.movieResults = action.payload.movieResults;
    },
    clearGPTMovies: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});
export const { toggleGPTSearchView, addGPTMovies, clearGPTMovies } = gptSlice.actions;
export default gptSlice.reducer;