export const themeAction = () => {
  return {
    type: "theme",
  };
};

export const sliderAction = (data) => {
  return {
    type: "sliderData",
    payload: data,
  };
};

export const productAction = (data) => {
  return {
    type: "product",
    payload: data,
  };
};

export const handelAddToCartAction = (data) => {
  return {
    type: "AddToCart",
    payload: data,
  };
};

export const handelremoveFromCartAction = (data) => {
  return {
    type: "DeletFromCart",
    payload: data,
  };
};
