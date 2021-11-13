import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import ContentArea from './components/ContentArea/ContentArea';
import LeftNavigation from './components/LeftNavigation/LeftNavigation';
import LoginForm from './components/LoginForm';

function App() {

  const [loggedIn, setloggedIn] = useState(false);
  const [loginError, setloginError] = useState(false);

  const verifyLogin = (uid, pwd) => { 
    return uid === 'mahesh@gmail.com' && pwd === '121212';
  }

  const loginHandler = (uid, pwd) => {
    if(verifyLogin(uid, pwd)) {
      setloggedIn(true)
    }
    else {
      setloggedIn(false); 
      setloginError(true);
    }
  }

  return (
      <div class="app-root">
        {
          loggedIn ?           
          <>
            <AppHeader />
            <div class="app-menu-content">
              <LeftNavigation />
              <ContentArea />
            </div>
          </>
          : <LoginForm loginHandler={ loginHandler } loginError={ loginError }  />
        }
      </div>
  );
}

export default App;
