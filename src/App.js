
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Tech from './components/Tech';
import { Box } from '@chakra-ui/react';

function App() {

  return (
    <div  >
      <Navbar />
      <Home/>
      <Box px={{base:"10px",md:"80px",lg:"100px" }} >
        
        <About/>
        <Tech/>
      </Box>
     
    </div>
  );
}

export default App;
