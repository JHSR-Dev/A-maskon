import './App.css';
import NavBar from './components/NavBar';
import Routes from './components/Routes';
import firebase from 'firebase/app'
import fireBaseKeys  from './config/keys'

function App() {
  if (!firebase.apps.length) {
    console.log("Connected with Firebase");
    firebase.initializeApp(fireBaseKeys.firebaseConfig);
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
      </header>
      <Routes />
    </div>
  );
}

export default App;
