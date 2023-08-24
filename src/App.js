import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Pic_of_the_Day from './Components/Pic_of_the_Day';
import Letters from './Components/Letters';
import NoMatch from './Components/NoMatch';
import WishPage from './Components/Button';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/wishpage" element={<WishPage />}></Route>
        <Route path="/pic_of_the_Day" element={<Pic_of_the_Day />}></Route>
        <Route path="/letters" element={<Letters />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
