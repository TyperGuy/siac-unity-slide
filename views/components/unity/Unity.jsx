import React from 'react';
import Styles from './Unity.module.css';
import img from '../../assets/black-yellow.jpg';


function Unity(){
  const entrada ='10:10';
  const saida ='10:10';
  const local = 'Luanda, Talatona, Via A12';
  return (
    <div className={Styles.unityContainer}>
      <div className={Styles.unityChildContainer}>
        <img className={Styles.unityIMG} src={img} alt=""/>
        <div className={Styles.row}><p className={Styles.unityName}>SIAC-Kalawenda</p><span className="unity-estado">Aberto</span></div>
        <hr className={Styles.unitySimpleLine}/>
        <div className={Styles.row}>
           <li ><i className="fas fa-clock"/> <span>Abre: {entrada}</span></li>
           <li ><i className="fas fa-clock"/> <span>Fecha: {saida}</span></li>
        </div>
        <p className="unity-descricao">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Porro totam reiciendis deleniti dignissi...
        </p>
        <div className="row location">
          <p><i className="fas fa-map-marker-alt"/> <span>{local}</span></p>
        </div>
        <button className="locate-btn">Leva-me lá</button>
      </div>   
    </div>
  );
    
}
export default Unity;