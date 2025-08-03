import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
  {routes.map((routeItem, idx) => (
    <Route
      key={idx}
      path={routeItem.path}
      exact={routeItem.exact}
      component={routeItem.component}
    />
  ))}
</Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
