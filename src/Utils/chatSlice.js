import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./Constants";


const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessages: (state, action) => {
           if(state.messages.length == LIVE_CHAT_COUNT) state.messages.shift();
           state.messages.push(action.payload);
        }
    }
});

export const {addMessages} = chatSlice.actions;
export default chatSlice.reducer;