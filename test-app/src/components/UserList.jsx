import React, { useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Profile from './Profile';



export default function UserList(props) {
  const { UserList, getUsers } = props


  useEffect(() => {
    getUsers()
  }, []);

  return (
    <div className='user-cards'>
      {UserList.map((user,i) =>{
        return(
          
           
          
          <div className='user-card'>
            
            <h1>{user.username}</h1>
            <h2>{user.name}</h2>
            <h4>{user?.address?.city}</h4>
            <p>{user.phone}</p>
            <Link to={`/Profile/${i}`}><button id='navigate-profile-button'>Find Profile</button></Link>

          </div>
        )

      })}

      <Routes>
        <Route path='/Profile/:id' element={<Profile Users={UserList}/>}/>
       </Routes>

    </div>
  )
}
