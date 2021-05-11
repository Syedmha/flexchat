import './App.css';
import NavBar from './components/NavBar/NavBar';
import ChatBody from './components/ChatBody/ChatBody';
import SignIn from './components/SignIn/SignIn';
import { auth } from './firebase/config';
import {
  Responsive,
  getWindowDimension,
  getDeviceTypeInfo,
  isMobileDevice,
  isTabletDevice,
  isLaptopDevice,
  isBiggerThanLaptop,
  IDeviceInfo,
  IWindowDimension
} from 'typed-responsive-react';



import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function App( ) {

  const [user] = useAuthState(auth);
  
  
  return (
    <div className="__main">
      <Responsive displayIn={["tablet", "laptop", "biggerthanlaptop"]}>
              <NavBar />
              { user? <ChatBody />: <SignIn /> }
      </Responsive>
      <Responsive displayIn={["Mobile"]}>
              { user? <ChatBody />: <SignIn />}
      </Responsive>
      
      
    </div>
  );
}


export default App;
