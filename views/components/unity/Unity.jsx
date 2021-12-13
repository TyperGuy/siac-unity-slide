import React from 'react';
import Styles from './Unity.module.css';
import styled from 'Styled-components';
import img from '../../assets/black-yellow.jpg';
import { MdFmdGood } from 'react-icons/md';
import {BsClockHistory,BsDash} from 'react-icons/bs';


function Unity(props){

  const Scheduler = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    padding:5px 10px;
    border-radius:5px;
    margin-right: 10px;
    font-size:.9rem;
    color : ${props.status.color};
    background-color:${props.status.bGcolor};
  `
  return (
    <div className={Styles.unityContainer}>
      <img className={Styles.unityIMG} src={img} alt=""/>
      <div className={Styles.unityChildContainer}>
        <h1 className={Styles.unityName}>{props.unity.name}</h1>
        <div className={Styles.adress}>
          <MdFmdGood/> 
          <span>{props.unity.adress}</span>
        </div>
        <hr className={Styles.unitySimpleLine}/>
        <div className={Styles.schedule}>
          <div style={{ border:'1px dashed #a2a1a1'}} className={Styles.scheduler}>
            <BsClockHistory/>
            <span className={Styles.innerText}>{props.unity.abertura}</span>
            <BsDash/>
            <span className={Styles.innerText}>{props.unity.encerramento}</span>
          </div>
          <Scheduler >{props.status.status}</Scheduler>
        </div>
        <p className={Styles.unityDesciption}>{props.unity.descriprion}</p>
        
        <button className={Styles.locateBtn}>Leva-me lá</button>
      </div>   
    </div>
  );

  function setState(open,closed){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    if(time>=open && time <closed)
      return Theme.opened;
   return Theme.closed;
  }
    
}
export default Unity;