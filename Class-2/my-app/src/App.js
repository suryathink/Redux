import './App.css';
import Input from './Components/Input';
import Results from './Components/Results';
import City from './Components/City';
function App() {
  return (
    <div className="App">
    <div style={{display:"flex", gap:"10px"}}>
    <Input />
     <City />
    </div>
     
     <Results />
    </div>
  );
}

export default App;
