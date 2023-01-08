import React , {useEffect,useContext} from 'react';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Signup from './Pages/Signup';
import './App.css';
import Home from './Pages/Home'
import Create from './Pages/Create'
import Login from './Components/Login/Login';
import View from './Pages/ViewPost';
import { AuthContext, FirebaseContext } from './store/Context'
import Post  from './store/PostContext';
/**
 * ?  =====Import Components=====
 */


function App() {
   const {user,setUser} =useContext(AuthContext)
   const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
  })
  })
  return (
    <div>
    
    <BrowserRouter>
     
     <Routes>
     
       <Route  path="/" element={<Home />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login/>} />
       <Route path="/create" element={<Create />} />
       <Route path="/view" element={<View/>} />
      
     </Routes>
   </BrowserRouter>
    
    
   

     
    </div>
  );
}

export default App;