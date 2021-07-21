import { Switch, Redirect } from "react-router-dom";
import AppRoute from "./hoc/appRoute";

// layouts
import LandingLayout from "./layouts/landing";
import AuthLayout from "./layouts/auth";

// pages
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { SignupPage } from "./pages/signup";

function App() {
  return (
    <>
      <Switch>
        <AppRoute exact path="/" component={HomePage} layout={LandingLayout} />
        <AppRoute path="/login" component={LoginPage} layout={AuthLayout} />
        <AppRoute path="/signup" component={SignupPage} layout={AuthLayout} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
