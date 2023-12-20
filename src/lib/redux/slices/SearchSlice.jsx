import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchTerm: '',
    searchResults: [],
    suggestions: [],
}

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchTerm(state, action) {
        state.searchTerm = action.payload;
    },
    updateSearchResults(state, action) {
        state.searchResults = action.payload;
    },
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    }
  }
});

export const {updateSearchTerm, updateSearchResults, setSuggestions } = SearchSlice.actions

export default SearchSlice.reducer