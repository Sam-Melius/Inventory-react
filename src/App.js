import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getUser, logout } from './services/fetch-utils';

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
    

    <div className="App">
      
    </div>
  );
}

