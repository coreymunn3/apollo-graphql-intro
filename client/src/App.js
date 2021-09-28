import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Main, Admin, Category, Product } from './routes';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/category/*' component={Category} />
        <Route exact path='/products/*' component={Product} />
        <Route path='/' component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
