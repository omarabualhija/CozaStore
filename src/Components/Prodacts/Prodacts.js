import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Products, Filters, Cards, Search } from "./Styled";
import { Link } from "react-router-dom";
import { Button } from "../btn/Button";

export function Prodacts(props) {
  const [toggleFilter, setToggleFilter] = useState(false); //to Show serch box
  const ProductsData = useSelector((state) => state.productData); //get card product data
  const [filteredData, setFilterdData] = useState([]); // State to display the data after filtering
  const [activeFilter, setActiveFilter] = useState("All Products"); //btn filter
  //func search box
  const handleSearch = (e) => {
    let search = e.target.value.toLowerCase();
    setFilterdData(
      ProductsData.filter((e) => e.name.toLowerCase().includes(search))
    );
  };

  //function btn filter
  const handelFilter = (type) => {
    setActiveFilter(type);
    if (type === "women") {
      return setFilterdData(ProductsData.filter((e) => e.category === type));
    } else if (type === "men") {
      return setFilterdData(ProductsData.filter((e) => e.category === type));
    } else if (type === "accessories") {
      return setFilterdData(ProductsData.filter((e) => e.category === type));
    } else return setFilterdData(ProductsData);
  };

  // func. jsx => display data
  const displayProduct = () => (
    <Cards>
      {filteredData.map((e) => (
        <Link to={`/CozaStore/ProductDetails/${e.id}`} key={e.id}>
          <div>
            <img src={e.img} alt="img" />
            <Button customClass="Quickbutton" value="QUICK VIEW"></Button>
          </div>
          <div>
            <h4>{e.name}</h4>
            <span>{e.price}</span>
          </div>
        </Link>
      ))}
    </Cards>
  );

  //func jsx filter
  const Filter = () => (
    <>
      <Filters>
        <div>
          {" "}
          {/*//Filter Type} */}
          <span
            className={activeFilter === "All Products" ? "active" : ""}
            onClick={() => handelFilter("All Products")}
          >
            All Products
          </span>
          <span
            className={activeFilter === "women" ? "active" : ""}
            onClick={() => handelFilter("women")}
          >
            women
          </span>
          <span
            className={activeFilter === "men" ? "active" : ""}
            onClick={() => handelFilter("men")}
          >
            Men
          </span>
          <span
            className={activeFilter === "accessories" ? "active" : ""}
            onClick={() => handelFilter("accessories")}
          >
            Accessories
          </span>
        </div>
        <div>
          <button
            onClick={() => setToggleFilter(!toggleFilter)}
            className={!toggleFilter ? "fas fa-search" : " fas fa-times "}
          >
            Search
          </button>
        </div>
      </Filters>

      <Search className={toggleFilter ? "show" : ""}>
        <i className="fas fa-search"></i>
        <input
          onChange={handleSearch}
          type="search"
          placeholder="Search here !"
        ></input>
      </Search>
    </>
  );

  useEffect(() => {
    setFilterdData(ProductsData);
  }, [ProductsData]);
  return (
    <Products>
      <div className="container">
        <h2>PRODUCT OVERVIEW</h2>
        {Filter()}
        {displayProduct()}
      </div>
    </Products>
  );
}
