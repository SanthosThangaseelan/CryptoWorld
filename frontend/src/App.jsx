import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Lesson from './pages/Lesson';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import TryAES from './pages/TryAES';
import TryDES from './pages/tryDES';
import TryHashing from './pages/TryHashing';
import TrySignature from './pages/TrySignature';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lesson/:topic" element={
        <Lesson />
      } />
      <Route path="/try-aes" element={<TryAES />} />
      <Route path="/try/des" element={<TryDES />} />
      <Route path="/try/hashing" element={<TryHashing />} />
      <Route path="/try/signature" element={<TrySignature />} />

      <Route path="/quiz/:topic" element={<Quiz />} />
    </Routes>
  );
}

export default App;
