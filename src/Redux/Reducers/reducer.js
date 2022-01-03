const initTheme = { theme: false };
export const theme = (state = initTheme, action) => {
  if (action.type === "theme") {
    return (initTheme.theme = !initTheme.theme);
  }
  return initTheme.theme;
};

const initSlider = { data: [] };
export const sliderData = (state = initSlider, action) => {
  if (action.type === "sliderData") {
    return (initSlider.data = action.payload);
  }
  return initSlider.data;
};

const initProduct = { data: [] };
export const productDataReducer = (state, action) => {
  if (action.type === "product") {
    return (initProduct.data = action.payload);
  }

  return initProduct.data;
};

export const handelAddToCartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "AddToCart":
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);
      if (existItem) {
        return (state = {
          ...state,
          cartItems: [
            ...state.cartItems.map((x) => (x.id === existItem.id ? item : x)),
          ],
        });
      } else {
        return (state = { ...state, cartItems: [...state.cartItems, item] });
      }

    case "DeletFromCart":
      const itemId = action.payload;
      const LatestItems = state.cartItems.filter((el) => el.id !== itemId);
      return (state = { ...state, cartItems: [...LatestItems] });

    default:
      return state;
  }
};
