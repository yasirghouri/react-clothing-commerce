import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
