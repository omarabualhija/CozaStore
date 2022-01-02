import React, { useState, useEffect } from "react";
import { EmptyMsg } from "../EmptyMsg/EmptyMsg";
import { CheckOutStyle, CartTotals, TotalProducts, Total } from "./Styled";
import { SELECT } from "../MUI/SELECT";
import { useSelector } from "react-redux";
export function CheckOut() {
  const CeckOutProducts = useSelector(
    (state) => state.handelAddToCartReducer.cartItems
  );

  const ProductsData = useSelector((state) => state.productData);
  const [CheckOut, setCheckOut] = useState([]);

  useEffect(() => {
    setCheckOut(CeckOutProducts);
  }, [CeckOutProducts]);

  const DeletItem = (id) => {
    setCheckOut(CeckOutProducts.filter((e) => e.id !== id));
  };

  const TotalPrice = (e) => {
    const price = CeckOutProducts.map((el) => {
      const { price } = ProductsData.find((e) => el.id == e.id);
      const total = CheckOut.reduce(
        (prev, curr) => prev.qnt * price + curr.qnt * price
      );
      console.log(total);
    });
  };
  TotalPrice();
  return (
    <>
      {CheckOut.length !== 0 ? (
        <CheckOutStyle className="container">
          <TotalProducts>
            <table>
              <tbody>
                <tr>
                  <td>PRODUCT</td>
                  <td> </td>
                  <td>Color</td>
                  <td>Size</td>
                  <td>Price</td>
                  <td>Total</td>
                </tr>
                {CheckOut.map((e) => {
                  const item = ProductsData.find(
                    (el) => el.id === Number(e.id)
                  );

                  return (
                    <tr>
                      <td>
                        <img src={item.img} alt="Product img"></img>
                      </td>
                      <td>{item.name}</td>
                      <td>{e.Color}</td>
                      <td>{e.Size}</td>
                      <td>{item.price}</td>
                      <td>{parseFloat(item.price) * parseFloat(e.qnt)}</td>
                      <td>
                        <i
                          onClick={() => DeletItem(e.id)}
                          className="fas fa-trash-alt"
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TotalProducts>
          <CartTotals>
            <h4>CART TOTAL</h4>
            <div>
              <div>SubTotal</div>
              <div>999$</div>
            </div>
            <div>
              <div>Shipping</div>
              <div>
                <p>
                  There are no shipping methods available. Please double check
                  your address, or contact us if you need any help.
                </p>
                <span>CALCULATION SHIPPING</span>
                <SELECT
                  label={"country"}
                  options={["USA", "Jordan", "KSA"]}
                  returnVal={(val) => console.log(val)}
                ></SELECT>
              </div>
            </div>
            <Total>
              <div>TOTAL </div>
              <div>500$</div>
            </Total>
          </CartTotals>
        </CheckOutStyle>
      ) : (
        <EmptyMsg />
      )}
    </>
  );
}
