import { Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import ProductListItem from "./ProductListItem"

import productsArray from "./products"

type Products = {
  id: number
  name: string
  description: string
  capacity: number
  price: number
  type: string
  img: string
}

type Props = {
  addProductsToCart: any
  incriment: (id: number) => void
  decriment: (id: number) => void
  productsLikeState: any
  toggleLikeState: (id: number) => void
}

const ProdutsList = ({
  addProductsToCart,
  incriment,
  decriment,
  productsLikeState,
  toggleLikeState,
}: Props) => {
  return (
    <>
      <Typography variant="h2" style={{ textAlign: "center" }}>
        Products
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {productsArray.map((product: Products, index: number) => {
          const { id } = product
          return (
            <Grid item xs={4} key={id}>
              <ProductListItem
                addProductsToCart={addProductsToCart}
                product={product}
                incriment={incriment}
                decriment={decriment}
                productsLikeState={productsLikeState}
                toggleLikeState={toggleLikeState}
              />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default ProdutsList
