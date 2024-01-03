import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Playground from './pages/Playground';
import NotFoundPage from "./pages/NotFoundPage";
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import Register from './pages/Register'
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <NavBar />
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
