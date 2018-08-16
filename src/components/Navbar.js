import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class NavBar extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">BIG MOVE</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">ABOUT US</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  SERVICES
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Air
                  </DropdownItem>
                  <DropdownItem>
                    Ground
                  </DropdownItem>
                  <DropdownItem />
                  <DropdownItem>
                    Sea
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/">NEWS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">CONTACT</NavLink>
              </NavItem>



            </Nav>
          </Collapse>
        </Navbar>
      </div>

    )
  }
}

export default NavBar;
