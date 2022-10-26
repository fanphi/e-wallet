import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user/getUser", async () => {
  return fetch(`https://randomuser.me/api/`)
    .then((response) => response.json())
    .then((data) => data.results[0].name);
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "No data",
    user: {
      first: null,
      last: null,
    },
    cards: [
      {
        vendor: "VISA",
        cardNumber: "1234567891011121",
        expireMonth: "12",
        expireYear: "22",
        ccv: "111",
        activated: true,
        id: Math.random(),
      },
    ],
  },
  reducers: {
    addCard: (state, { payload }) => {
      state.cards.push(payload);
    },

    deleteCard: (state, { payload }) => {
      state.cards = state.cards.filter(({ id }) => id !== payload.id);
    },

    changeActiveCard: (state, { payload }) => {
      state.cards.find(({ activated }) => activated).activated = false;

      state.cards.find(({ id }) => id === payload.id).activated = true;
    },
  },
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.user.first = action.payload.first;
      state.user.last = action.payload.last;
      state.status = "Found data!";
    },
    [getUser.pending]: (state, action) => {
      state.status = "Loading data...";
    },
    [getUser.rejected]: (state, action) => {
      state.status = "Failed to get data";
    },
  },
});
export const { addCard, deleteCard, changeActiveCard } = userSlice.actions;

export default userSlice.reducer;
