import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import videoReducer from "./videoSlice";


const appStore= configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
            gpt:gptReducer,
            config:configReducer,
            video:videoReducer,
        }
    },
)

export default appStore;