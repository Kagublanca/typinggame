import styled from "styled-components";

export const Text = styled.h1`
color : gray;
font-size: 5rem;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
outline : 10px solid red;
left: 25vw;
top: 10vh;
padding: 20px;

`

export const TextWrapper = styled.div`
background-color: purple;
outline : 20px solid red;
padding: 50px;
position: absolute;
`


export const Input = styled.input`
padding: 20px;
top: 10vh;
left: 25vw;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
background: transparent;
border: none;
outline : 20px solid red;
color : white;
font-weight: bold;
font-size: 5rem;
::selection {
    color: none;
    background: none;
}
::-moz-selection {
        color: none;
        background: none;
    }
    `