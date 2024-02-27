import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <ContainerNav>
      <ul>
        <li><a href='/base one'>Base one</a></li>
        <li><a href='/base Two'>Base Two</a></li>
        <li><a href='/base Three'>Base Three</a></li>
      </ul>
    </ContainerNav>
  )
}

export default Navbar;

const ContainerNav = styled.div`
    background-color: gray;
    height: 80vh;
    width: 300px;
    
    ul {
        color: white;
        text-decoration: none;

    }
    ul:hover {
        cursor: pointer;
        color: white;
        text-decoration: none;
        
    }
`;
