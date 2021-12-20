import IMG from './parceiros/minjusdh.png';
import Styles from './Partners.module.css';
const Partner = (props) =>{
  return(
    <div className={Styles.partner} style={{width:"100%",height:"100%",display: "flex",justifyContent:"center",alignItems: "center",backgroundColor:"#fff"}}>
      <img src={props.img} style={{maxWidth:"80%",maxHeight:200}} alt="" />
    </div>
  )
}
export default Partner;