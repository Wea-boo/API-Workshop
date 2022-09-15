import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Post from './Post';

export default function Profile(props) {
  const { id } = useParams();
  const { Users } = props;
  const [UserPosts, setUserPosts] = useState([{}]);
  const [ShowComments, setShowComments] = useState([{}])
  const [Fetched, setFetched] = useState([false, false]);
  const [Clicked, setClicked] = useState(false);
  


  function getPosts() {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${Number(id)+1}`)
    .then(res => {
                  setUserPosts(res.data)
                  setFetched([true, false])

                  
                  })
    .catch(err => console.log(err))


  }

  function ToggleViewSpecificComment(numID){
    ShowComments[numID] = !ShowComments[numID]
    setShowComments(ShowComments)
    setClicked(!Clicked)
  }

  useEffect(() => {
    if (!Fetched[0]) getPosts()
    else if (!Fetched[1]){
      setShowComments([...Array(UserPosts.length)].map(e => e = false))
      setFetched([true, true])
    }

    
  }, [Fetched]);


  useEffect(() => {
    
  }, [Clicked]);
  return (
    
    <div>
      {UserPosts.map((post,id) => {
        return(
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={() => ToggleViewSpecificComment(id)}>Comments</button>
            <div>{ShowComments[id] ? <Post SelectedPost={id}/> : ''}</div>
          </div>
        )
      })}
      


    </div>
  )
}
