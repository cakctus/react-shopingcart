import { useState, useEffect } from "react"
import { keys } from "lodash"
import productsArray, {
  getProductsObject,
  ProductsType,
} from "components/Products/products"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Grid,
} from "@mui/material"
import Box from "@mui/material/Box"

import CartTotal from "components/Cart/CartTotal"

type Props = {
  productsObject?: any
  cartData: any
  deleteProductFromCart: any
  incriment: (id: number) => void
  decriment: (id: number) => void
}

const CartPage = ({
  productsObject = getProductsObject(productsArray),
  incriment,
  decriment,
  cartData,
  deleteProductFromCart,
}: Props) => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        alignItems="center"
        gap="1rem"
      >
        {Object.keys(cartData).map((item, index) => {
          return (
            <Box sx={{ width: 1 }}>
              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
                <Box gridColumn="span 8">
                  <Grid item xs={8}>
                    <Card className="product">
                      <CardContent>
                        <div className="product-images">
                          <img
                            src={productsObject[parseInt(item)].img}
                            alt=""
                          />
                        </div>
                        <h4>{productsObject[parseInt(item)].name}</h4>

                        <div className="product-features">
                          <span>Count:</span>
                          {cartData[parseInt(item)]}
                        </div>
                        <div className="product-price">
                          <span>Price:</span>
                          {productsObject[parseInt(item)].price *
                            cartData[parseInt(item)]}
                          $
                        </div>
                        <div className="product-quantity">
                          <Button
                            variant="contained"
                            size="small"
                            onClick={() => {
                              productsObject[parseInt(item)].count === 1
                                ? deleteProductFromCart(
                                    productsObject[parseInt(item)].id
                                  )
                                : decriment(productsObject[parseInt(item)].id)
                            }}
                          >
                            -
                          </Button>
                          <TextField
                            size="small"
                            value={productsObject[parseInt(item)].count}
                            variant="outlined"
                          />
                          <Button
                            variant="contained"
                            size="small"
                            onClick={() =>
                              incriment(productsObject[parseInt(item)].id)
                            }
                            disabled={
                              productsObject[parseInt(item)].count >= 10
                            }
                          >
                            +
                          </Button>
                        </div>
                      </CardContent>
                      <CardActions className="btn-wrap">
                        <Button
                          variant="outlined"
                          onClick={() =>
                            deleteProductFromCart(
                              productsObject[parseInt(item)].id
                            )
                          }
                        >
                          remove
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Box>
              </Box>
            </Box>
          )
        })}
      </Grid>

      <CartTotal cartData={cartData} />
    </>
  )
}

export default CartPage
