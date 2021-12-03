import { useState } from "react";

const Header = () => {
   const [ time, setTime ] = useState(new Date().toString().substring(16,24))
   setTimeout(() => {
      setTime(new Date().toString().substring(16,24))
   }, 1000);

   return (
      <div className="header">
         <div className="header-icons">
            <span className="material-icons header-icon">arrow_back_ios</span>
            <span className="material-icons header-icon">arrow_forward_ios</span>
         </div>
         <div className="time">
            {time}
         </div>
      </div>
   );
}
 
export default Header;