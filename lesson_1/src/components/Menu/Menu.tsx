import MenuItems from "./MenuItems"
import "./menu.scss"

type Props = {}

const Menu = (props: Props) => {
  return (
    <>
      <MenuItems to="/">Home</MenuItems>
      <MenuItems to="/about">About</MenuItems>
      <MenuItems to="/shipping">Shipping</MenuItems>
      <MenuItems to="/price">Price</MenuItems>
      <MenuItems to="/cart">Cart</MenuItems>
    </>
  )
}

export default Menu
