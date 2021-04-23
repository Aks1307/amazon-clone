import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { useState, useEffect } from "react";
import { db } from "./firebase";

function Home() {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    let tempProduct = [];
    db.collection("products")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          tempProduct = [...tempProduct, doc.data()];
          setProducts(tempProduct);
        });
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Component>
      <Banner></Banner>
      <Content>
        {products.map((data) => (
          <Product 
            title = {data.title}
            price = {data.price}
            rating = {data.rating}
            image = {data.image}
          />
        ))}
      </Content>
    </Component>
  );
}

export default Home;

const Component = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;
const Banner = styled.div`
  background-image: url(https://i.imgur.com/SYHeuYM.jpg);
  min-height: 600px;
  background-position: center;
  background-size: cover;
`;
const Content = styled.div`
  margin-top: -350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
