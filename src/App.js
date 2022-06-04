import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import TheNavbar from "./components/layouts/TheNavbar";
import CoinListPage from "./pages/CoinListPage";
import TodoListPage from "./pages/TodoListPage";
import "antd/dist/antd.min.css";
// 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false'

class App extends React.Component {
  render() {
    return (
      <div>
        <TheNavbar />
        <Switch>
          <Route path="/" exact>
            <CoinListPage />
          </Route>
          <Route path="/todo-list">
            <TodoListPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
