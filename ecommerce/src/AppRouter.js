import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductsList";
import ProductView from "./components/ProductView";
import AuthenticationView from "./components/AthenticationView";
import LogOut from "./components/LogOut";
import CartItems from "./components/CartItems";

var AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/login"
          render={(routerProps) => (
            <AuthenticationView {...routerProps} isLogin />
          )}
        />
        <Route
          path="/signUp"
          render={(routerProps) => <AuthenticationView {...routerProps} />}
        />
        <Route exact path="/products" component={ProductList} />
        <Route path="/product/:id" component={ProductView} />
        <Route path="/logout" component={LogOut} />
        <Route path="/cart" component={CartItems} />
      </Switch>
    </div>
  );
};

export default AppRouter;
