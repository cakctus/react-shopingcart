import { keys } from "lodash"
import productsArray, {
  getProductsObject,
  ProductsType,
} from "components/Products/products"
import CartTotal from "./CartTotal"

type Props = {
  cartData: {
    [id: number]: number
  }
  productsObject?: any
}

const CartHeader = ({
  cartData,
  productsObject = getProductsObject(productsArray),
}: Props) => {
  return (
    <div>
      {Object.keys(cartData).map((item, index) => {
        return (
          <div key={index}>
            {productsObject[parseInt(item)].name} :{cartData[parseInt(item)]}{" "}
            {productsObject[parseInt(item)].price * cartData[parseInt(item)]}
          </div>
        )
      })}
      {/* <div>
        Total:
        {keys(cartData).reduce(
          (sum, productId) =>
            sum +
            productsObject[parseInt(productId)].price *
              cartData[parseInt(productId)],
          0
        )}
        $
      </div> */}
      <CartTotal cartData={cartData} />
    </div>
  )
}

export default CartHeader
