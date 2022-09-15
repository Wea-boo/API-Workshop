import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Routes, Route, Link, useNavigate} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import UserList from './components/UserList';
import { useState } from 'react';



function App() {
  const [Users, setUsers] = useState([{}]);

  function getUsers(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      setUsers(res.data)
    })
    .catch(err => console.log(err))

  }

  return (
    <div className="App">
      <nav className='navigation'>
        <Link to='/' ><img src="./hospital-flasks-svgrepo-com.svg" alt="" id='logo'/></Link>
        <ul id='contents'>
          <li className='content'><Link to='/Users'>Users</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Users/" element={<UserList UserList={Users} setUserList={setUsers} getUsers={getUsers}/>}/>
        <Route path='/Profile/:id' element={<Profile Users={Users}/>}/>
      </Routes>
  
      

      

    </div>
  );
}

export default App;
