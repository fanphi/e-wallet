import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user/getUser", async () => {
  // return fetch("https://randomuser.me/api/").then((res) =>
  //   res.json()
  // );
  return fetch(`https://randomuser.me/api/`)
  .then((response) => response.json())
  .then((data) => data.results[0].name);
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    // user: null,
    status: "No data",
    user: {
      first: null,
      last: null,
    },
      cards: [
      {
        vendor: "VISA",
        // cardNumber: "1234567891011121".match(/.{1.4}/g).join(""),
        cardNumber: "1234567891011121",
        expireMonth: "12",
        expireYear: "3",
        ccv: "111",
        activated: true
      }
    ]
  },
  reducers: {
    addCard: (state, {payload})=>{
      state.cards.push(payload);
      console.log(payload)
      console.log()
    }
    //actions
    //addcard delete activate
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
export const { addCard } = userSlice.actions;

export default userSlice.reducer;

