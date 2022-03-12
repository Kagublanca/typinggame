import styled, { keyframes } from "styled-components";

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: transparent;
`;

export const Heading = styled.h1`
  ::after {
    content: "_";
    position: relative;
    display: flex;
  }
`;

export const Letter = styled.h2`
  font-size: 3rem;
`;
