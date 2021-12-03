import Four from "../../images/Four.jpg"

const FourTopRight = () => {
   return (
      <div className="topRight FourTopRight">
         <div className="albumImg">
            <img src={Four} alt="Four" />
         </div>
         <div className="albumText">
            <span>ALBUM</span>
            <span>Four</span>
            <span>Pranav-183</span>
         </div>
      </div>
   );
}
 
export default FourTopRight;