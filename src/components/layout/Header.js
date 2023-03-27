import React, { Fragment } from "react";
import classes from "./Header.module.css"; 
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";
import image from '../images/background.jpg';


const Header = props => {


  
  return (
    
    <Fragment>
      <div><h2><br />Codex International Publishers</h2></div>
      <div>
      <header className={classes.header}>
        <NavLink exact activeClassName={classes.active} to="/home">Home</NavLink>
        <NavLink activeClassName={classes.active} to="/bookstore">Book Store</NavLink>
        <NavLink activeClassName={classes.active} to="/editedbook">Edited Books</NavLink>
        <NavLink activeClassName={classes.active} to="/conferrenceproceedings">Conferrence Proceedings</NavLink>
        <NavLink activeClassName={classes.active} to="/journals">Journals</NavLink>
        <NavLink activeClassName={classes.active} to="/memberships">Membership's</NavLink>
        <NavLink activeClassName={classes.active} to="/awards">Awards</NavLink>
        <NavLink activeClassName={classes.active} to="/editorialboardmembers">Editorial Board Members</NavLink>
        <NavLink activeClassName={classes.active} to="/more">More</NavLink>
        <CartButton onClick={props.onShow}/>
      </header>
      </div>
      <div className={classes.container}>
        <img src={image} alt="background"/>
        <h1>CODEX INTERNATIONAL PUBLISHERS</h1>
      </div>
    </Fragment>
  );
};

export default Header;
