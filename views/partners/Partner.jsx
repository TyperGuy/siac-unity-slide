import IMG from './parceiros/minjusdh.png';
const Partner = (props) =>{
  return(
    <div style={{width:"100%",height:200,backgroundColor:"#fafa",display: "flex",justifyContent:"center",alignItems: "center"}}>
      <img src={props.img} style={{maxWidth:300}} alt="" />

    </div>
  )
}
export default Partner;