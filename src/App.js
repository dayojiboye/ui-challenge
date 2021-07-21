import { Route, Switch, Redirect } from "react-router-dom";

// layouts
import LandingLayout from "./layouts/landing";

// pages
import { HomePage } from "./pages/home";

function App() {
  return (
    <>
      <Switch>
        <LandingLayout>
          <Route path="/" exact component={HomePage} />
          <Redirect to="/" />
        </LandingLayout>
      </Switch>
    </>
  );
}

export default App;
