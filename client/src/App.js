import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Main, Admin } from './routes';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/admin' component={Admin} />
        <Route path='/' component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
