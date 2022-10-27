import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material"
import "./ProductsListItem.scss"

type Props = {
  name: string
  description: string
  capacity: number
  price: number
  type: string
  img: string
}

const ProductListItem = ({
  name,
  description,
  capacity,
  price,
  type,
  img,
}: Props) => {
  console.log(img)
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
          <Button variant="contained" size="small">
            -
          </Button>
          <TextField size="small" value="1" variant="outlined" />
          <Button variant="contained" size="small">
            +
          </Button>
        </div>
      </CardContent>
      <CardActions className="btn-wrap">
        <Button variant="outlined">Add to cart</Button>
      </CardActions>
    </Card>
  )
}

export default ProductListItem
