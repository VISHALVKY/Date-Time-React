import './App.css';
import Date from './Date';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <h1>CURRENT DATE</h1>
      <Date/>
      <h1>CURRENT TIME</h1>
      <Clock/>
    </div>
  );
}

export default App;