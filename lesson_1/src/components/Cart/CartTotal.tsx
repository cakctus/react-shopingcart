import productsArray, {
  getProductsObject,
  ProductsType,
} from "components/Products/products"
import { keys } from "lodash"

type Props = {
  cartData: {
    [id: number]: number
  }
  productsObject?: any
}

const CartTotal = ({
  cartData,
  productsObject = getProductsObject(productsArray),
}: Props) => {
  return (
    <div>
      Total:
      {keys(cartData).reduce(
        (sum, productId) =>
          sum +
          productsObject[parseInt(productId)].price *
            cartData[parseInt(productId)],
        0
      )}
      $
    </div>
  )
}

export default CartTotal
