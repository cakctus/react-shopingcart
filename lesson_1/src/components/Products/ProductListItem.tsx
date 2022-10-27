import { Component } from "react"
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

class ProductList extends Component<Props> {
  render() {
    return (
      <Card className="product">
        <CardContent>
          <div className="product-images">
            <img src={this.props.img} alt="" />
          </div>
          <h4>{this.props.name}</h4>
          <p className="product-description">{this.props.description}</p>
          <div className="product-features">
            <span>Type: </span>
            {this.props.type}
          </div>
          <div className="product-features">
            <span>Capacity:</span> {this.props.capacity} Gb
          </div>
          <div className="product-price">Price: {this.props.price} $</div>
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
}

export default ProductList
