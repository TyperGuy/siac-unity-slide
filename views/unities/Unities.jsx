import React,{useRef} from 'react';
import Unity from '../components/unity/Unity';
import styled from 'styled-components';
import Styles from './Unities.module.css';
import file from './Unities.json';
import schedulerTheme from './schedulerTheme.json';
import {MdChevronLeft as Mdleft,MdChevronRight as Mdright} from 'react-icons/md';



export default function Unities(){
  var scrollQuociente = 340;
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
  const refContainer = useRef(null);
  return(
     <Container >
       <div className={Styles.containerChild}>
          <Circle onClick={rollBack}><Mdleft/></Circle>
          <div ref={refContainer} className={Styles.slideContainer}>
            { 
              file.map( (unity,id) =>{
                return(
                    isOpen(unity) ? <Unity status={schedulerTheme.opened}unity={unity}/>
                    :<Unity status={schedulerTheme.closed}unity={unity} />
                )
              })
            }
          </div>
          <Circle onClick={rollForward}><Mdright/></Circle>
       </div>
      
     </Container>
   )


  function rollBack(){
     refContainer.current.scrollLeft ="0";
  }
   function rollForward(){
     refContainer.current.scrollLeft =refContainer.current.scrollLeft+scrollQuociente;
  }

  function isOpen(unity){
    var today = new Date();
    var time = today.getHours();
    console.log(time)
    return(time>=unity.abertura && time <unity.encerramento)
  }

    
}