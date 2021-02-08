import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Auth from "./pages/Auth/Auth";
import HomePage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
