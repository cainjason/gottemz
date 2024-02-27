import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <ContainerHeader>
      <ContainerInfo className="form-group">
        <label for="">Sherch</label>
        <input type="text"
          className="input" id="" aria-describedby="helpId" placeholder="Gott'emz"/>
        <small id="helpId" class="form-text text-muted">redirect</small>
      </ContainerInfo>
    </ContainerHeader>
  )
}

export default Header;

const ContainerHeader = styled.div`
    display: flex;
    justify-content:center;
    margin-top: 10px;
    background-color: lemonchiffon;
    font-size: large;
    font-weight: bold;

`;

const ContainerInfo = styled.div`
    display: flex;
    justify-content: space-evenly;
	input {
		outline: none;
		border-radius: 5px;
	}
	
`;



