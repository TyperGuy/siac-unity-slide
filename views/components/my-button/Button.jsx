import React from 'react';
import styled from 'styled-components';

const def = '7rem';
const Button = styled.div`
/* This renders the buttons above... Edit me! */
display: flex;
justify-content:center;
align-items:center;
border-radius: 5px;
padding: 0.5rem 0;
margin: 0.5rem 0rem;
width:${props => (props.size)?props.size:def};
background: ${props => props.bg};
color: ${props => props.color};
border: 1px solid ${props => props.color};
font-weight: 500;
transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
cursor:pointer;
user-select: none;
&:hover {
  background: ${props => props.color};
  color: ${props => props.hbg};
}
`

function MyButton(props){



  return(
    <Button color={props.color} hbg={props.hbg}>
      <a>{props.text}</a>
    </Button>
  )
}

export default MyButton;