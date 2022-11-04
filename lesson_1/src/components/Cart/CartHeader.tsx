import { keys } from "lodash"
import productsArray, {
  getProductsObject,
  ProductsType,
} from "components/Products/products"

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
  console.log(productsObject)
  return (
    <div>
      {Object.keys(cartData).map((item, index) => {
        return (
          <div key={index}>
            {productsObject[parseInt(item)].name} :{cartData[parseInt(item)]}
          </div>
        )
      })}
    </div>
  )
}

export default CartHeader
