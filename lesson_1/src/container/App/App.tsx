import CssBaseline from "@mui/material/CssBaseline"
import Header from "container/Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import { useState } from "react"

type Props = {}

type AppProps = {
  [id: number]: number
}

const App = (props: Props) => {
  const [productsInCart, setProductsInCart] = useState<AppProps>({
    1: 0,
  })

  const addProductsToCart = (id: number, count: number) => {
    setProductsInCart((prevState) => ({
      ...prevState,
      [id]: (prevState[id] || 0) + count,
    }))
  }

  // const addProductsToCart = (count: number, price: nubmer) => {
  //   setProductsInCart(prev => {
  //     price: prev.count + count,
  //     price: prev.price + price
  //   })
  // }

  return (
    <>
      <CssBaseline />
      <Header cartData={productsInCart} addProductsToCart={addProductsToCart} />
      <Main addProductsToCart={addProductsToCart} />
      <Footer />
    </>
  )
}

export default App
