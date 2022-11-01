import React from "react"
import { Container } from "@mui/material"
import Home from "pages/Home/Home"
type Props = {
  addProductsToCart: (count: number, price: number) => void
}

const Main = ({ addProductsToCart }: Props) => {
  return (
    <main>
      <Container maxWidth="lg">
        <Home addProductsToCart={addProductsToCart} />
      </Container>
    </main>
  )
}

export default Main
