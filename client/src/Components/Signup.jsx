import React ,{useState}from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './Signup.css'
import img from '../Images/signupimg.jpg'




const Signup = () => {
  const history= useNavigate();


  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [work, setwork] = useState('');
  const [password, setpassword] = useState('')
  const [cpassword, setcpassword] = useState('')

   


 

  const PostData=async(e)=>{

    e.preventDefault();
   const data={name,email,phone,work,password,cpassword};

   try {
       const response=await fetch('/register',{
         method:'POST',
         headers:{
           'Content-Type':'application/json',
         },
         body:JSON.stringify(data)

       })
         
       const responseData=await response.json();

       if(response.ok){
         console.log('Data registered!',responseData)
       }
       else{
         console.error('failed',responseData);
         history('/login')

       }
   } catch (error) {
     console.log(error);


   }


  
  }



  return (
    

    <section className='signup'>


     <div className="container">



       <div className="signup-content">




       
         <div className="signup-form">

           <div className="signup-title">
             <h2>Sign up</h2>
           </div>

        <form method='post' className='register-form' id='register-form'>


           <div className="form-group">

          <i className="fa-solid fa-user"></i>
            <input type="text" name='name' id='name' value={name}   autoComplete="off" onChange={(e)=>{setname(e.target.value)}} placeholder='Your name' />
            </div>

            <div className="form-group">
          <i className="fa-solid fa-envelope"></i>
            <input type="text" name='email' id='email' value={email}   autoComplete="off" onChange={(e)=>{setemail(e.target.value)}} placeholder='Your Email' />
            </div>
            <div className="form-group">
          <i className="fa-solid fa-phone"></i>
            <input type="number" name='phone' id='phone' value={phone}   autoComplete="off" onChange={(e)=>{setphone(e.target.value)}} placeholder='Your phone' />
            </div>

            <div className="form-group">
          <i className="fa-solid fa-briefcase"></i>
            <input type="text" name='work' id='work' value={work}   autoComplete="off" onChange={(e)=>{setwork(e.target.value)}} placeholder='Enter your work' />
            </div>

            <div className="form-group">
            <i className="fa-solid fa-lock"></i>
            <input type="password" name='password' id='password' value={password}  autoComplete="off" onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter your password' />
            </div>

              
            <div className="form-group">
          <i className="fa-solid fa-key"></i>
            <input type="password" name='cpassword' id='cpassword' value={cpassword}   autoComplete="off" onChange={(e)=>{setcpassword(e.target.value)}} placeholder='confirm your Password' />
            </div>

              
             <div className="form-group form-button">
             <input type="submit"  name="signup" id='signup' value="Register" onClick={PostData}/>

             </div>

        </form>


        <div className="already-register">

        <NavLink to="/login"  style={{textDecoration:"none",color:"teal"}}>Already Registered ?</NavLink>
        </div>










         </div>


        




       </div>


       <div className="image-illustration">
           <img src={img} alt="" />
         </div>



     </div>


    </section>


  )
}




export default Signup
