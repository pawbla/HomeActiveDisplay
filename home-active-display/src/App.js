import './App.css';
import Weather from './Components/Weather/Weather';

//Mocked service for testing purpose, remove when deployed for integration
import { mockedBackend } from './Mocks/mockedBackend';
mockedBackend();

function App() {
  return (
    <div className="main">
      <Weather />   
    </div>
    
  );
}

export default App;