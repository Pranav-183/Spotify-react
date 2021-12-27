import { useNavigate } from 'react-router-dom';
import useFetch from '../useFetch'

const Login = () => {
   const {data:profile, error, isPending} = useFetch('http://localhost:8000/profiles')
   const signupLogin = Array.from(document.getElementsByClassName('signupLogin'))[0]
   let signedIn;
   const navigate = useNavigate()
   localStorage.setItem('SignedInStatus', false)
   document.addEventListener('DOMContentLoaded', () => {
      signedIn = localStorage.getItem('SignedInStatus')
   })

   function saveSignedInStatus(status) {
      localStorage.setItem('SignedInStatus', status)
   }

   document.onkeyup = (event) => {
      if (event.code === 'Enter') {
         event.preventDefault()
      }
   }

   const submit = (e) => {
         let i = 0;
         if (e.target.parentElement.children[2].value === profile[i].username && e.target.parentElement.children[3].value === profile[i].password) {
            signedIn = true
            saveSignedInStatus(signedIn)
            signupLogin.innerHTML = `
            <div>${profile[i].username}</div>
            `
            navigate('/')
         } else if (e.target.parentElement.children[2].value === profile[i+1].username && e.target.parentElement.children[3].value === profile[i+1].password) {
            signedIn = true
            saveSignedInStatus(signedIn)
            signupLogin.innerHTML = `
               <div>${profile[i+1].username}</div>
            `
            navigate('/')
         } else {
            signedIn = false
            saveSignedInStatus(signedIn)
            e.target.parentElement.children[1].style.display = 'block';
            signupLogin.innerHTML = `
               <div class="signup">
                  <button><Link to="/signup">Sign Up</Link></button>
               </div>
               <div class="login">
                  <button><Link to="/login">Log In</Link></button>
               </div>
            `
            setTimeout(() => {
               e.target.parentElement.children[1].style.display = null
            }, 5000);
         }
   }

   const showPassword = (e) => {
      if (e.target.checked === false) {
         e.target.parentElement.children[3].type = 'password'
         console.log(e.target.parentElement.children[3]);
      } else {
         e.target.parentElement.children[3].type = 'text'
         console.log(e.target.parentElement.children[3]);
      }
   }

   return (
      <div className='loginComponent'>
         {isPending && <div>Loading</div>}
         {error && <div>{error}</div>}
         {profile && 
         <>
            <h1 className='logInToSpotifyElement'>Log In To Spotify</h1>
            <h3 id='wrongLogin'>Incorrect Username or Password</h3>
            <input type="text" id='usernameInput' autoComplete='off' placeholder='Enter your username' />
            <input type="password" id='passwordInput' autoComplete='off' placeholder='Enter your password' />
            <input type="checkbox" id="showpassword" autoComplete='off' onClick={showPassword} />
            <h5>Click here &nbsp;&nbsp;<i className="material-icons" style={{position:'relative', right: '5px', top: '7px'}}>arrow_downward</i>to Log In</h5>
            <button type='submit' id='loginSubmitBtn' onClick={submit}>Log In</button>
         </>
         }
      </div>
   )
}

export default Login;