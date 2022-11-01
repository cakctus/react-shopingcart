import React from "react"
import ProdutsList from "components/Products/ProdutsList"

type Props = {
  addProductsToCart: any
}

const Home = ({ addProductsToCart }: Props) => {
  return (
    <div>
      <ProdutsList addProductsToCart={addProductsToCart} />{" "}
    </div>
  )
}

export default Home
