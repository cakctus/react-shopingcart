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

import "./ProductsListItem.scss"

type Props = {
  product: any
  addProductsToCart: any
  incriment: (id: number) => void
  decriment: (id: number) => void
  isLiked?: boolean
}

const ProductList = ({
  product,
  addProductsToCart,
  incriment,
  decriment,
  isLiked = false,
}: Props) => {
  const { id, name, description, capacity, price, type, img, count } = product

  // const [count, setCount] = useState(1)

  // const incriment = () => {
  //   setCount((prev: number) => prev + 1)
  // }

  // const decriment = () => {
  //   setCount((prev: number) => prev - 1)
  // }

  return (
    <Card className="product">
      <CardContent>
        <div className="product-images">
          <img src={img} alt="" />
        </div>
        <Button>{isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}</Button>

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
            onClick={() => decriment(id)}
            disabled={count <= 0}
          >
            -
          </Button>
          <TextField size="small" value={count} variant="outlined" />
          <Button
            variant="contained"
            size="small"
            onClick={() => incriment(id)}
            disabled={count >= 10}
          >
            +
          </Button>
        </div>
      </CardContent>
      <CardActions className="btn-wrap">
        <Button variant="outlined" onClick={() => addProductsToCart(id, count)}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductList
