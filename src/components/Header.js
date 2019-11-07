import React from "react"
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap"
import { Link } from "react-router-dom"

const Header = props => {
  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">
          NoteBook
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/create-topic">
              Create Topic
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Header
