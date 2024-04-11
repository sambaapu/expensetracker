import React, {Component} from "react";
import {Navbar, Nav,NavItem,NavbarBrand,NavLink} from 'reactstrap';
class AppNavAdmin extends Component{
    state = {}
    render() {
        return (
          <div>
            <Navbar color="dark" dark expand="md">
              <NavbarBrand href="/">Expense Tracker</NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/home">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/categories">Categories</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/users">Users</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/expenses">Expenses</NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
          </div>
        );
      }
}
export default AppNavAdmin;
