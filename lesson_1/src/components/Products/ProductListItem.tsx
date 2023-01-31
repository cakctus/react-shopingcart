import { useState } from "react"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material"

import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"

import { useAppDispatch, useAppSelector } from "./../../redux/hooks"
import { useSelector, useDispatch } from "react-redux"
import { addLike } from "redux/likeReducer"
import { increment, decrement } from "redux/cartReducer"
import { addToCart, removeFromCart } from "redux/addToCartReducer"

import "./ProductsListItem.scss"

type Props = {
  product: any
  addProductsToCart?: any
  incriment?: (id: number) => void
  decriment?: (id: number) => void
  productsLikeState?: any
  toggleLikeState?: (id: number) => void
}

const ProductList = ({ product }: Props) => {
  const { id, name, description, capacity, price, type, img } = product
  const isLiked = useAppSelector((state: any) => state.likes)
  const count = useAppSelector((state: any) => state.cart)

  const dispatch = useDispatch()

  return (
    <Card className="product">
      <CardContent>
        <div className="product-images">
          <img src={img} alt="" />
        </div>
        <Button onClick={() => dispatch(addLike(id))}>
          {isLiked[id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>

        <h4>{name}</h4>
        <p className="product-description">{description}</p>
        <div className="product-features">
          <span>Type: </span>
          {type}
        </div>
        <div className="product-features">
          <span>Capacity:</span> {capacity} Gb
        </div>
        <div className="product-price">Price: {price} $</div>
        <div className="product-quantity">
          <Button
            variant="contained"
            size="small"
            onClick={() => dispatch(decrement(id))}
            disabled={count.productsObject[id].count <= 0}
          >
            -
          </Button>
          <TextField
            size="small"
            value={count.productsObject[id].count}
            variant="outlined"
          />
          <Button
            variant="contained"
            size="small"
            onClick={() => dispatch(increment(id))}
            disabled={count.productsObject[id].count >= 10}
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
              addToCart({ id: id, count: count.productsObject[id].count })
            )
          }
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductList
