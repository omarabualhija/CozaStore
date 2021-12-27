import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Products, Filters, Cards, Search } from "./Styled";
import { Link } from "react-router-dom";
export function Prodacts() {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [limitList, setLimetList] = useState(9);
  const ProductsData = useSelector((state) => state.productData);
  const [filteredData, setFilterdData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All Products");

  const handleSearch = (e) => {
    let search = e.target.value.toLowerCase();
    setFilterdData(
      ProductsData.filter((e) => e.name.toLowerCase().includes(search))
    );
  };

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

  const displayProduct = () => (
    <Cards>
      {filteredData.map((e) => (
        <Link to={`ProductDetails/${e.id}`} key={e.id}>
          <div>
            <img src={e.img} alt="img" />
            <button>Quick View</button>
          </div>
          <button>
            <h4>{e.name}</h4>
            <span>{e.price}</span>
          </button>
        </Link>
      ))}
    </Cards>
  );

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
    const updateData = () => {
      const sliceData = [];
      for (let i = 0; i < limitList; i++) {
        sliceData.push(ProductsData[i]);
      }
      console.log(sliceData);
      setFilterdData(sliceData);
    };
    updateData();
  }, [limitList, ProductsData]);

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
