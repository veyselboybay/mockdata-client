import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Playground from './pages/Playground';
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
