import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:"video",
    initialState:{
       mute:true,
    },
    reducers:{
        unmuteAudio:(state,action) =>{
            state.mute= !state.mute
        }
    },

})
 export const {unmuteAudio} =videoSlice.actions;

export default videoSlice.reducer;