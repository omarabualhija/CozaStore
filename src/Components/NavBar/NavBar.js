import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Header, Logo, Bar, ShopIcons } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { themeAction } from "../../Redux/Actions/Action";

export const NavBar = (props) => {
  const [ToggleNav, setToggleNav] = useState(false);
  const [CheckScroll, setCheckScroll] = useState(false);
  const themetoggle = useSelector((state) => state.theme);
  const dispatchtheme = useDispatch();
  const { qnt } = useSelector((state) => state.handelAddToCartReducer);
  const changeColor = () => {
    if (window.scrollY >= 60) {
      setCheckScroll(true);
    } else {
      setCheckScroll(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <Header className={CheckScroll ? "background" : ""}>
      <div className="container">
        <Logo>
          <Link to="/">
            <img src="/images/icons/logo-01.png" alt="logo" />
          </Link>
        </Logo>

        <Bar className={!ToggleNav ? "toggle" : ""}>
          <NavLink onClick={() => setToggleNav(!ToggleNav)} to="/">
            Home
          </NavLink>
          <NavLink onClick={() => setToggleNav(!ToggleNav)} to="/Shop">
            Shope
          </NavLink>
          <NavLink onClick={() => setToggleNav(!ToggleNav)} to="/About">
            About
          </NavLink>
          <NavLink onClick={() => setToggleNav(!ToggleNav)} to="/Contact">
            Contact
          </NavLink>
        </Bar>

        <ShopIcons>
          <div
            onClick={() => dispatchtheme(themeAction())}
            className={themetoggle ? `fas fa-sun` : `far fa-moon`}
          ></div>
          <Link to="/CheckOut" className="fas fa-shopping-cart">
            {qnt}
          </Link>
          <div className="far fa-heart"></div>
          <div
            onClick={() => setToggleNav(!ToggleNav)}
            className={!ToggleNav ? "fas fa-bars" : "fas fa-times fa-xl"}
          ></div>
        </ShopIcons>
      </div>
    </Header>
  );
};
