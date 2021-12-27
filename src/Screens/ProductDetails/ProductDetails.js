import React, { useState, useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { ImgGallery, Select } from "./Styled.js";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export function ProductDetails() {
  const [option, setOption] = useState("");

  const { id } = useParams();

  const prodectData = useSelector((state) => state.productData);
  const [{ img }] = prodectData.filter((el) => el.id == id);

  const image = [
    {
      original: img,
      thumbnail: img,
    },
  ];
  return (
    <>
      {prodectData.length !== null && (
        <ImgGallery>
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
            <div>
              <h4>Lightweight Jacket</h4>
              <span>500$</span>
              <p>Nulla eget sem vitae eros .</p>

              <Select>
                <div>
                  <label htmlFor="Size">Size</label>
                  <select id="Size" onChange={(e) => setOption(e.target.value)}>
                    <option value="">Choose an Option </option>
                    <option
                      className={option === "Size S" ? "active" : ""}
                      value="Size S"
                    >
                      Size S{" "}
                    </option>
                    <option value="Size M">Size M</option>
                    <option value="Size L">Size L</option>
                    <option value="Size XL">Size XL</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="Color">Color</label>
                  <select id="Color">
                    <option value="">Choose an Option </option>
                    <option value="Red">Red </option>
                    <option value="Blue">Blue</option>
                    <option value="White">White L</option>
                    <option value="Grey">Grey</option>
                  </select>
                </div>
              </Select>
            </div>
          </div>
        </ImgGallery>
      )}
    </>
  );
}
