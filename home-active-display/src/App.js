import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from './Components/Weather/Weather';
import History from './Components/History/History';
import SensorInfo from './Components/SensorInfo/SensorInfo';
import SystemPage from './Components/System/SystemPage';
import Splash from './Components/Splash/Splash';
import Shutdown from './Components/Shutdown/Shutdown';

//Mocked service for testing purpose, remove when deployed for integration
import { mockedBackend } from './Mocks/mockedBackend';
mockedBackend();

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Splash />} />
          <Route exact path="/weather" element={<Weather />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/sensorInfo" element={<SensorInfo />} />
          <Route exact path="/system" element={<SystemPage />} />
          <Route exact path="/shutdown/:mode" element={<Shutdown />} />
)
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;