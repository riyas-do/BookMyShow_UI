import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import  {Register} from './pages/Registration'
import {Login} from './pages/Login'
function App() {
  return <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/register'} element={<Register />}/>
        <Route path={'/Login'} element={<Login />}/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
