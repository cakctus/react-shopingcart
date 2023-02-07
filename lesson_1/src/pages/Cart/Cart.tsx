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

import { useAppSelector, useAppDispatch } from "redux/hooks"
import { increment, decrement } from "redux/cartReducer"
import { removeFromCart, addToCart } from "redux/addToCartReducer"

type Props = {}

const CartPage = (props: Props) => {
  const productsInCart = useAppSelector((state: any) => state.addToCart)
  const { productsObject } = useAppSelector((state: any) => state.cart)

  const dispatch = useAppDispatch()

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
        {Object.keys(productsInCart).map((item, index) => {
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
                          {productsInCart[parseInt(item)]}
                        </div>
                        <div className="product-price">
                          <span>Price:</span>
                          {productsObject[parseInt(item)].price *
                            productsInCart[parseInt(item)]}
                          $
                        </div>
                        <div className="product-quantity">
                          <Button
                            variant="contained"
                            size="small"
                            onClick={() => {
                              productsObject[parseInt(item)].count === 1
                                ? dispatch(
                                    removeFromCart(
                                      productsObject[parseInt(item)].id
                                    )
                                  )
                                : dispatch(
                                    decrement(productsObject[parseInt(item)].id)
                                  )
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
                              dispatch(
                                increment(productsObject[parseInt(item)].id)
                              )
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
                            dispatch(
                              removeFromCart(productsObject[parseInt(item)].id)
                            )
                          }
                        >
                          remove
                        </Button>
                      </CardActions>
                      <CardActions className="btn-wrap">
                        <Button
                          variant="outlined"
                          onClick={() =>
                            dispatch(
                              addToCart({
                                id: productsObject[parseInt(item)].id,
                                count: productsObject[parseInt(item)].count,
                              })
                            )
                          }
                        >
                          change quantity
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

      <CartTotal />
    </>
  )
}

export default CartPage
