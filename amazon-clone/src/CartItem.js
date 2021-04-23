import React from "react";
import styled from "styled-components";
import Cart from "./Cart";

function CartItem() {
  return (
    <Container>
      <ImageContainer></ImageContainer>
      <CartItemInfo>
        <CartItemInfoTop></CartItemInfoTop>
        <CartItemInfoBottom>
          <CartItemQuantity></CartItemQuantity>
          <CartItemDelete></CartItemDelete>
        </CartItemInfoBottom>
      </CartItemInfo>
      <CartItemPrice></CartItemPrice>
    </Container>
  );
}

export default CartItem;

const Container = styled.div``;
