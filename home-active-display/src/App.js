import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from './Components/Weather/Weather';
import SensorInfo from './Components/SensorInfo/SensorInfo';

//Mocked service for testing purpose, remove when deployed for integration
import { mockedBackend } from './Mocks/mockedBackend';
mockedBackend();

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Weather />} />
          <Route exact path="/sensorInfo" element={<SensorInfo />} />
        </Routes>  
      </div>
    </BrowserRouter>

    
  );
}

export default App;