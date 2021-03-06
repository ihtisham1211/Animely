import { Provider } from "react-redux";
import store from "./store";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from "./components/homeScreen/Body.js";
import Header from "./components/global/Header.js";
import "./app.css";
import Footer from "./components/global/Footer";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Router>
          <Route exact path="/" component={Body} />
          <Switch>
            {/* <PrivateRoute path="/todolist" component={Body} /> */}
            <Route exact path="/main" component={Body} />
          </Switch>
        </Router>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
