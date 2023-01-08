import React, { useContext, Fragment,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from '../../store/Context'
import {useNavigate} from 'react-router-dom'

// import firebase from 'firebase/compat/app';
// import "firebase/compat/auth";
// import "firebase/compat/database";
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';


// const create = () => {
// 
// 
// }
 
//var storageRe = storage.ref();
function Create(){
  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [Price,setPrice]=useState('')
  const [image,setImage]=useState(null)
const {firebase} = useContext(FirebaseContext)
const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const date = new Date()
  const handleSubmit=()=>{
    console.log("Image.Name :",image.name)
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      console.log("Image.Name :",ref)
       ref.getDownloadURL().then((url)=>{
      console.log(url+'url')
     firebase.firestore().collection('product').add({
      name,
      category,
      Price,
      url,
      userId:user.uid,
      createdAt:date.toDateString()


      })
     navigate('/')
       })
     })

   }

  return (
    <div> <Fragment>
    <Header />
    <card>
      <div className="centerDiv">
        
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
          onChange={(e)=>setName(e.target.value)}
            id="fname"
            name="Name"
            //defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            value={category}
          onChange={(e)=>setCategory(e.target.value)}
            id="fname"
            name="category"
            //defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input className="input" type="number"
          value={Price}
          onChange={(e)=>setPrice(e.target.value)}
          id="fname" name="Price" />
          <br />
          
        <br />
        <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) :'' }></img>
        
          <br />
          <input  onChange={(e)=>{
            setImage(e.target.files[0])
          }} type="file" />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        
      </div>
    </card>
  </Fragment>
  </div>
   
  );
};


export default Create;



