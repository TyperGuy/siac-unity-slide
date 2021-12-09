import React from 'react';
import Unity from '../components/unity/Unity';
import styled from 'styled-components';
import Styles from './Unities.module.css';

export default function Unities(){
  const Container = styled.div` 
    width:100vw;
    background:linear-gradient(90deg,#1E195A,#1679B6,#194A68);
    display:flex;
    justify-content:center;
    `
   return(
     <Container>
       <div className={Styles.containerChild}>
          <h1>Proximo</h1>
          <div className={Styles.slideContainer}>
            <Unity/>
            <Unity/>
            <Unity/>
            <Unity/>
            <Unity/>
            <Unity/>
            <Unity/>
            <Unity/>
            <Unity/>
          </div>
          <h1>Anterior</h1>
       </div>
      
     </Container>
   )
}