
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Header from './components/Header';

<div>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={mainGrid} />
        <Route path="/create" element={CreateSong} />
      </Routes>
    </main>
  </div>





export default App;
