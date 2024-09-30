import { useState } from 'react'

// styles
import styles from './Signup.module.css'

export default function Signup() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: implement signup logic using Firebase Auth
    console.log('Display Name:', displayName);
    console.log('Email:', email);
    console.log('Password:', password);
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Signup</h2>
      <label>
        <span>display name:</span>
        <input 
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          required
        />
      </label>
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
      <button className='btn'>Signup</button>
    </form>
  )
}