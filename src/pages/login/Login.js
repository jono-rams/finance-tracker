import { useState } from 'react'

// styles
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: implement login logic using Firebase Auth
    console.log('Email:', email);
    console.log('Password:', password);
  }

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </label>
      <button className='btn'>Login</button>
    </form>
  )
}