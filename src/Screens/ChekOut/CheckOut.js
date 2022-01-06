import { EmptyMsg } from "../../Components/EmptyMsg/EmptyMsg";
import { CheckOutStyle, CartTotals, TotalProducts, Total } from "./Styled";
import { SELECT } from "../../Components/MUI/SELECT";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_FROM_CART } from "../../Redux/Constant/Constant";
export function CheckOut() {
  const dispatch = useDispatch();
  const CeckOutProducts = useSelector((state) => state.addToCart.items);

  console.log(CeckOutProducts);

  const DeletItem = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };
  const Total = () => {
    let init = 0;
    CeckOutProducts.forEach((el) => {
      const [{ price }] = CeckOutProducts;
      init = init + price * el.qnt;
    });
    return init;
  };

  return (
    <>
      {CeckOutProducts.length !== 0 ? (
        <CheckOutStyle className="container">
          <TotalProducts>
            <table>
              <tbody>
                {/* start Header tabel*/}
                <tr>
                  <td>PRODUCT</td>
                  <td> </td>
                  <td>Color</td>
                  <td>Size</td>
                  <td>Qnt</td>
                  <td>Price</td>
                  <td>Total</td>
                </tr>
                {/* end Header tabel*/}

                {/* start  display ceckout proddut */}
                {CeckOutProducts.map((e) => {
                  return (
                    <tr key={e.id}>
                      <td>
                        <img src={e.img} alt="Product img"></img>
                      </td>
                      <td>{e.title}</td>
                      <td>{e.Color}</td>
                      <td>{e.Size}</td>
                      <td>{e.qnt}</td>
                      <td>{e.price}</td>
                      <td>{parseFloat(e.price) * parseFloat(e.qnt)}</td>
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
          </CartTotals>
        </CheckOutStyle>
      ) : (
        <EmptyMsg />
      )}
    </>
  );
}
