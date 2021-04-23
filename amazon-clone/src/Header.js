import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RoomIcon from "@material-ui/icons/Room";
import {Link} from 'react-router-dom'
import logo from "./logo.png";
function Header() {
  return (
    <Headers>
      <HeaderLogo>
        <img src={logo} />
      </HeaderLogo>
      <HeaderOptionAddress>
        <RoomIcon />
        <HeaderItemOption>
          <AddressLineOne>Hello</AddressLineOne>
          <AddressLineTwo>Select Your Address</AddressLineTwo>
        </HeaderItemOption>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIcon>
          <SearchIcon />
        </HeaderSearchIcon>
      </HeaderSearch>

      <HeaderItems>
        <HeaderItemOption>
          <OptionLineOne>Hello,Anshu</OptionLineOne>
          <OptionLineTwo>Accounts & Lists</OptionLineTwo>
        </HeaderItemOption>
        <HeaderItemOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderItemOption>
        <HeaderOptionCart>
          <Link to="/cart">
          <ShoppingCartIcon />
          <CartCount>2</CartCount>
          </Link>
        </HeaderOptionCart>
      </HeaderItems>
    </Headers>
  );
}

export default Header;

const Headers = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 10px;
  }
`;
const HeaderOptionAddress = styled.div`
  display: flex;
  align-items: center;

  padding: 10px 10px;
`;
const AddressLineOne = styled.div``;
const AddressLineTwo = styled.div``;
const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  :focus-within {
      box-shadow : 0 0 0 3px #F90;
  }
`;
const HeaderSearchInput = styled.input`
  border : 0;
  flex-grow: 1;
`;
const HeaderSearchIcon = styled.div`
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderItems = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderItemOption = styled.div`
  padding: 10px 10px;
`;
const OptionLineOne = styled.div``;
const OptionLineTwo = styled.div`
  font-weight: 700;
`;
const HeaderOptionCart = styled.div`
display:flex;
align-items:center;
padding-right: 10px;
a {
  display : flex;
  color : white;
}
`;
const CartCount = styled.div`
padding-left:4px;
`;
