import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a slice (handles state and actions together)
const sharedStateSlice = createSlice({
  name: "sharedState",
  initialState: { value: "Hello from Redux!" },
  reducers: {
    updateState: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Export the actions
export const { updateState } = sharedStateSlice.actions;

// Configure the Redux store
const store = configureStore({
  reducer: {
    sharedState: sharedStateSlice.reducer,
  },
});

export default store;