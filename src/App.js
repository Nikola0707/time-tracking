import User from "./components/User/User.component";
import "./App.css";
import Card from "./components/Card/Card.component";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="user">
          <User />
        </div>
        <div className="card">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
