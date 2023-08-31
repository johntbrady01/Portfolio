
import { BrowserRouter as Router } from "react-router-dom"
import './App.css';
import ApplicationViews from "./views/ApplicationViews";
import Header from "./nav/Header";

function App() {
  return (
    <Router>
      <Header />
      <ApplicationViews />
    </Router >
  );
}

export default App;
