import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Main, Admin } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/admin' component={Admin} />
        <Route path='/' component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
