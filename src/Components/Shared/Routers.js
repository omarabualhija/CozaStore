import { Route, Routes } from "react-router";
import { ProductDetails } from "../../Screens/ProductDetails/ProductDetails";
import { Home } from "../../Screens/Home/Home";
import About from "../About/About";
import { Contact } from "../../Components/Contact/Contact";
import { ProductScreen } from "../../Screens/Product/ProductScreen";
import { CheckOut } from "../ChekOut/CheckOut";
export const AllRouters = () => {
  return (
    <Routes>
      <Route exact path="/CozaStore" element={<Home />}></Route>
      <Route exact path="/About" element={<About />}></Route>
      <Route path="/Shop" element={<ProductScreen></ProductScreen>}></Route>
      <Route path="/ProductDetails/:id" element={<ProductDetails />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/CheckOut" element={<CheckOut />}></Route>
    </Routes>
  );
};
