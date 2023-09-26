import React, {useState} from 'react';

function LikeButton() {

  const [likes, setLikes] = useState(0); 
  
  return(
    <div>
       
       <button onClick={()=> setLikes(likes + 1)}>like: {likes}</button>
    </div>
    )
}

export default LikeButton


