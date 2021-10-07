import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Main, Admin, Category, Product, ContentEdit } from './routes';
import Navbar from './components/navbar';
import ContentCreate from './routes/ContentCreate';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route
          exact
          path='/admin/:contentType/:contentId'
          component={ContentEdit}
        />
        <Route exact path='/admin/new-content' component={ContentCreate} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/category/*' component={Category} />
        <Route exact path='/products/*' component={Product} />
        <Route path='/' component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
