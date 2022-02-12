import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
    const newUser = await signIn(email, password);
    setUser(newUser);
  }

  async function handleSignUp() {
    const newUser = await signUp(email, password);
    setUser(newUser);
  }

  return (
    <div className='sign-in'>
      <h1>Bands</h1>
      <form onSubmit={handleSignIn}>
        <label>
          Email
          <input required type='email' onChange={e => setEmail(e.target.value)} name='email' />
        </label>
        <label>
          Password
          <input required type='password' onChange={e => setPassword(e.target.value)} name='password' />
        </label>
        <button>Sign In</button>
        <button type='button' onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}
