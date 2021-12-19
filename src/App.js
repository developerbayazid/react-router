import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="friend/:id" element={<FriendDetails />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
}

export default App;
