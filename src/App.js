import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';

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
