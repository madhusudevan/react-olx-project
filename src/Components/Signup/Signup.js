import React, { useState,useContext} from 'react';
import {useNavigate , Link} from 'react-router-dom'
import 'firebase/compat/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {FirebaseContext} from '../../store/Context'

import './Signup.css';
//D:\demo\demo\assets\olx-logo.png

export default function Signup() {
  const navigate =useNavigate()
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [password,setPassword]=useState('');
    const {firebase} =useContext(FirebaseContext)

    const handleSubmit= (e)=>{
      console.log(username)
        e.preventDefault()
        console.log(firebase)
         firebase.auth().createUserWithEmailAndPassword(email,password). then ((result)=>{
          
           result.user.updateProfile({displayName:username}).then(()=>{
            firebase.firestore().collection('users').add({
              id:result.user.uid,
              username:username,
              phone:phone
              
            }).then(()=>{
             
               navigate('/login')
              

           })
          })
       })
        

    }

  return (
    <div>
      <div className="signupParentDiv">
      <img src={require('../../images/olx-logo.png')} alt="olx"/>
        <form onSubmit={handleSubmit} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            //defaultValue=""
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
           // defaultValue="Joh"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            //defaultValue="Do"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
           // defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
    
  );

 
}