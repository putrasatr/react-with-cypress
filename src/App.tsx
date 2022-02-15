import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import SideNav from "./components/SideNav/SideNav";
import Habit from "./components/Habit/Habit";
import Accomplishment from "./components/Accomplishment/Accomplishment";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Rewards from "./components/Rewards/Rewards";
import Elements from "./components/Elements/Elements";
import Query from "./components/Query";
import Hydration from "./components/Query/hydration";
import { QueryClientProvider, QueryClient } from "react-query";
interface Props {
  name: string;
}

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <div className="App-container">
            <SideNav />
            <Switch>
              <Route strict exact path="/habits" component={Habit} />
              <Route
                strict
                exact
                path="/accomplishments"
                component={Accomplishment}
              />
              <Route strict exact path="/rewards" component={Rewards} />
              <Route strict exact path="/query" component={Query} />
              <Route
                strict
                exact
                path="/query/hydration"
                component={Hydration}
              />
            </Switch>
          </div>
          <div id="app" className="app">
            <Welcome name="Gleb" />;
          </div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
const Welcome: React.FC<Props> = (props) => {
  const [color, setColor] = useState(false);
  return (
    <>
      <p
        onClick={() => setColor((prev) => !prev)}
        className="Hello"
        style={{ color: color ? "black" : "red", opacity: 0 }}
      >
        Hello, {props.name}
      </p>
      <input type="color" onChange={(e) => setColor(false)}></input>
    </>
  );
};
export default App;
