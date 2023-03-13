import "./App.css";
import Input from "./Components/Input";
import Results from "./Components/Results";
import City from "./Components/City";
import Nav from "./Components/Nav/Nav";
import RoutesComp from "./Components/Routes/Routes"
function App() {
  return (
    <div className="App">
      <Nav/>
      <RoutesComp />
      {/* <div style={{ display: "flex", gap: "10px" }}>
        <Input />
        <City />
      </div>

      <Results /> */}
    </div>
  );
}

export default App;
