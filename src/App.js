import './App.css';
import NavBar from './components/NavBar';
import Routes from './components/Routes';

function App() {
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
