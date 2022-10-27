import Button from "@mui/material/Button"
import CartHeader from "components/Cart/CartHeader"

type Props = {}

const Menu = (props: Props) => {
  const menu = ["Home", "About", "Price", "Shopping", "Cart"]
  return (
    <>
      {menu.map((item, index) => {
        return (
          <Button color="inherit" key={index}>
            {item}
          </Button>
        )
      })}
    </>
  )
}

export default Menu
