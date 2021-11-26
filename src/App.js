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



const myData = [
  {id: "SS123", name:"Mahesh", tmp:"200",  phone: "232323", address:{ city: "Hyderabad"  }},
  {id: "SS123", name:"DDDD", tmp:"600", phone: "232323", address:{ city: "B"  }},
  {id: "SS125", name:"GGGG", tmp:"400", phone: "232323", address:{ city: "C"  }},
  {id: "SS126", name:"SSS", tmp:"500", phone: "232323", address:{ city: "D"  }},
  {id: "SS127", name:"GGGG", tmp:"600", phone: "232323", address:{ city: "F"  }}
]

const output = {
  SS123: {id: "SS123", name:"Mahesh", phone: "232323", address:{ city: "Hyderabad"  }},
  SS124: {id: "SS124", name:"DDDD", phone: "232323", address:{ city: "B"  }}
}

const newObj = myData.reduce((acc, user) => {
  if(acc[user.id]){
    acc[user.id] = acc[user.id] + user.tmp
  }
  else {
    acc[user.id] =user.tmp
  }
  // acc[user.id] = acc[user.id] ? acc[user.id] + user.tmp : user.tmp;

  return acc;
}, {});

const newArr = Object.values(newObj);

