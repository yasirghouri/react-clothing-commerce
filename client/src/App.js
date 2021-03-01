import React, { useEffect, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "./components/Header/Header";
import AuthPage from "./pages/Auth/Auth";
import ShopPage from "./pages/Shop/Shop";
import CheckoutPage from "./pages/Checkout/Checkout";
import { selectCurrentUser } from "./redux/user/userSelectors";
import { checkUserSession } from "./redux/user/userActions";
import GlobalStyles from "./GlobalStyles";

const HomePage = lazy(() => import("./pages/Homepage/Homepage"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSession: () => dispatch(checkUserSession()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
