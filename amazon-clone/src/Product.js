import React from "react";
import styled from "styled-components";

function Product(props) {
  return (
    <div>
      <Container>
        <Image src={props.image}></Image>
        <Title>{props.title}</Title>
        <Price>${props.price}</Price>
        <Rating>{Array(props.rating).fill().map((rating)=> <span>⭐</span>)}</Rating>
        <Buy>BUY</Buy>
      </Container>
    </div>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding : 10px;
  border-radius:20px; 
`;
const Image = styled.img`
  max-height: 300px;
  background-position: center;
  background-size: cover;
`;
const Title = styled.span`
  padding: 5px;
  font-size: 1.5rem;
  font-weight: 400px;
`;
const Price = styled.span`
  font-size: 1.5rem;
  padding: 2px;
`;
const Rating = styled.span``;
const Buy = styled.button`
  margin-top: 10px;
  padding: 5px;
  width: 100px;
  background-color:#f08804;
  color:black;
  border : none;
  border-radius:5px;
`;
