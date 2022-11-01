import CssBaseline from "@mui/material/CssBaseline"
import Header from "container/Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import { useState } from "react"

type Props = {}

type CartData = {
  totalCount: number
  totalPrice: number
}

const App = (props: Props) => {
  const [cartData, setCartData] = useState<CartData>({
    totalCount: 0,
    totalPrice: 0,
  })

  const addProductsToCart = (count: number, price: number) => {
    setCartData((prevState: CartData) => {
      return {
        totalCount: prevState.totalCount + count,
        totalPrice: prevState.totalPrice + count * price,
      }
    })
  }

  return (
    <>
      <CssBaseline />
      <Header cartData={cartData} addProductsToCart={addProductsToCart} />
      <Main addProductsToCart={addProductsToCart} />
      <Footer />
    </>
  )
}

export default App
