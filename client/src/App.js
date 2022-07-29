import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <div className="app">
      <Navbar user={user}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={user ? <Navigate to='/'/> : <Login/> }/>
        <Route path='/post/:id' element={user ? <Post/> : <Navigate to='/login' /> } />
      </Routes>
    </div>
  );
}

export default App;
