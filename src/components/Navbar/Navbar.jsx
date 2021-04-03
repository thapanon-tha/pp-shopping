import React from "react";
import {AppBar, Toolbar ,IconButton , Badge , MenuItem , Menu , Typography} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyle from "./style";
import logo from "../../assets/online-shopping.png";

function Navbar({totalItems}) {
    const classes = useStyle();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className="classes.title" color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px"className={classes.image}/>
                        E-commerce.js
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart"  aria-label="Show cart item" color="inherit" >
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>   
        </>
    );
}

export default Navbar;
