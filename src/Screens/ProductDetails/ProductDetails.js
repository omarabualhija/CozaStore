import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { PRODUCTDETAILS, Select, Details } from "./Styled.js";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Count } from "../../Components/CountUp/Count";
import { handelAddToCartAction } from "../../Redux/Actions/Action";
import { Button } from "../../Components/btn/Button";
import { SELECT } from "../../Components/MUI/SELECT";
export function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [option, setOption] = useState({
    id: id,
    Color: "",
    Size: "",
    qnt: 1,
  });

  const prodectData = useSelector((state) => state.productData);
  const [{ category, img, name, price, supplier }] = prodectData.filter(
    (el) => el.id == id
  );
  const [error, setError] = useState(false);
  const image = [
    {
      original: img,
      thumbnail: img,
    },
  ];

  const handelOption = (val, type) => {
    setError(false);

    setOption({ ...option, [type]: val });
  };

  const handelAddToCart = () => {
    if (option.Size.length !== 0 && option.Color.length !== 0) {
      dispatch(handelAddToCartAction(option));
    } else setError(true);
  };

  return (
    <>
      {prodectData.length !== null && (
        <PRODUCTDETAILS>
          <div className="container">
            <ImageGallery
              showFullscreenButton={false}
              additionalClass="slider-MW"
              showNav={false}
              thumbnailPosition="left"
              useBrowserFullscreen={false}
              showPlayButton={false}
              autoPlay={true}
              items={image}
            />

            <Details>
              <h4>{name}</h4>
              <span>{`Price : ${price} $`}</span>
              <p>{`Supplier : ${supplier}`}</p>
              <div>{`Category :${category}`}</div>
              <Select>
                <SELECT
                  id="Size"
                  label={"Size"}
                  options={["Size S", "Size M", "Size L", "Size XL"]}
                  returnVal={(val) => handelOption(val, "Size")}
                ></SELECT>
                <SELECT
                  id="Color"
                  label={"Color"}
                  options={["Red", "Blue", "White", "Grey"]}
                  returnVal={(val) => handelOption(val, "Color")}
                ></SELECT>
              </Select>
              <Count
                containerClass="containerBtn"
                value={(val) => {
                  setOption({ ...option, qnt: val });
                }}
              ></Count>
              {error && (
                <div style={{ color: "red" }}>Add Your Color And Size </div>
              )}
              <Button onClick={handelAddToCart} value="ADD TO CART" />
            </Details>
          </div>
        </PRODUCTDETAILS>
      )}
    </>
  );
}
