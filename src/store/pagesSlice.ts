// src/store/pagesSlice.ts

import { fetchPages } from '@/services/api';
import { createSlice } from '@reduxjs/toolkit';

const initialState: PagesState = {
  pages: [],
  loading: false,
  loaded: false,
  error: null,
};

const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPages.pending, (state) => {
        state.loading = true;
        state.loaded = true;
        state.error = null;
      })
      .addCase(fetchPages.fulfilled, (state, action) => {
        state.loading = false;
        state.pages = action.payload;
      })
      .addCase(fetchPages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch pages';
      });
  },
});

export default pagesSlice.reducer;
