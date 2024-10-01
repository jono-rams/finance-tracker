import { Link, Outlet } from 'react-router-dom'
import { useLogout } from '../hooks/authentication'

// styles
import styles from './Navbar.module.css'

export default function Navbar() {
  const { logout } = useLogout();

  return (
    <div>
      <header>
        <nav className={styles.navbar}>
          <ul>
            <li className={styles.title}>myMoneyTracker</li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
            <li>
              <button className='btn' onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
