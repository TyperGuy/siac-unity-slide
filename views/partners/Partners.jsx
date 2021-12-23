import Styles from './Partners.module.css';
import Partner from './Partner.jsx';
import IMgs from './parceiros/Exporter';
import img from './parceiros/family.webp';
const Partners =()=>{
  return(
    <div>
      
      <div className={Styles.upContainer}>
        <img className={Styles.img} src={img} alt="" />
        <div className={Styles.contentContainer}></div>
      </div>
      <div className={Styles.partnersContainer}>
        {
          IMgs.map((partner)=>{
            return(
            <Partner img={partner}/>
            )
          })
        }
      </div>

    </div>
   
  )
}

export default Partners;