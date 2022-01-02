import { combineReducers } from "redux";

import {
  theme,
  sliderData,
  productDataReducer,
  handelAddToCartReducer,
} from "./reducer";

export const reducers = combineReducers({
  theme: theme,
  sliderData: sliderData,
  productData: productDataReducer,
  handelAddToCartReducer: handelAddToCartReducer,
});
