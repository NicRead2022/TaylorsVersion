
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import CreateSong from './components/CreateSong';
import SongTitle from './components/SongTitle';
import handleUpdate from './components/UpdateSong';

const App = () => {

return (
<div className='container'>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/CreateSong" element={<CreateSong/>} />
        <Route path="/songs" element={<SongTitle/>} />
        <Route path="/updateSong" element={<handleUpdate/>}/>
      </Routes>
    </main>
  </div>

)
}






export default App;
