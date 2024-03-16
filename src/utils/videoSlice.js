import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:"video",
    initialState:{
       mute:true,
       count:0,
    },
    reducers:{
        unmuteAudio:(state,action) =>{
            state.mute= !state.mute
        },
        increaseCount:(state,action)=>{
            state.count= (++state.count)%20;
        }
    },

})
 export const {unmuteAudio,increaseCount} =videoSlice.actions;

export default videoSlice.reducer;