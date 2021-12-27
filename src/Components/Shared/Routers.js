import { Route, Routes } from "react-router";
import { ProductDetails } from "../../Screens/ProductDetails/ProductDetails";
import { Home } from "../../Screens/Home/Home";
import { About } from "../../Screens/About/About";

export const AllRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" elemnt={<About />}></Route>
      <Route path="/Shop"></Route>
      <Route path="ProductDetails/:id" element={<ProductDetails />}></Route>
      <Route path="/Contact"></Route>
    </Routes>
  );
};
