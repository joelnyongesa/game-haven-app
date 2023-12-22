import './App.css';
import supabase from './config/supabaseClient';
import Landing from './layout/Landing';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './layout/Home';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route element={<Landing />}>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route />
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;
