import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  product: null,
  status: 'idle', // or 'loading', 'succeeded', 'failed'
  error: null
};

// Define the thunk action
export const fetchProductById = createAsyncThunk(
  'products/fetchById',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      return response.data;
    } catch (error) {
      // Handle fetch error
      return rejectWithValue(error.message);
    }
  }
);

// Define the slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
        state.error = null; // Clear previous errors
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
        state.error = null; // Reset error state on successful fetch
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; // action.payload contains error message
      });
  }
});

export default productsSlice.reducer;