import { keys } from "lodash"
import productsArray, {
  getProductsObject,
  ProductsType,
} from "components/Products/products"
import CartTotal from "./CartTotal"

import { useAppSelector } from "../../redux/hooks"

type Props = {
  cartData?: {
    [id: number]: number
  }
  productsObject?: any
}

const CartHeader = (props: Props) => {
  const { productsObject } = useAppSelector((state: any) => state.cart)
  const addToCart = useAppSelector((state: any) => state.addToCart)

  return (
    <div>
      {Object.keys(addToCart).map((item, index) => {
        return (
          <div key={index}>
            {productsObject[parseInt(item)].name} :
            <span>{addToCart[parseInt(item)]} </span>
            <span>
              {productsObject[parseInt(item)].price * addToCart[parseInt(item)]}
            </span>
          </div>
        )
      })}
      <CartTotal />
    </div>
  )
}

export default CartHeader
