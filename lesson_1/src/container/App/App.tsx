import { useState, useEffect } from "react"
import productsArray, {
  getProductsObject,
  ProductsType,
} from "components/Products/products"
import CssBaseline from "@mui/material/CssBaseline"
import Header from "container/Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import Cart from "../../pages/Cart/Cart"

type Props = {
  productsObject?: any
}

type AppProps = {
  [id: number]: number
}

type ProductsLikeState = {
  [id: number]: boolean
}

const App = ({ productsObject = getProductsObject(productsArray) }: Props) => {
  const [productsInCart, setProductsInCart] = useState<AppProps>({})

  const [productsLikeState, setProductsLikeState] = useState<ProductsLikeState>(
    {
      1: true,
      2: true,
    }
  )

  console.log(productsObject)

  const [cartObjects, setCartObjects] = useState(productsObject)

  useEffect(() => {
    setCartObjects(productsObject)
  }, [])

  const incriment = (id: number) => {
    const updateState = cartObjects[id]
    updateState.count++
    setCartObjects((prevState: any) => {
      return { ...prevState, updateState }
    })
  }

  const decriment = (id: number) => {
    const updateState = cartObjects[id]
    updateState.count--
    setCartObjects((prevState: any) => {
      return { ...prevState, updateState }
    })
  }

  const addProductsToCart = (id: number, count: number) => {
    setProductsInCart((prevState) => ({
      ...prevState,
      [id]: (prevState[id] || 0) + count,
    }))
  }

  const deleteProductFromCart = (id: number) => {
    setProductsInCart((prev) => {
      console.log(prev, id)
      const prevState = { ...prev }
      delete prevState[id]
      return prevState
    })
  }

  const toggleLikeState = (id: number) => {
    setProductsLikeState((prevState: ProductsLikeState) => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }

  // const addProductsToCart = (count: number, price: nubmer) => {
  //   setProductsInCart(prev => {
  //     count: prev.count + count,
  //     price: prev.price + price
  //   })
  // }

  return (
    <>
      <CssBaseline />
      <Header cartData={productsInCart} addProductsToCart={addProductsToCart} />
      <Main
        addProductsToCart={addProductsToCart}
        cartData={productsInCart}
        deleteProductFromCart={deleteProductFromCart}
        incriment={incriment}
        decriment={decriment}
        productsLikeState={productsLikeState}
        toggleLikeState={toggleLikeState}
      />
    </>
  )
}

export default App
