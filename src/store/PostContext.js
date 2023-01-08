import { createContext, useState } from "react";
const PostContext = createContext(null)
console.log()
function  Post ({children}) {
    
    const [postDetails,setPostDetails] = useState()
    console.log('PostDeta----',postDetails)
    return(
         <PostContext.Provider value={{postDetails,setPostDetails}} >
          
             {children}
         </PostContext.Provider>
       
    )
    }
    export default Post;
    