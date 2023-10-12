import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: #232f3e;
  display: flex;
  align-items: center;
  overflow-x: auto;
  padding: 10px 0;
`;

const NavItem = styled.a`
  padding: 10px 20px;
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  white-space: nowrap;
  transition: background-color 0.3s;

  &:hover {
    background-color: #131921;
  }
`;

const AmazonNavbar = ({ list, setSelectedDate }) => {
  return (
    <NavbarContainer>
      {list.map((option, index) => (
        <NavItem onClick={()=>setSelectedDate(option)} key={index} href="#">
          {option}
        </NavItem>
      ))}
    </NavbarContainer>
  );
};

export default AmazonNavbar;
