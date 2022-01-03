import React, { useState, useEffect } from "react";
import { EmptyMsg } from "../EmptyMsg/EmptyMsg";
import { CheckOutStyle, CartTotals, TotalProducts, Total } from "./Styled";
import { SELECT } from "../MUI/SELECT";
import { useSelector, useDispatch } from "react-redux";
import { handelremoveFromCartAction } from "../../Redux/Actions/Action";
export function CheckOut() {
  const dispatch = useDispatch();
  const CeckOutProducts = useSelector(
    (state) => state.handelAddToCartReducer.cartItems
  );

  const ProductsData = useSelector((state) => state.productData);
  const [CheckOut, setCheckOut] = useState([]);

  useEffect(() => {
    setCheckOut(CeckOutProducts);
  }, [CeckOutProducts]);

  const DeletItem = (id) => {
    dispatch(handelremoveFromCartAction(id));
  };
  const Total = () => {
    let init = 0;
    const total = CeckOutProducts.map((el) => {
      const [{ price }] = ProductsData.filter((e) => e.id == el.id);
      init = init + parseFloat(price) * el.qnt;
    });

    return init;
  };

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
                  <td>Quantity</td>
                  <td>Price</td>
                  <td>Total</td>
                </tr>
                {CheckOut.map((e) => {
                  const item = ProductsData.find(
                    (el) => el.id === Number(e.id)
                  );

                  return (
                    <tr key={e.id}>
                      <td>
                        <img src={item.img} alt="Product img"></img>
                      </td>
                      <td>{item.name}</td>
                      <td>{e.Color}</td>
                      <td>{e.Size}</td>
                      <td>{e.qnt}</td>
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
              <div>{Total()}</div>
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
                  returnVal={(val) => val}
                ></SELECT>
              </div>
            </div>
            <Total>
              <div>TOTAL </div>
              <div>{Total()}</div>
            </Total>
          </CartTotals>
        </CheckOutStyle>
      ) : (
        <EmptyMsg />
      )}
    </>
  );
}
