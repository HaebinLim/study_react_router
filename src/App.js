import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Links from './components/Links';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import NotFound from './pages/NotFound';
import NavLinks from './components/NavLinks';
import Login from './pages/Login';

const isLogin = true;

function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Routes>
        <Route path="/login" element={isLogin ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />}>
          <Route path=":id" element={<Profile />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;