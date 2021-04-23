import React from 'react'
import CartItems from './CartItems'
import CartTotal from './CartTotal'
import styled from "styled-components";
function Cart() {
    return (
        <Container>
            <CartItems/>
            <CartTotal/>
        </Container>
    )
}

export default Cart

const Container = styled.div`
        display : flex;
        padding : 15px 20px 0 20px;
`