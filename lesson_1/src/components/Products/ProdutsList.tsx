import React from "react"
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

type Props = {}

const ProdutsList = (props: Props) => {
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
              <ProductListItem product={product} />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default ProdutsList
