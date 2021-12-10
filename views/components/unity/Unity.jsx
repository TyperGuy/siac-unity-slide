import React from 'react';
import Styles from './Unity.module.css';
import img from '../../assets/black-yellow.jpg';
import { MdFmdGood } from "react-icons/md";


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
          <div className={Styles.scheduler}>sdsd</div>
          <div className={Styles.scheduler}>dsddsd</div>
        </div>
        <p className={Styles.unityDesciption}>{props.unity.descriprion}</p>
        
        <button className={Styles.locateBtn}>Leva-me lá</button>
      </div>   
    </div>
  );
    
}
export default Unity;