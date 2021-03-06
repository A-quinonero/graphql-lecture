import React from "react";
import { Routes } from "../../constants";
import { Navbar, Link } from "./styles";

const Nav = () => (
  <Navbar>
    <Link to={Routes.HOME}>Pets</Link>
    <Link to={Routes.NEW}>New Pet</Link>
    <Link to={Routes.PERSONS}>Persons</Link>
  </Navbar>
);

export default Nav;
