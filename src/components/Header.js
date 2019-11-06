import React from "react"
import { Navbar, NavbarBrand } from "reactstrap"

const Header = props => {
  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">
          NoteBook
        </NavbarBrand>
      </Navbar>
    </div>
  )
}

export default Header
