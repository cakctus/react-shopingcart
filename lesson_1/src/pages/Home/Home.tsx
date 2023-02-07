import React from "react"
import ProdutsList from "components/Products/ProdutsList"
import CartPage from "pages/Cart/Cart"
import Reviews from "components/Reviews/Reviews"

type Props = {
  addProductsToCart: any
  incriment: (id: number) => void
  decriment: (id: number) => void
  productsLikeState: any
  toggleLikeState: (id: number) => void
}

const Home = ({
  addProductsToCart,
  incriment,
  decriment,
  productsLikeState,
  toggleLikeState,
}: Props) => {
  return (
    <div>
      <ProdutsList
        addProductsToCart={addProductsToCart}
        incriment={incriment}
        decriment={decriment}
        productsLikeState={productsLikeState}
        toggleLikeState={toggleLikeState}
      />
    </div>
  )
}

export default Home
