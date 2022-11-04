import { keys } from "lodash"

type Props = {
  cartData: {
    [id: number]: number
  }
}

const CartHeader = ({ cartData }: Props) => {
  console.log(cartData)
  return (
    <div>
      <div>
        {Object.keys(cartData).map((item, index) => {
          console.log(item)
          return (
            <div key={index}>
              {item} : {cartData[parseInt(item)]}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CartHeader
