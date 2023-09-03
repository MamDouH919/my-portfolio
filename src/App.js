import Header from "./Components/Layouts/Header";
import Home from "./Pages/Home";
import { withRouter, Switch, Route } from "react-router";
import './App.css'
import Footer from "./Components/Layouts/Footer";
import { Fragment } from "react";
import Dashboard from "./Pages/Dashboard";
import { useEffect, useState } from "react";
import Preloader from "./Components/Customs/loading/PreLoading";
import AnimationPage from "./Components/Customs/loading/AnimationPage";
import Routes from "./Routes/Routes";
import withApolloProvider from "./Hooks/ApolloProv";

function App(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <Preloader />
  ) : (
    <AnimationPage>
      {/* <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Header />
        <Switch >
          <Route path="/" exact component={Home} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Switch>
        <Footer />
      </div> */}
      <Routes {...props} />
    </AnimationPage>
  );
}

export default withApolloProvider(withRouter(App));
