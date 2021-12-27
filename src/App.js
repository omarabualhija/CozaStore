import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobelStyle } from "./Components/Shared/Globel";
import { darck, light } from "./Components/Shared/Theme";
import { NavBar } from "./Components/NavBar/NavBar";
import { AllRouters } from "./Components/Shared/Routers";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { sliderAction, productAction } from "./Redux/Actions/Action";
import { Footer } from "./Components/Footer/Footer";
function App() {
  const themetoggle = useSelector((state) => state.theme);
  const [isGetData, setIsGetData] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const sliderData = async () => {
      try {
        const data = await axios.get("http://localhost:3000/slider");
        dispatch(sliderAction(data.data));
      } catch (e) {
        console.log("sliderData API on APP JS", e);
      }
    };

    const productData = async () => {
      try {
        const data = await axios.get("http://localhost:3000/product");
        dispatch(productAction(data.data));
      } catch (e) {
        console.log("productData API on APP JS", e);
      }
    };
    Promise.all([productData(), sliderData()]).then(() => setIsGetData(true));
  }, [dispatch]);
  return (
    <>
      {isGetData && (
        <ThemeProvider theme={!themetoggle ? light : darck}>
          <GlobelStyle />
          <div className="App">
            <NavBar />
            <AllRouters />
            <Footer></Footer>
          </div>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
