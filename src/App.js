
import './App.css';
import { useEffect, useState } from 'react';
import { getUser, logout } from './services/fetch-utils';
import { BrowserRouter as Router,
  NavLink,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import AuthPage from './AuthPage';
import ListPage from './ListPage';
import DetailPage from './DetailPage';
import CreatePage from './CreatePage';

export default function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

  useEffect(() => {
    async function fetch() {
      const fetchUser = await getUser();
      if (fetchUser) setUser(fetchUser);
    }
    fetch();
  }, []);

  async function handleLogout() {
    await logout();
    setUser();
  }

  return (
    
    <Router>
      <div className="App">
        <header>
          {
            user &&
            <ul>
              <li>
                <NavLink to='/bands'>List Page</NavLink>
              </li>
              <li>
                <NavLink to='/create'>Create Page</NavLink>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          }
        </header>
        <main>
          <Switch>
            <Route exact path='/'>
              {
                user
                  ? <Redirect to='bands'/>
                  : <AuthPage setUser={setUser} />
              }
            </Route>
            <Route exact path='/bands'>
              {
                !user
                  ? <Redirect to='/'/>
                  : <ListPage />
              }
            </Route>
            <Route exact path='/bands/:id'>
              {
                !user
                  ? <Redirect to='/'/>
                  : <DetailPage />
              }
            </Route>
            <Route exact path='/create'>
              {
                !user
                  ? <Redirect to='/'/>
                  : <CreatePage />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
    
  );
}

