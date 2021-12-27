import {combineReducers} from "redux"

import {theme,sliderData,productDataReducer} from "./reducer"


export const reducers=combineReducers({theme:theme,sliderData:sliderData,productData:productDataReducer})