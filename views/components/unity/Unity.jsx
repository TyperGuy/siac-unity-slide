import React from 'react';
import Styles from './Unity.module.css';
import img from '../../assets/black-yellow.jpg';
import { MdFmdGood } from "react-icons/md";


function Unity(){
  const entrada ='10:10';
  const saida ='10:10';
  const local = 'Luanda, Talatona, Via A12';
  return (
    <div className={Styles.unityContainer}>
      <img className={Styles.unityIMG} src={img} alt=""/>
      <div className={Styles.unityChildContainer}>
        <h1 className={Styles.unityName}>SIAC-Kalawenda</h1>
        <div className={Styles.adress}>
          <MdFmdGood/> 
          <span>{local}</span>
        </div>
        <hr className={Styles.unitySimpleLine}/>
        <p className={Styles.unityDesciption}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Porro totam reiciendis deleniti dignissi...
        </p>
        
        <button className={Styles.locateBtn}>Leva-me lá</button>
      </div>   
    </div>
  );
    
}
export default Unity;