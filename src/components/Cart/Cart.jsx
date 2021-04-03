import React from "react";
import {Container ,Typography , Button, Grid} from "@material-ui/core";
import useStyle from "./styles";
import CartItem from "./CartItem/CardItem";
export const Cart = ({ cart }) => {
    const classes = useStyle();
    
    const EmptyCart =() =>(
        <Typography variant="subtitle">You have on itrms in youe shopping cart, start adding some!</Typography>
    );

    const FelledCart =() =>(
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((lineItem) => (
                    <Grid item xs={12} sm={4} key={lineItem.id}>
                        <CartItem item={lineItem} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" varaint="contained" color="secondary">Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" varaint="contained" color="primary">CheckOut</Button>
                    
                </div>
                
            </div>
        </>
    );

    if(!cart.line_items) return "Loading";

    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.tillte} variant="h4">Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart />: <FelledCart/>}
        </Container>
    );
};

export default Cart;