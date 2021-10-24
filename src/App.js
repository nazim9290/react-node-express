import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Updateuser from './component/UpdateUser/Updateuser';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path="/">
    <Home/>
      </Route>
      <Route path="/home">
    <Home/>
      </Route>
      <Route path="/about">
    <About/>
      </Route>
      <Route path="/users/update/:id">
    <Updateuser/>
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
