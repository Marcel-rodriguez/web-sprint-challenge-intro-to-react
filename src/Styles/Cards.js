import styled from "styled-components";

 const Cards = styled.div`
 border: 2px solid crimson;
 width: 100vh;
 min-height: ${props => props.height};
 padding: 3px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 color: white;
 opacity: 0.75;
 background: ${props => props.bgColor}
`

export const Expanded = styled.div`
border: 2px solid crimson;
 width: 100vh;
 min-height: 20vh;
 padding: 3px;
 display: flex;
 align-items: flex-start;
 flex-direction: row-reverse;
 justify-content: space-between;
 color: white;
 opacity: 0.75;
 background: ${props => props.bgColor}
`

export const PTag = styled.p`
border: 1px solid #4f4f4f;
border-radius: 5px;
height: 5vh;
width: ${props => props.tagWidth};
padding: 5px;
display: flex;
align-items: center;
margin-left: 10px;
background: rgba(100, 50, 100, 0.75);
`

export default Cards