import React from "react"
import ProdutsList from "components/Products/ProdutsList"
import CartPage from "pages/Cart/Cart"
import Reviews from "components/Reviews/Reviews"

type Props = {
  addProductsToCart: any
  incriment: (id: number) => void
  decriment: (id: number) => void
}

const Home = ({ addProductsToCart, incriment, decriment }: Props) => {
  return (
    <div>
      <ProdutsList
        addProductsToCart={addProductsToCart}
        incriment={incriment}
        decriment={decriment}
      />
      <Reviews />
    </div>
  )
}

export default Home
