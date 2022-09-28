import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user/getUser", async () => {
  // return fetch("https://randomuser.me/api/").then((res) =>
  //   res.json()
  // );
  return fetch(`https://randomuser.me/api/`)
  .then((response) => response.json())
  .then((data) => data.results[0]);
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: "No data",
    // cardInformation: [
    //   {
    //     cardName: "",
    //     cardNumber: "1234567891011121",
    //     expireMonth: "12",
    //     expireYear: "3",
    //     ccv: "111",
    //     vendor: "Visa",
    //     activated: false
    //   }
    // ]
  },
  reducers: {
    //actions
  },
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      // const [{name:{first, last}}] = action.payload.results;
      // const { first, last } = action.payload.name;
      // console.log(first + " " + last)
      state.user = action.payload.name;
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

export default userSlice.reducer;

