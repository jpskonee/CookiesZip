import "./styles/app.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "./components/pages/Index";
import AttributePage from "./components/pages/AttributePage";

import "animate.css";

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/attribute" component={AttributePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
