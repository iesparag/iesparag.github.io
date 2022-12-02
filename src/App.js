
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Tech from './components/Tech';
import { Box } from '@chakra-ui/react';
import Education from './components/Education';
import Softskill from './components/Softskill';

function App() {

  return (
    <div  >
      <Navbar />
      <Home/>
      <Box px={{base:"10px",md:"80px",lg:"100px" }} >
        <About/>
        <Education/>
        <Tech/>
        <Softskill/>
      </Box>
     
    </div>
  );
}

export default App;
