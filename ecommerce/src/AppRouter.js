import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductsList";
import ProductView from "./components/ProductView";
import AuthenticationView from "./components/AthenticationView";
import LogOut from "./components/LogOut";
import CartItems from "./components/CartItems";
import CheckOut from "./components/CheckOut";
import OrderHistory from "./components/OrderHistory";
import { useUserContext } from "./context/UserProvider";
import { Redirect } from "react-router-dom";

var AuthRoute = (Component) => {
  var { user } = useUserContext();
  return () => {
    return user ? <Component /> : <Redirect to="/login" />;
  };
};

var AppRouter = () => {
  return (
    <div>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={ProductList} />
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
        {/* <Route exact path="/products" component={ProductList} /> */}
        <Route path="/product/:id" component={ProductView} />
        <Route path="/logout" component={LogOut} />
        <Route path="/cart" component={CartItems} />
        <Route path="/checkout" component={AuthRoute(CheckOut)} />
        <Route path="/history" component={AuthRoute(OrderHistory)} />
      </Switch>
    </div>
  );
};

export default AppRouter;
