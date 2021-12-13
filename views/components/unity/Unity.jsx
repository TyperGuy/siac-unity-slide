import React from 'react';
import Styles from './Unity.module.css';
import img from '../../assets/black-yellow.jpg';
import { MdFmdGood } from 'react-icons/md';
import {BsClockHistory,BsDash} from 'react-icons/bs';

const Theme = { 
  "closed" : {"color": "#FF0000"},
  "opened" : { "color" : "#00FF00" }
}

function Unity(props){

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
          <div style={{ border:'1px dashed #a2a1a1'}} className={Styles.scheduler}><BsClockHistory/><span className={Styles.innerText}>{props.unity.abertura}</span><BsDash/><span className={Styles.innerText}>{props.unity.encerramento}</span></div>
          <div style={{color:'red', backgroundColor:'#ffd2c1'}} className={Styles.scheduler} >Fechado</div>
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