import { Link, Outlet } from 'react-router-dom'
import { useLogout } from '../hooks/authentication'

// styles
import styles from './Navbar.module.css'
import { useAuthContext } from '../hooks/useAuthContext';

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <div>
      <header>
        <nav className={styles.navbar}>
          <ul>
            <li className={styles.title}>myMoneyTracker</li>
            {!user && (
              <>
                <li><Link to='/login'>Login</Link></li> 
                <li><Link to='/signup'>Signup</Link></li>
              </>  
            )}                                  
            {user && (
              <>
                <li>hello, {user.displayName}</li>
                <li >
                  <button className='btn' onClick={logout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
