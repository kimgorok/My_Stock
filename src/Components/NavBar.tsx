import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header, Title } from "../routes/Stocks";

const Nav = styled.nav`
  left: 0;
  right: 0;
  margin: auto;
  display: flex;

  width: 100%;

  font-size: 1.5rem;
  background-color: gray;
  z-index: 1;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
`;

const Menu = styled.div`
  font-size: 25px;
  padding: 20px 40px;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  min-width: 160px;
  z-index: 1;
  top: 100%;

  ${DropdownContainer}:hover & {
    display: block;
  }
`;

const DropdownItem = styled(Link)`
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #333;
  }
`;

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <Header>
        <Title>초전도체 관련주</Title>
      </Header>
      <Nav>
        <DropdownContainer
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Menu>메뉴</Menu>
          {isDropdownOpen && (
            <DropdownContent>
              <DropdownItem to="/My_Stock/">국내 주식</DropdownItem>
              <DropdownItem to="/other">해외 주식</DropdownItem>
            </DropdownContent>
          )}
        </DropdownContainer>
      </Nav>
    </>
  );
}

export default NavBar;
