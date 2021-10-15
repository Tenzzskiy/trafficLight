import logo from './logo.svg';
import './App.css';
import {Red} from "./components/red"
import {Green} from "./components/green"
import {Yellow} from "./components/yellow"
import {BrowserRouter,Route} from "react-router-dom";
import {switchRed,switchGreen,switchYellow,store} from "./state";

function App() {
  let red = "/Red"
  let green = "/Green"
  let yellow = "/Yellow"


  return (
      <BrowserRouter>
    <div className="traffic">
    <Route path={red} render={() =>{
        switchRed();
        if (store.state.redIsActive === true){

        }

    }} />
    <Route path={green} component={Green} />
    <Route path={yellow} component={Yellow} />


      <Red />
        <Yellow />
        <Green />

    </div>
      </BrowserRouter>
  );
}

export default App;
