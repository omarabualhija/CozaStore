import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAIL,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
} from "../Constant/Constant";

export const themeAction = () => {
  return {
    type: "theme",
  };
};

export const listProductAction = (filter, limit = 4) => {
  return async (dispatch) => {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    if (filter) {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/category/${filter}?limit=${limit}`
        );
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
      }
    } else {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products?limit=${limit}`
        );
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
      }
    }
  };
};

export const getProductWithIdAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: SINGLE_PRODUCT_REQUEST });
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SINGLE_PRODUCT_FAIL, payload: error });
    }
  };
};

export const addToCart = (option) => {
  return async (dispatch) => {
    dispatch({ type: ADD_TO_CART_REQUEST });
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${option.id}`
      );
      dispatch({
        type: ADD_TO_CART_SUCCESS,
        payload: {
          id: option.id,
          Color: option.Color,
          Size: option.Size,
          qnt: option.qnt,
          price: data.price,
          img: data.image,
          title: data.title,
        },
      });
    } catch (error) {
      dispatch({ type: ADD_TO_CART_FAIL, payload: error });
    }
  };
};
