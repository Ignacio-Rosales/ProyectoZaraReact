import React from 'react'
import { Image , Menu, MenuList, MenuItem , Portal, MenuButton} from '@chakra-ui/react'
import CartWidget from './CartWidget'
import '../assets/styles/style.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="navbar_container">
          <Link to={"/"}>
            <Image
              borderRadius="full"
              boxSize="150px"
              src="../src/assets/img/zara-logo.jpg"
              alt="Logo Zara"
              className="logo-zara"
            />
          </Link>

          <Menu>
            <MenuButton>Categorias</MenuButton>
            <Portal>
              <MenuList>
                <MenuItem>
                  <Link to="/categoria/Calzado">
                    <p>Calzado</p>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/categoria/Remera">
                    <p>Remera</p>
                  </Link>
                </MenuItem>
                <MenuItem>
                <Link to="/categoria/Pantalon">
                  <p>Pantalones</p>
                </Link>
                </MenuItem>
              </MenuList>
            </Portal>
          </Menu>

         

          <CartWidget />
        </div>
      </header>
    </>
  );
}

export default Navbar