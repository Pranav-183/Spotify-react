import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
   const [ time, setTime ] = useState(new Date().toString().substring(16,24))
   setTimeout(() => {
      setTime(new Date().toString().substring(16,24))
   }, 1000);
   const navigate = useNavigate()

   return (
      <div className="header">
         <div className="header-icons">
            <span className="material-icons header-icon" onClick={() => navigate(-1)}>arrow_back_ios</span>
            <span className="material-icons header-icon" onClick={() => navigate(+1)}>arrow_forward_ios</span>
         </div>
         <div className="time">
            {time}
         </div>
         <div className="signupLogin">
         <div className="signup">
            <button><Link to="/signup">Sign Up</Link></button>
         </div>
         <div className="login">
            <button><Link to="/login">Log In</Link></button>
         </div>
         </div>
      </div>
   );
}
 
export default Header;