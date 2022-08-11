import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Content from './components/Content';
import Loginreg from './components/auth/Loginreg';
import Signup from './components/auth/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout/>}> 
      <Route index element={<Home/>}/>
      <Route path='content' element={<Content/>}/>
      <Route path='login' element={<Loginreg/>}/>
      <Route path='sign' element={<Signup/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
