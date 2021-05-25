import { BrowserRouter, Route, Switch } from "react-router-dom";
import Notepad from './Notepad';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h3>Notepad Online</h3>
        <Switch>
          <Route path="/" exact={true}><Notepad/></Route>
          <Route path="/:id"><Notepad/></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
