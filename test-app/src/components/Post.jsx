import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Post(props) {
    const { SelectedPost } = props
    const [Comments, setComments] = useState([{}]);
    const [Fetched, setFetched] = useState(false);
    
    
    function getComments(){
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${Number(SelectedPost)+1}`)
        .then(res => {setComments(res.data)
                      setFetched(true)})
        .catch(err => console.log(err))
    }

    useEffect(() => {
        if (!Fetched) getComments()
        else console.log(Comments)
    }, [Fetched]);
    

  return (
    <div>
      {Comments.map((com,id) => {
        return(
          <div>
            <h3>{com.email}</h3>
            <h4>{com.name}</h4>
            <p>{com.body}</p>
          </div>
        )
      })}
       
    </div>
  )
}
