import './App.css';
import Home from "./Container/Home/Home";
import Admin from "./Container/Admin/Admin";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="Container">
        <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/admin" exact component={Admin}/>
           <Route render={()=> <h1>Not Found</h1>}/>
        </Switch>

    </div>
  );
}

export default App;
