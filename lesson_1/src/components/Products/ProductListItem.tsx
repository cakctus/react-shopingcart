import { useState } from "react"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material"

import "./ProductsListItem.scss"

type Props = {
  product: any
  addProductsToCart: any
}

const ProductList = ({ product, addProductsToCart }: Props) => {
  const { id, name, description, capacity, price, type, img } = product

  const [count, setCount] = useState(1)

  const incriment = () => {
    setCount((prev: number) => prev + 1)
  }

  const decriment = () => {
    setCount((prev: number) => prev - 1)
  }

  return (
    <Card className="product">
      <CardContent>
        <div className="product-images">
          <img src={img} alt="" />
        </div>
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
            onClick={decriment}
            disabled={count <= 0}
          >
            -
          </Button>
          <TextField size="small" value={count} variant="outlined" />
          <Button
            variant="contained"
            size="small"
            onClick={incriment}
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
