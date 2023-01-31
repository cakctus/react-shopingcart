import productsArray, {
  getProductsObject,
  ProductsType,
} from "components/Products/products"
import { keys } from "lodash"
import { useAppSelector } from "redux/hooks"

type Props = {}

const CartTotal = (props: Props) => {
  const { productsObject } = useAppSelector((state: any) => state.cart)
  const productsInCart = useAppSelector((state: any) => state.addToCart)

  return (
    <div>
      Total:
      {keys(productsInCart).reduce(
        (sum, productId) =>
          sum +
          productsObject[parseInt(productId)].price *
            productsInCart[parseInt(productId)],
        0
      )}
      $
    </div>
  )
}

export default CartTotal
