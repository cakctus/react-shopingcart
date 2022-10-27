import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { Container } from "@mui/material"
import Menu from "components/Menu/Menu"
import Drawer from "components/Menu/Drawer"
import CartHeader from "components/Cart/CartHeader"
import logo from "../../assets/img/shop.svg"

type Props = {}

const Header = (props: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Drawer />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={logo} width="50px" alt="" />
            </Typography>
            <Menu />
            <CartHeader />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header
