import React,{useState} from 'react'
import './Login.css'
import { NavLink,useNavigate} from 'react-router-dom'

const Login = () => {
  const history=useNavigate();


  const [email, setemail] = useState('');
  const [password, setpassword] = useState('')

  const loginUser=async(e)=>{
     e.preventDefault();

     const response=await fetch('/login',{

      method:"POST",

      headers:{
       "Content-Type":"application/json"
      },
      body:JSON.stringify(email,password)

     })

     const data=response.json();

     if(response.status===400 || !data){
        window.alert('invalid credentails')
     }

        else{
          window.alert('login sucessfull');
          history("/");

        }

  }





  return (
    <section className='login'>
    <div className="container"   >
      <div className="login-content">
        <div className="login-form">

          <div className="login-title">
            <h2>Login</h2>
          </div>

       <form method='POST' className='register-form' id='register-form'>


         
           <div className="form-group">
         <label htmlFor="">Email</label>
           <input type="text" name='email' id='email' autoComplete='off' value={email} onChange={(e)=> setemail(e.target.value)} placeholder='Your Email' />
           </div>
        

           <div className="form-group">
         <label htmlFor="">Password</label>
           <input type="password" name='password' id='password' autoComplete='off' value={password} onChange={(e)=> setpassword(e.target.value)} placeholder='Enter your password' />
           </div>

             
          

             
            <div className="form-group form-button">
            <input type="submit"  name="login" id='login' value="Log in" onClick={loginUser}/>

            </div>

       </form>


       <div className="already-register">

       <NavLink to="/signup" >Want to create Account?</NavLink>
       </div>

        </div>
      </div>
    </div>


   </section>
  )
}

export default Login