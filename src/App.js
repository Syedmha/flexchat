import './App.css';
import NavBar from './components/NavBar/NavBar';
import ChatBody from './components/ChatBody/ChatBody';
import SignIn from './components/SignIn/SignIn';
import { auth } from './firebase/config';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function App( ) {

  const [user] = useAuthState(auth);
  
  
  
  return (
    <div className="__main">
      <NavBar />
      { user? <ChatBody />: <SignIn /> }
      
    </div>
  );
}


export default App;
