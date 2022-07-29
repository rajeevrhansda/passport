import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar/>
      {/* <Home/> */}
      {/* <Post/> */}
      <Login/>
    </div>
  );
}

export default App;
