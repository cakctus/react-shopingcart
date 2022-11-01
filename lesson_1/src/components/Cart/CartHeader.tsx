import React from "react"

type Props = {
  cartData: any
}

const CartHeader = ({ cartData }: Props) => {
  const { totalCount, totalPrice } = cartData
  return (
    <div>
      <div>{totalCount}</div>
      <div>${totalPrice}</div>
    </div>
  )
}

export default CartHeader
