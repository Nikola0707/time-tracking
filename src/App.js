import User from "./components/User/User.component";
import "./App.css";
import Card from "./components/Card/Card.component";
import data from "./Data/data.json";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="user">
          <User />
        </div>
        <div className="card">
          {data.map((data) => {
            return (
              <Card
                title={data.title}
                dailyCurrent={data.timeframes.daily.current}
                dailyPrevious={data.timeframes.daily.previous}
                weeklyCurrent={data.timeframes.weekly.current}
                weeklyPrevious={data.timeframes.weekly.previous}
                montlyCurrent={data.timeframes.monthly.current}
                montlyPrevious={data.timeframes.monthly.previous}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
