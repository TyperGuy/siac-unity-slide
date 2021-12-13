import React from 'react';
import Unity from '../components/unity/Unity';
import styled from 'styled-components';
import Styles from './Unities.module.css';
import file from './Unities.json';
import {MdChevronLeft as Mdleft,MdChevronRight as Mdright} from 'react-icons/md';

const schedulerTheme ={
  "opened" : {
    "bGcolor" : "#DCEDC8",
    "color" : "#03ac4a",
    "status" : "Aberto"
  },
  "closed":{
    "bGcolor" : "#ffd2c1",
    "color" : "#e93322",
    "status" : "Fechado"
  }
}
function isOpen(unity){
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();

  return(time>=unity.abertura && time <unity.encerramento)
}

export default function Unities(){
  const Container = styled.div` 
    width:100vw;
    background:linear-gradient(90deg,#1E195A,#1679B6,#194A68);
    display:flex;
    justify-content:center;
    `
  const Circle = styled.div`
  margin: 10px ;
  display: flex;
  align-items: center;
  align-content: center;
  box-shadow: 0 5px 15px rgba(109, 121, 145, 0.9);
  border-radius: 50%;
  background-color: transparent;
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease-in-out;
  font-size:2.2rem;
  color: #1679B6;
  background-color: #fff;
  &:hover{
    transform:scale(1.2);
    color: #F52724;
  }
  `  
   return(
     <Container>
       <div className={Styles.containerChild}>
          <Circle><Mdleft/></Circle>
          <div className={Styles.slideContainer}>
            { 
              file.map( (unity,id) =>{
                return(
                    isOpen(unity) ? <Unity status={schedulerTheme.opened}unity={unity}/>
                    :<Unity status={schedulerTheme.closed}unity={unity}/>
                )
              })
            }
          </div>
          <Circle><Mdright/></Circle>
       </div>
      
     </Container>
   )


    
}