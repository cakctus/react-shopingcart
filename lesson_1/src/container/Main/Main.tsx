import React from "react"
import { Container } from "@mui/material"
import Home from "pages/Home/Home"
import Cart from "../../pages/Cart/Cart"
import About from "pages/About/About"
import Shipping from "pages/Shipping/Shipping"
import Payments from "pages/Payments/Payments"
import { Routes, Route } from "react-router-dom"

type Props = {
  addProductsToCart: (count: number, price: number) => void
  cartData: any
  deleteProductFromCart: any
  incriment: (id: number) => void
  decriment: (id: number) => void
  productsLikeState: any
  toggleLikeState: (id: number) => void
}

const Main = ({
  addProductsToCart,
  cartData,
  deleteProductFromCart,
  incriment,
  decriment,
  productsLikeState,
  toggleLikeState,
}: Props) => {
  return (
    <main>
      <Container maxWidth="lg">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addProductsToCart={addProductsToCart}
                incriment={incriment}
                decriment={decriment}
                productsLikeState={productsLikeState}
                toggleLikeState={toggleLikeState}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </main>
  )
}

export default Main
