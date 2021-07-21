import { useEffect } from "react";
import { Switch, Redirect } from "react-router-dom";
import AppRoute from "./hoc/appRoute";
import { useSelector } from "react-redux";

// layouts
import LandingLayout from "./layouts/landing";
import AuthLayout from "./layouts/auth";

// pages
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { SignupPage } from "./pages/signup";
import { AccountSuccessPage } from "./pages/accountSuccess";

function App() {
  const { currentUser } = useSelector((state) => {
    return {
      currentUser: state.auth.currentUser,
    };
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return (
    <>
      <Switch>
        <AppRoute exact path="/" component={HomePage} layout={LandingLayout} />

        {!currentUser && (
          <AppRoute path="/login" component={LoginPage} layout={AuthLayout} />
        )}

        <AppRoute path="/signup" component={SignupPage} layout={AuthLayout} />

        {currentUser && (
          <AppRoute
            path="/account-success"
            component={AccountSuccessPage}
            layout={AuthLayout}
          />
        )}
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
